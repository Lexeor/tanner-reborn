export type WeatherData = {
  main: {
    date_time: Date;
    feels_like: number;
    humidity: number;
    pressure: number;
    temp: number;
    temp_max: number;
    temp_min: number;
    uv_index: number;
    uv_index_max: number;
  };
  weather: {
    description: string;
    icon: string;
    id: number;
    main: string;
  };
  wind?: {
    deg?: number;
    gust?: number;
    speed?: number;
  };
};
