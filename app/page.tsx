import SearchInput from "@/components/search-input";
import WeatherNow from "@/components/weather-now";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen items-center justify-center p-8 sm:p-10 gap-8 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 border-sky-400 border-2 h-full w-full rounded-2xl p-5 sm:p-8 lg:col-span-2">
        <SearchInput />
        <WeatherNow />
      </div>
      <div className="border-sky-400 border-2 h-full w-full rounded-2xl p-5 sm:p-8 lg:col-span-3">
        <h1>this is second</h1>
      </div>
    </div>
  );
}
