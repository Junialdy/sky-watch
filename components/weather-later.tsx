import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";

import { CalendarIcon, ClockIcon, ThermometerSunIcon, WindIcon } from "./icons";

import { laterWeather, currentWeather } from "@/lib/definitions";
import { getWeatherIcon } from "@/lib/icon-map";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const getUvLevel = (uv: number) => {
  if (uv <= 2) return "Low";
  if (uv <= 5) return "Moderate";
  if (uv <= 7) return "High";
  if (uv <= 10) return "Very High";

  return "Extreme";
};

export default function WeatherLater({
  laterWeather,
  currentWeather,
}: {
  laterWeather: laterWeather;
  currentWeather: currentWeather;
}) {
  // Cari waktu terdekat di forecast yang UV-nya turun di bawah 3 (setelah sekarang)
  const currentDateTime = new Date(currentWeather.last_updated);
  const currentTimestamp = currentDateTime.getTime();

  let uvProtectionEndTime: string | null = null;

  for (const hour of laterWeather.forecastday[0].hour) {
    const hourDate = new Date(hour.time);
    const hourTimestamp = hourDate.getTime();

    if (hourTimestamp > currentTimestamp && hour.uv < 3) {
      uvProtectionEndTime = `${hourDate.getHours().toString().padStart(2, "0")}:${hourDate
        .getMinutes()
        .toString()
        .padStart(2, "0")}`;
      break;
    }
  }

  return (
    <div className="flex flex-col gap-8 h-full">
      <Card className="card-container " shadow="none">
        <CardHeader className="card-header">
          <ClockIcon className="card-header-icon" />
          <p className="card-header-title">Hourly Forecast</p>
        </CardHeader>
        <Divider />
        <CardBody className="forecast-card-body">
          {laterWeather.forecastday[0].hour.map((hour) => {
            const hourDate = new Date(hour.time);
            const currentDate = new Date(currentWeather.last_updated);

            const hourHour = hourDate.getHours();
            const currentHour = currentDate.getHours();

            const formattedTime = `${hourHour.toString().padStart(2, "0")}:${hourDate.getMinutes().toString().padStart(2, "0")}`;

            const isNow = hourHour === currentHour;

            return (
              <Card
                key={hour.time_epoch}
                className={`forecast-card-body-child hover:bg-content1 ${isNow ? "" : "bg-default-100"}`}
                draggable="true"
                shadow="none"
              >
                <p className="text-xl">{isNow ? "Now" : formattedTime}</p>
                <p className="text-4xl">{Math.round(hour.temp_c)}°</p>
                {getWeatherIcon(hour.condition.code)}
              </Card>
            );
          })}
        </CardBody>
      </Card>
      <Card className="card-container " shadow="none">
        <CardHeader className="card-header">
          <CalendarIcon className="card-header-icon" />
          <p className="card-header-title">
            {laterWeather.forecastday.length}-Day Forecast
          </p>
        </CardHeader>
        <Divider />
        <CardBody className="forecast-card-body">
          {laterWeather.forecastday.map((day) => {
            const dayDate = new Date(day.date);
            const currentDate = new Date(currentWeather.last_updated);

            const isToday =
              dayDate.getDate() === currentDate.getDate() &&
              dayDate.getMonth() === currentDate.getMonth() &&
              dayDate.getFullYear() === currentDate.getFullYear();

            const formattedDate = `${dayDate.getDate().toString().padStart(2, "0")}/${(
              dayDate.getMonth() + 1
            )
              .toString()
              .padStart(2, "0")}`;
            const formattedDay = dayNames[dayDate.getDay()];

            return (
              <Card
                key={day.date_epoch}
                className={`forecast-card-body-child hover:bg-content1 ${isToday ? "" : "bg-default-100"}`}
                draggable="true"
                shadow="none"
              >
                <p className="text-xl">{isToday ? "Today" : formattedDay}</p>
                <p className="text-lg text-default-400">{formattedDate}</p>
                <p className="text-4xl">
                  {isToday
                    ? Math.round(currentWeather.temp_c)
                    : Math.round(day.day?.avgtemp_c)}
                  °
                </p>
                {getWeatherIcon(day.day.condition.code)}
              </Card>
            );
          })}
        </CardBody>
      </Card>
      <div className="flex flex-col sm:flex-row gap-8 ">
        <Card className="card-container" shadow="none">
          <CardHeader className="card-header">
            <ThermometerSunIcon className="card-header-icon" />
            <p className="card-header-title">UV Index</p>
          </CardHeader>
          <CardBody>
            <p className="text-5xl my-2">{currentWeather.uv}</p>
            <p className="text-2xl">{getUvLevel(currentWeather.uv)}</p>
          </CardBody>
          <CardFooter>
            {currentWeather.uv >= 3 && uvProtectionEndTime ? (
              <p className="text-base text-default-400">
                Use sun protection until {uvProtectionEndTime}
              </p>
            ) : (
              <p className="text-base text-default-400">
                No sun protection needed
              </p>
            )}
          </CardFooter>
        </Card>
        <Card className="card-container" shadow="none">
          <CardHeader className="card-header">
            <WindIcon className="card-header-icon" />
            <p className="card-header-title">Wind</p>
          </CardHeader>
          <CardBody className="flex flex-row gap-8 w-full">
            <div className="flex gap-4 w-full">
              <div className="flex flex-row justify-center items-center gap-2 w-full">
                <p className="text-5xl sm:text-6xl my-2">
                  {Math.round(currentWeather.wind_kph)}
                </p>
                <div>
                  <p className="text-xl sm:text-2xl text-default-400">KPH</p>
                  <p className="text-xl sm:text-2xl">Wind</p>
                </div>
              </div>
              <Divider orientation="vertical" />
              <div className="flex flex-row justify-center items-center gap-2 w-full">
                <p className="text-5xl sm:text-6xl my-2">
                  {Math.round(currentWeather.gust_kph)}
                </p>
                <div>
                  <p className="text-xl sm:text-2xl text-default-400">KPH</p>
                  <p className="text-xl sm:text-2xl">Gusts</p>
                </div>
              </div>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
