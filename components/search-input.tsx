"use client";
import { useSearchParams, usePathname, useRouter } from "next/navigation";
import { Autocomplete, AutocompleteItem } from "@heroui/autocomplete";
import { useDebouncedCallback } from "use-debounce";
import { useState } from "react";

import { MapPinIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

export default function SearchInput() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { replace } = useRouter();
  const [places, setPlaces] = useState<{ label: string; key: string }[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = useDebouncedCallback(async (term: string) => {
    if (!term) {
      setPlaces([]);

      return;
    }

    setIsLoading(true);

    try {
      const res = await fetch(`/api/search?q=${term}`);
      const data = await res.json();

      if (Array.isArray(data)) {
        const mappedPlaces = data.map((item) => ({
          label: `${item.name}, ${item.country}`,
          key: item.id.toString(),
        }));

        setPlaces(mappedPlaces);
      } else {
        setPlaces([]);
        throw Error("Unexpected API response:", data);
      }
    } catch (error) {
      setPlaces([]);
      throw Error(`Error fetching places: ${error}`);
    } finally {
      setIsLoading(false);
    }
  }, 200);

  return (
    <div className="flex gap-4">
      <Autocomplete
        aria-label="Input search"
        className="bg-default-100 rounded-lg py-1"
        defaultItems={places}
        inputValue={inputValue}
        isLoading={isLoading}
        placeholder="Search..."
        startContent={
          <MapPinIcon
            className="text-base text-default-400 pointer-events-none flex-shrink-0"
            strokeWidth={2}
          />
        }
        onInputChange={(value) => {
          setInputValue(value);
          handleSearch(value);
        }}
        onSelectionChange={(key) => {
          const selectedPlace = places.find((p) => p.key === key);

          if (selectedPlace) {
            const params = new URLSearchParams(searchParams);

            params.set("q", selectedPlace.label);
            replace(`${pathname}?${params.toString()}`);
          }
        }}
      >
        {places.map((place) => (
          <AutocompleteItem key={place.key}>{place.label}</AutocompleteItem>
        ))}
      </Autocomplete>
      <ThemeSwitch className="bg-default-100 rounded-lg p-3" />
    </div>
  );
}
