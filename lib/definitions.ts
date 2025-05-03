export type locationWeather = {
  name: string;
  region: string;
  country: string;
  lat: number;
  lon: number;
  tz_id: string;
  localtime_epoch: number;
  localtime: string;
};

export type currentWeather = {
  last_updated_epoch: number;
  last_updated: string;
  temp_c: number;
  is_day: number;
  condition: {
    text: string;
    icon: string;
    code: number;
  };
  wind_kph: number;
  wind_degree: number;
  wind_dir: string;
  pressure_mb: number;
  pressure_in: number;
  precip_mm: number;
  humidity: number;
  cloud: number;
  feelslike_c: number;
  windchill_c: number;
  heatindex_c: number;
  dewpoint_c: number;
  vis_km: number;
  uv: number;
  gust_kph: number;
};

export type laterWeather = {
  forecastday: {
    date: string;
    date_epoch: number;
    day: {
      maxtemp_c: number;
      mintemp_c: number;
      avgtemp_c: number;
      maxwind_kph: number;
      totalprecip_mm: number;
      totalprecip_in: number;
      totalsnow_cm: number;
      avgvis_km: number;
      avghumidity: number;
      daily_will_it_rain: number;
      daily_chance_of_rain: number;
      daily_will_it_snow: number;
      daily_chance_of_snow: number;
      condition: {
        text: string;
        icon: string;
        code: number;
      };
      uv: number;
    };
    hour: {
      time_epoch: number;
      time: string;
      temp_c: number;
      is_day: number;
      condition: {
        text: string;
        icon: string;
        code: 1150;
      };
      wind_kph: number;
      wind_degree: number;
      wind_dir: string;
      pressure_mb: number;
      pressure_in: number;
      precip_mm: number;
      snow_cm: number;
      humidity: number;
      cloud: number;
      feelslike_c: number;
      windchill_c: number;
      heatindex_c: number;
      dewpoint_c: number;
      will_it_rain: number;
      chance_of_rain: number;
      will_it_snow: number;
      chance_of_snow: number;
      vis_km: number;
      gust_kph: number;
      uv: number;
    }[];
  }[];
};
