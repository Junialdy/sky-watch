import SearchInput from "@/components/search-input";
import WeatherLater from "@/components/weather-later";
import WeatherNow from "@/components/weather-now";

export default async function Home() {
  const data = await fetch(
    `http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=Jakarta&days=10&aqi=no&alerts=no`,
  );
  const weather = await data.json();

  return (
    <div className="grid grid-cols-1 xl:grid-cols-5 min-h-screen items-center justify-center p-8 sm:p-10 gap-10 font-[family-name:var(--font-geist-sans)]">
      <div className="flex flex-col gap-8 h-full w-full rounded-2xl xl:col-span-2">
        <SearchInput />
        <WeatherNow currentWeather={weather?.current} />
      </div>
      <div className=" h-full w-full rounded-2xl xl:col-span-3">
        <WeatherLater laterWeather={weather.forecast} />
      </div>
    </div>
  );
}
