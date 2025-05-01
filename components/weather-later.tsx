import { Card, CardBody, CardHeader, CardFooter } from "@heroui/card";
import { Divider } from "@heroui/divider";

import {
  CalendarIcon,
  ClockIcon,
  CloudIcon,
  CloudRainIcon,
  ThermometerSunIcon,
  WindIcon,
} from "./icons";

import { forecastDays, forecastHours } from "@/lib/data-placeholder";

const dayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

export default function WeatherLater() {
  return (
    <div className="flex flex-col gap-8">
      <Card className="card-container" shadow="none">
        <CardHeader className="card-header">
          <ClockIcon className="stroke-default-400" />
          <p className="card-header-title">Hourly Forecast</p>
        </CardHeader>
        <Divider />
        <CardBody className="forecast-card-body">
          {forecastHours.map((hour) => {
            const date = new Date(hour.time);
            const formattedTime = `${date.getHours().toString().padStart(2, "0")}:${date.getMinutes().toString().padStart(2, "0")}`;

            return hour.time == "2025-05-01 00:00" ? (
              <Card
                key={hour.time}
                className="forecast-card-body-child"
                draggable="true"
                shadow="none"
              >
                <p className="text-xl">Now</p>
                <p className="text-4xl">{Math.round(hour.temp_c)}°</p>
                <CloudRainIcon />
              </Card>
            ) : (
              <Card
                key={hour.time}
                className="forecast-card-body-child bg-default-100"
                draggable="true"
                shadow="none"
              >
                <p className="text-xl">{formattedTime}</p>
                <p className="text-4xl">{Math.round(hour.temp_c)}°</p>
                <CloudIcon />
              </Card>
            );
          })}
        </CardBody>
      </Card>
      <Card className="card-container" shadow="none">
        <CardHeader className="card-header">
          <CalendarIcon className="stroke-default-400" />
          <p className="card-header-title">10-Day Forecast</p>
        </CardHeader>
        <Divider />
        <CardBody className="forecast-card-body">
          {forecastDays.map((day) => {
            const date = new Date(day.date);
            const formattedDate = `${date.getDate().toString().padStart(2, "0")}/${(date.getMonth() + 1).toString().padStart(2, "0")}`;
            const formattedDay = dayNames[date.getDay()];

            return day.date == "2025-05-01" ? (
              <Card
                key={day.date_epoch}
                className="forecast-card-body-child"
                draggable="true"
                shadow="none"
              >
                <p className="text-xl">Today</p>
                <p className="text-lg text-default-400">{formattedDate}</p>
                <p className="text-4xl">{Math.round(day.day?.avgtemp_c)}°</p>
                <CloudRainIcon />
              </Card>
            ) : (
              <Card
                key={day.date_epoch}
                className="forecast-card-body-child bg-default-100"
                draggable="true"
                shadow="none"
              >
                <p className="text-xl">{formattedDay}</p>
                <p className="text-lg text-default-400">{formattedDate}</p>
                <p className="text-4xl">{Math.round(day.day?.avgtemp_c)}°</p>
                <CloudIcon />
              </Card>
            );
          })}
        </CardBody>
      </Card>
      <div className="flex gap-8">
        <Card className="card-container" shadow="none">
          <CardHeader className="card-header">
            <ThermometerSunIcon className="stroke-default-400" />
            <p className="card-header-title">UV Index</p>
          </CardHeader>
          <CardBody>
            <p className="text-5xl my-2">3</p>
            <p className="text-2xl">Moderate</p>
          </CardBody>
          <CardFooter>
            <p className="text-base text-default-400">
              Use sun protection until 16:00
            </p>
          </CardFooter>
        </Card>
        <Card className="card-container" shadow="none">
          <CardHeader className="card-header">
            <WindIcon className="stroke-default-400" />
            <p className="card-header-title">Wind</p>
          </CardHeader>
          <CardBody className="flex flex-row gap-8">
            <div>
              <p className="text-5xl my-2">3 KPH</p>
              <Divider />
              <p className="text-5xl my-2">9 KPH</p>
            </div>
            <div>
              <p>Compas</p>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
