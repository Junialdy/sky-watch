import SearchInput from "@/components/search-input";

export default function Home() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-5 min-h-screen items-center justify-center p-8 sm:p-10 gap-8 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 border-sky-400 border-2 h-full w-full rounded-2xl p-5 sm:p-8 lg:col-span-2">
        <SearchInput />
        <h2 className="border-amber-300 border-2 rounded-2xl p-5">
          WeatherNow
        </h2>
      </div>
      <div className="border-sky-400 border-2 h-full w-full rounded-2xl p-5 sm:p-8 lg:col-span-3">
        <h1>this is second</h1>
      </div>
    </div>
  );
}
