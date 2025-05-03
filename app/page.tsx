import SearchInput from "@/components/search-input";
import WeatherLater from "@/components/weather-later";
import WeatherNow from "@/components/weather-now";

export default async function Home(props: {
  searchParams?: Promise<{ q?: string }>;
}) {
  const searchParams = await props.searchParams;
  const query = searchParams?.q || "Jakarta";

  try {
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=2863d05c37cc42758f194451232807&q=${query}&days=10&aqi=no&alerts=no`,
    );
    const weather = await res.json();

    if (weather.error) {
      throw new Error(weather.error.message);
    }

    return (
      <div className="grid grid-cols-1 xl:grid-cols-5 min-h-screen content-center justify-center p-8 sm:p-10 gap-10 font-[family-name:var(--font-geist-sans)]">
        <div className="flex flex-col gap-8 h-full w-full xl:col-span-2">
          <SearchInput />
          <WeatherNow
            currentWeather={weather?.current}
            location={weather?.location}
            totalprecip_in={[
              weather.forecast.forecastday[0].day.totalprecip_in,
              weather.forecast.forecastday[1].day.totalprecip_in,
            ]}
          />
        </div>
        <div className="h-full w-full xl:col-span-3">
          <WeatherLater
            currentWeather={weather?.current}
            laterWeather={weather?.forecast}
          />
        </div>
      </div>
    );
  } catch (error: any) {
    return (
      <div className="flex flex-col items-center justify-center min-h-screen p-8">
        <SearchInput />
        <p className="text-red-500 mt-4 text-xl">Error: {error.message}</p>
      </div>
    );
  }
}
