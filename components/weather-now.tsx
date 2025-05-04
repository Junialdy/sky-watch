import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

import {
  ThermometerSunIcon,
  DropletIcon,
  DropletsIcon,
  EyeIcon,
  MapPinIcon,
} from "./icons";

import { currentWeather, locationWeather } from "@/lib/definitions";

export default function WeatherNow({
  currentWeather,
  totalprecip_in,
  location,
}: {
  currentWeather: currentWeather;
  totalprecip_in: number[];
  location: locationWeather;
}) {
  const time_now = new Date(location.localtime);

  return (
    <div className="flex flex-col gap-8 ">
      <Card
        className="flex flex-col gap-4 bg-default-100 rounded-2xl p-16 sm:p-20 justify-center items-center "
        shadow="none"
      >
        <h2 className="text-7xl sm:text-8xl">
          {Math.round(currentWeather.temp_c)}°
        </h2>
        <p className="text-xl sm:text-3xl">{currentWeather.condition.text}</p>
        <div className="flex flex-row gap-2 justify-center">
          <MapPinIcon className="text-base text-default-400" />
          <p className="text-base text-default-400">{`${location.name}, ${location.country} (${time_now.toLocaleTimeString(
            "en-US",
            {
              hour: "2-digit",
              minute: "2-digit",
            },
          )})`}</p>
        </div>
      </Card>
      <div className="flex flex-col gap-8 ">
        <div className="flex flex-col sm:flex-row gap-8">
          <Card className="card-container" shadow="none">
            <CardHeader className="card-header">
              <ThermometerSunIcon className="card-header-icon" />
              <p className="card-header-title">feels like</p>
            </CardHeader>
            <CardBody>
              <p className="text-5xl">
                {Math.round(currentWeather.feelslike_c)}°
              </p>
            </CardBody>
            <CardFooter>
              <p className="text-base text-default-400">
                Humidity is making feel warmer
              </p>
            </CardFooter>
          </Card>
          <Card className="card-container" shadow="none">
            <CardHeader className="card-header">
              <DropletIcon className="card-header-icon" />
              <p className="card-header-title">Precipitation</p>
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
              <p className="text-5xl">{totalprecip_in[0]}&quot;</p>
              <p className="text-xl">in last 24h</p>
            </CardBody>
            <CardFooter>
              <p className="text-base text-default-400">
                {totalprecip_in[1]}&quot; expected in next 24h
              </p>
            </CardFooter>
          </Card>
        </div>
        <div className="flex flex-col sm:flex-row gap-8">
          <Card className="card-container" shadow="none">
            <CardHeader className="card-header">
              <EyeIcon className="card-header-icon" />
              <p className="card-header-title">Visibility</p>
            </CardHeader>
            <CardBody>
              <p className="text-5xl">{currentWeather.vis_km} km</p>
            </CardBody>
          </Card>
          <Card className="card-container" shadow="none">
            <CardHeader className="card-header">
              <DropletsIcon className="card-header-icon" />
              <p className="card-header-title">Humidity</p>
            </CardHeader>
            <CardBody>
              <p className="text-5xl">{currentWeather.humidity}%</p>
            </CardBody>
            <CardFooter>
              <p className="text-base text-default-400">
                The dew point is {currentWeather.dewpoint_c}° right now
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
