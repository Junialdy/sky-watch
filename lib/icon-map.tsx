import {
  CloudIcon,
  CloudRainIcon,
  CloudDrizzleIcon,
  CloudFogIcon,
  CloudHailIcon,
  CloudLightningIcon,
  CloudMoonIcon,
  CloudMoonRainIcon,
  CloudRainWindIcon,
  CloudSnowIcon,
  CloudSunIcon,
  DropletIcon,
  DropletsIcon,
  HazeIcon,
  SunIcon,
} from "../components/icons";

const iconMap = {
  cloud: [1006, 1009],
  cloudRain: [1180, 1183, 1186, 1189, 1192, 1195],
  cloudDrizzle: [1150, 1153, 1168],
  cloudFog: [1030, 1135, 1147],
  cloudHail: [1237, 1261, 1264],
  cloudLightning: [1087, 1273, 1276, 1279, 1282],
  cloudMoon: [1000, 1003],
  cloudMoonRain: [1240, 1243, 1246, 1249, 1252],
  cloudRainWind: [1171, 1201],
  cloudSnow: [1210, 1213, 1216, 1219, 1222, 1225],
  cloudSun: [1003],
  droplet: [1153],
  droplets: [1189],
  haze: [1030, 1135],
  sun: [1000],
};

export function getWeatherIcon(code: number) {
  if (iconMap.cloud.includes(code)) return <CloudIcon />;
  if (iconMap.cloudRain.includes(code)) return <CloudRainIcon />;
  if (iconMap.cloudDrizzle.includes(code)) return <CloudDrizzleIcon />;
  if (iconMap.cloudFog.includes(code)) return <CloudFogIcon />;
  if (iconMap.cloudHail.includes(code)) return <CloudHailIcon />;
  if (iconMap.cloudLightning.includes(code)) return <CloudLightningIcon />;
  if (iconMap.cloudMoon.includes(code)) return <CloudMoonIcon />;
  if (iconMap.cloudMoonRain.includes(code)) return <CloudMoonRainIcon />;
  if (iconMap.cloudRainWind.includes(code)) return <CloudRainWindIcon />;
  if (iconMap.cloudSnow.includes(code)) return <CloudSnowIcon />;
  if (iconMap.cloudSun.includes(code)) return <CloudSunIcon />;
  if (iconMap.droplet.includes(code)) return <DropletIcon />;
  if (iconMap.droplets.includes(code)) return <DropletsIcon />;
  if (iconMap.haze.includes(code)) return <HazeIcon />;
  if (iconMap.sun.includes(code)) return <SunIcon />;

  return <SunIcon />;
}
