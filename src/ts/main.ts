import { OpenWeather } from './openWeather';
import { UI } from './ui';
import '@fortawesome/fontawesome-free/css/solid.css';
import '@fortawesome/fontawesome-free/css/fontawesome.css';

const openWeather = new OpenWeather();
const ui = new UI();

function displayDefaultCitiesTemp() {
  openWeather.getData('London').then((data) => {
    ui.populateDefaultCitiesTemp(data, ui.london);
  });
  openWeather.getData('New York').then((data) => {
    ui.populateDefaultCitiesTemp(data, ui.newYork);
  });
  openWeather.getData('Tokyo').then((data) => {
    ui.populateDefaultCitiesTemp(data, ui.tokyo);
  });
}

//Input Event Listener
const input = document.getElementById('input')! as HTMLInputElement;
input.addEventListener('keypress', (e: KeyboardEvent) => {
  if (e.key === 'Enter') {
    if (input.value !== '') {
      openWeather.getData(input.value).then((data) => {
        console.log(data);
        if (data.message === 'city not found') {
          ui.showAlert();
          input.value = '';
        } else {
          ui.defaultContainer.classList.add('hidden');
          ui.weatherInfoContainer.classList.remove('hidden');
          ui.displayWeather(data);
          input.value = '';
        }
      });
    }
  }
});

displayDefaultCitiesTemp();
