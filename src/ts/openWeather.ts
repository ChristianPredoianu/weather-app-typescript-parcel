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

//openWeatcher class
export class OpenWeather {
  private apiKey: string;

  constructor() {
    this.apiKey = process.env.API_KEY;
  }

  async getData(location: string): Promise<WeatherData> {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=${this.apiKey}`
    );
    const data = await response.json();
    return data;
  }
}
