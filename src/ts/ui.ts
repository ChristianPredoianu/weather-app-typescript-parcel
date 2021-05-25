import { OpenWeather } from './openWeather';
import { WeatherData } from './openWeatherInterface';

//UI Class
export class UI extends OpenWeather {
  defaultContainer: HTMLDivElement;
  london: HTMLParagraphElement;
  newYork: HTMLParagraphElement;
  tokyo: HTMLParagraphElement;
  location: HTMLParagraphElement;
  invalidCityAlert: HTMLHeadingElement;
  container: HTMLElement;
  dateParagraph: HTMLParagraphElement;
  temperature: HTMLParagraphElement;
  weatherImage: HTMLElement;
  weatherDesc: HTMLDivElement;
  maxTemp: HTMLDivElement;
  minTemp: HTMLParagraphElement;
  wind: HTMLParagraphElement;
  sunrise: HTMLParagraphElement;
  sunset: HTMLParagraphElement;
  humidity: HTMLParagraphElement;
  date: Date;

  constructor() {
    super();
    this.defaultContainer = document.getElementById(
      'container-default'
    )! as HTMLDivElement;
    this.london = document.getElementById('default-1')! as HTMLParagraphElement;
    this.newYork = document.getElementById(
      'default-2'
    )! as HTMLParagraphElement;
    this.tokyo = document.getElementById('default-3')! as HTMLParagraphElement;
    this.location = document.getElementById(
      'location'
    )! as HTMLParagraphElement;
    this.invalidCityAlert = document.getElementById(
      'invalidCityAlert'
    )! as HTMLHeadingElement;
    this.container = document.getElementById('container')! as HTMLElement;
    this.dateParagraph = document.getElementById(
      'date'
    )! as HTMLParagraphElement;
    this.temperature = document.getElementById('temp')! as HTMLParagraphElement;
    this.weatherImage = document.getElementById('weather')! as HTMLElement;
    this.weatherDesc = document.getElementById(
      'weather-desc'
    )! as HTMLDivElement;
    this.maxTemp = document.getElementById('max-temp')! as HTMLDivElement;
    this.minTemp = document.getElementById('min-temp')! as HTMLDivElement;
    this.wind = document.getElementById('wind')! as HTMLDivElement;
    this.sunrise = document.getElementById('sunrise')! as HTMLDivElement;
    this.sunset = document.getElementById('sunset')! as HTMLDivElement;
    this.humidity = document.getElementById('humidity')! as HTMLDivElement;
    this.maxTemp = document.getElementById('max-temp')! as HTMLDivElement;

    this.date = new Date();
  }

  //Display the default cities temperature
  displayDefaultCities() {
    this.getData('London').then((data: WeatherData) => {
      this.populateDefaultCitiesInfo(data, this.london);
    });
    this.getData('New York').then((data: WeatherData) => {
      this.populateDefaultCitiesInfo(data, this.newYork);
    });
    this.getData('Tokyo').then((data: WeatherData) => {
      this.populateDefaultCitiesInfo(data, this.tokyo);
    });
  }

  //Populate default cities with temp info
  populateDefaultCitiesInfo(data: WeatherData, city: HTMLParagraphElement) {
    city.innerHTML = `${Math.floor(data.main.temp)} &#8451;`;
    city.classList.add('lg:text-2xl');
  }

  //Display weather data to DOM
  displayWeather(data: WeatherData) {
    this.location.innerHTML = data.name;
    this.dateParagraph.innerHTML = `<p>${this.formatDate(this.date)}</p>`;
    this.temperature.innerHTML = `<p>${Math.floor(data.main.temp)}&#8451</p>`;
    this.checkWeatherDesc(data.weather[0].main);
    this.weatherDesc.innerHTML = ` <p>${data.weather[0].main}</p>`;
    this.maxTemp.innerHTML = ` <p>${Math.floor(data.main.temp_max)}&#8451;</p>`;
    this.minTemp.innerHTML = ` <p>${Math.floor(data.main.temp_min)}&#8451;</p>`;
    this.wind.innerHTML = `<p>${data.wind.speed}m/sec</p>`;
    this.sunrise.innerHTML = `
      <p>${this.formatTimestamp(data.sys.sunrise)}</p>`;
    this.sunset.innerHTML = `<p>${this.formatTimestamp(data.sys.sunset)}</p>`;
    this.humidity.innerHTML = ` <p>${data.main.humidity} %</p>`;
  }

  //Add different weather icon depending on weatherDesc (data from API)
  checkWeatherDesc(weatherDesc: string) {
    if (weatherDesc === 'Clouds') {
      this.weatherImage.innerHTML = `<i class="fas fa-cloud text-6xl" id="weather"></i>`;
    } else if (weatherDesc === 'Thunderstorm') {
      this.weatherImage.innerHTML = `<i class="fas fa-bolt text-6xl"></i>`;
    } else if (weatherDesc === 'Drizzle' || weatherDesc === 'Rain') {
      this.weatherImage.innerHTML = `<i class="fas fa-umbrella text-6xl"></i>`;
    } else if (weatherDesc === 'Snow') {
      this.weatherImage.innerHTML = `<i class="fas fa-snowflake text-6xl"></i>`;
    } else if (weatherDesc === 'Clear') {
      this.weatherImage.innerHTML = `<i class="far fa-sun text-6xl"></i>`;
    } else {
      this.weatherImage.innerHTML = `<i class="fas fa-temperature-low text-6xl"></i>`;
    }
  }

  //Format date
  formatDate(date: Date) {
    let months: string[] = [];
    months[0] = 'January';
    months[1] = 'February';
    months[2] = 'Mars';
    months[3] = 'April';
    months[4] = 'May';
    months[5] = 'June';
    months[6] = 'July';
    months[7] = 'August';
    months[8] = 'September';
    months[9] = 'October';
    months[10] = 'November';
    months[11] = 'December';

    let weekdays: string[] = [];
    weekdays[0] = 'Sunday';
    weekdays[1] = 'Monday';
    weekdays[2] = 'Tuesday';
    weekdays[3] = 'Wednesday';
    weekdays[4] = 'Thursday';
    weekdays[5] = 'Friday';
    weekdays[6] = 'Saturday';

    let d: Date = date,
      month: string = ` ${months[d.getMonth()]}`,
      day: string = ` ${d.getDate()}`,
      dayString: string = ` ${weekdays[d.getDay()]}`,
      year: number = d.getFullYear();

    return [dayString, day, month, year].join(' ');
  }

  //Format the timestamp to 00:00:00 format
  formatTimestamp(time: number) {
    let timeStamp: number = time;
    // Create a new JavaScript Date object based on the timestamp
    // multiplied by 1000 so that the argument is in milliseconds, not seconds.
    const date: Date = new Date(timeStamp * 1000);
    // Hours part from the timestamp
    let hours: string = `${
      date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`
    }`;
    // Minutes part from the timestamp
    let minutes: string = `${
      date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`
    }`;
    // Seconds part from the timestamp
    let seconds: string = `${
      date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`
    }`;
    // Will display time in 10:30:23 format
    const sun: string = `${hours}:${minutes.substr(-2)}:${seconds.substr(-2)}`;

    return sun;
  }
}
