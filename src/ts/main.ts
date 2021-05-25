import { OpenWeather } from './openWeather';
import { UI } from './ui';
import { WeatherData } from './openWeatherInterface';

const openWeather = new OpenWeather();
const ui = new UI();
ui.displayDefaultCities();

//Input Event Listener
const input = document.getElementById('input')! as HTMLInputElement;
input.addEventListener('keypress', (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    if (input.value !== '') {
      ui.defaultContainer.classList.add('hidden');
      ui.container.classList.remove('hidden');
      openWeather.getData(input.value).then((data: WeatherData) => {
        ui.defaultContainer.classList.add('hidden');
        ui.container.classList.remove('hidden');
        if (data.message === 'city not found') {
          ui.invalidCityAlert.classList.remove('invisible');
          setTimeout(() => {
            ui.invalidCityAlert.classList.add('invisible');
          }, 2000);
          ui.container.classList.add('hidden');
          ui.defaultContainer.classList.remove('hidden');
          input.value = '';
        } else {
          ui.displayWeather(data);
          input.value = '';
        }
      });
    }
  }
});
