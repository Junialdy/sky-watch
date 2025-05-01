import SearchInput from "@/components/search-input";
import WeatherLater from "@/components/weather-later";
import WeatherNow from "@/components/weather-now";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen items-center justify-center p-8 sm:p-10 gap-10 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 border-sky-400  h-full w-full rounded-2xl lg:col-span-2">
        <SearchInput />
        <WeatherNow />
      </div>
      <div className="border-sky-400  h-full w-full rounded-2xl lg:col-span-3">
        <WeatherLater />
      </div>
    </div>
  );
}
