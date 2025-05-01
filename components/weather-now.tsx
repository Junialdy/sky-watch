import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";

import {
  ThermometerSunIcon,
  DropletIcon,
  DropletsIcon,
  EyeIcon,
} from "./icons";

export default function WeatherNow() {
  return (
    <div className="flex flex-col gap-8">
      <div className="flex flex-col gap-2 bg-default-100 rounded-2xl p-24 text-center">
        <h2 className="text-8xl">28°</h2>
        <p className="text-4xl">Rainy Day</p>
      </div>
      <div className="flex flex-col gap-8">
        <div className="flex gap-8">
          <Card className="card-container" shadow="none">
            <CardHeader className="card-header">
              <ThermometerSunIcon className="stroke-default-400" />
              <p className="card-header-title">feels like</p>
            </CardHeader>
            <CardBody>
              <p className="text-5xl">30°</p>
            </CardBody>
            <CardFooter>
              <p className="text-base text-default-400">
                Humidity is making feel warmer
              </p>
            </CardFooter>
          </Card>
          <Card className="card-container" shadow="none">
            <CardHeader className="card-header">
              <DropletIcon className="stroke-default-400" />
              <p className="card-header-title">Precipitation</p>
            </CardHeader>
            <CardBody className="flex flex-col gap-2">
              <p className="text-5xl">2.3&quot;</p>
              <p className="text-xl">in last 24h</p>
            </CardBody>
            <CardFooter>
              <p className="text-base text-default-400">
                2&quot; expected in next 24h
              </p>
            </CardFooter>
          </Card>
        </div>
        <div className="flex gap-8">
          <Card className="card-container" shadow="none">
            <CardHeader className="card-header">
              <EyeIcon className="stroke-default-400" />
              <p className="card-header-title">Visibility</p>
            </CardHeader>
            <CardBody>
              <p className="text-5xl">6 km</p>
            </CardBody>
          </Card>
          <Card className="card-container" shadow="none">
            <CardHeader className="card-header">
              <DropletsIcon className="stroke-default-400" />
              <p className="card-header-title">Humidity</p>
            </CardHeader>
            <CardBody>
              <p className="text-5xl">82%</p>
            </CardBody>
            <CardFooter>
              <p className="text-base text-default-400">
                The dew point is 25° right now
              </p>
            </CardFooter>
          </Card>
        </div>
      </div>
    </div>
  );
}
