import { Input } from "@heroui/input";

import { MapPinIcon } from "./icons";
import { ThemeSwitch } from "./theme-switch";

export default async function SearchInput() {
  return (
    <div className="flex gap-5">
      <Input
        aria-label="Search"
        classNames={{
          inputWrapper: "bg-default-100",
          input: "text-sm",
        }}
        labelPlacement="outside"
        placeholder="Search..."
        startContent={
          <MapPinIcon
            className="text-base text-default-400 pointer-events-none flex-shrink-0"
            strokeWidth={2}
          />
        }
        type="search"
      />

      <ThemeSwitch />
    </div>
  );
}
