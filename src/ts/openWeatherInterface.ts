export interface WeatherData {
  name: string;
  message: string;
  main: {
    humidity: number;
    temp: number;
    temp_max: number;
    temp_min: number;
  };
  weather: Array<{
    main: string;
  }>;
  wind: {
    speed: number;
  };
  sys: {
    sunrise: number;
    sunset: number;
  };
}
