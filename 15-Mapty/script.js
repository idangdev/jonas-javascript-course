'use strict';

class Workout {
  date = new Date();
  id = (Date.now() + '').slice(-10);
  clicks = 0;

  constructor(coords, distance, duration) {
    // this.date = ...
    // this.id = ...
    this.coords = coords; // [lat, lng]
    this.distance = distance; // in km
    this.duration = duration; // in min
  }

  _setDescription() {
    // prettier-ignore
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

    this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${
      months[this.date.getMonth()]
    } ${this.date.getDate()}`;
  }

  click() {
    this.clicks++;
  }
}

class Running extends Workout {
  type = 'running';

  constructor(coords, distance, duration, cadence) {
    super(coords, distance, duration);
    this.cadence = cadence;
    this.calcPace();
    this._setDescription();
  }
  calcPace() {
    // min/km
    this.pace = this.duration / this.distance;
    return this.pace;
  }
}
class Cycling extends Workout {
  type = 'cycling';

  constructor(coords, distance, duration, elevationGain) {
    super(coords, distance, duration);
    this.elevationGain = elevationGain;
    // this.type = 'cycling';
    this.calcSpeed();
    this._setDescription();
  }

  calcSpeed() {
    // km/h
    this.speed = this.distance / (this.duration / 60);
    return this.speed;
  }
}

// const run1 = new Running([39, -12], 5.2, 24, 178);
// const cycling1 = new Cycling([39, -12], 27, 95, 523);
// console.log(run1, cycling1);

////////////////////////////////////////
// APPLICATION ARCHITECTURE
const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');
const optionsButton = document.querySelector('.option-button');
const optionsSub = document.querySelector('.options-sub');
const workoutSubs = document.querySelectorAll('.workout__subs');

const formEdit = document.querySelector('.form__edit');
const inputIdEdit = document.querySelector('.form__input--id__edit');
const inputTypeEdit = document.querySelector('.form__input--type__edit');
const inputDistanceEdit = document.querySelector(
  '.form__input--distance__edit'
);
const inputDurationEdit = document.querySelector(
  '.form__input--duration__edit'
);
const inputCadenceEdit = document.querySelector('.form__input--cadence__edit');
const inputElevationEdit = document.querySelector(
  '.form__input--elevation__edit'
);

const weatherIcons = {
  Clear: '☀️', // Cuaca cerah
  Clouds: '☁️', // Berawan
  Rain: '🌧️', // Hujan
  Drizzle: '🌦️', // Gerimis
  Thunderstorm: '⛈️', // Badai petir
  Snow: '❄️', // Salju
  Mist: '🌫️', // Kabut tipis
  Smoke: '💨', // Asap
  Haze: '🌁', // Kabut asap
  Fog: '🌫️', // Kabut tebal
  Dust: '🌪️', // Debu
  Sand: '🏜️', // Pasir
  Ash: '🌋', // Abu vulkanik
  Squall: '💨', // Angin kencang
  Tornado: '🌪️', // Tornado
};

class App {
  #map;
  #mapZoomLevel = 13;
  #mapEvent;
  #workouts = [];
  #sorted = false;
  #api = 'e6b62c3c8f4354bb77dcac5746da4954';

  constructor() {
    // Get user's position
    this._getPosition();

    // Get data from local storage
    this._getLocalStorage();

    // Attach event handlers
    form.addEventListener('submit', this._newWorkout.bind(this));
    inputType.addEventListener('change', this._toggleElevationField);
    containerWorkouts.addEventListener('click', this._moveToPopup.bind(this));
    optionsButton.addEventListener('click', this._showHiddenButtonList);
    optionsSub.addEventListener('click', this._deleteAllOrSort.bind(this));
    containerWorkouts.addEventListener('click', this._showHiddenWorkoutsList);
    containerWorkouts.addEventListener('click', this._deleteOrEdit.bind(this));

    formEdit.addEventListener('submit', this._editWorkout.bind(this));
    inputTypeEdit.addEventListener('change', this._toggleElevationEditField);
  }

  _getPosition() {
    if (navigator.geolocation)
      navigator.geolocation.getCurrentPosition(
        this._loadMap.bind(this),
        function () {
          alert('Could not get your position');
        }
      );
  }

  _loadMap(position) {
    const { latitude } = position.coords;
    const { longitude } = position.coords;
    console.log(`https://www.google.pt/maps/@${latitude},${longitude}`);

    const coords = [latitude, longitude];

    this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
    // console.log(map);

    L.tileLayer('https://tile.openstreetmap.fr/hot/{z}/{x}/{y}.png', {
      attribution:
        '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    }).addTo(this.#map);

    // Handling clicks on map
    this.#map.on('click', this._showForm.bind(this));

    this.#workouts.forEach(work => {
      this._renderWorkoutMarker(work);
    });
  }

  _showForm(mapE) {
    this.#mapEvent = mapE;
    form.classList.remove('hidden');
    inputDistance.focus();
  }

  _hideForm() {
    // Empty inputs
    inputDistance.value =
      inputDuration.value =
      inputCadence.value =
      inputElevation.value =
        '';

    form.style.display = 'none';
    form.classList.add('hidden');
    setTimeout(() => (form.style.display = 'grid'), 1000);
  }

  _hideEditForm() {
    // Empty inputs
    inputDistanceEdit.value =
      inputDurationEdit.value =
      inputCadenceEdit.value =
      inputElevationEdit.value =
        '';

    formEdit.style.display = 'none';
    formEdit.classList.add('hidden');
    setTimeout(() => (formEdit.style.display = 'grid'), 1000);
  }

  _toggleElevationField() {
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
  }

  _toggleElevationEditField() {
    inputElevationEdit
      .closest('.form__row')
      .classList.toggle('form__row--hidden');
    inputCadenceEdit
      .closest('.form__row')
      .classList.toggle('form__row--hidden');
  }

  _newWorkout(e) {
    const validInputs = (...inputs) =>
      inputs.every(inp => Number.isFinite(inp));
    const allPositive = (...inputs) => inputs.every(inp => inp > 0);
    e.preventDefault();

    // Get data from form
    const type = inputType.value;
    const distance = +inputDistance.value;
    const duration = +inputDuration.value;
    const { lat, lng } = this.#mapEvent.latlng;
    let workout;

    // If workout running, create running object
    if (type === 'running') {
      const cadence = +inputCadence.value;
      // Check if data is valid
      if (
        // !Number.isFinite(distance) ||
        // !Number.isFinite(duration) ||
        // !Number.isFinite(cadence)
        !validInputs(distance, duration, cadence) ||
        !allPositive(distance, duration, cadence)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Running([lat, lng], distance, duration, cadence);
    }

    // If workout cycling, create cycling object
    if (type === 'cycling') {
      const elevation = +inputElevation.value;

      if (
        !validInputs(distance, duration, elevation) ||
        !allPositive(distance, duration)
      )
        return alert('Inputs have to be positive numbers!');

      workout = new Cycling([lat, lng], distance, duration, elevation);
    }

    // Add new object to workout array
    this.#workouts.push(workout);

    // Render workout on map as marker
    this._renderWorkoutMarker(workout);

    // Render workout on list
    this._renderWorkout(workout);

    // Hide form + Clear input fields
    this._hideForm();

    // Set local storage to all workouts
    this._setLocalStorage();
  }

  _renderWorkoutMarker(workout) {
    L.marker(workout.coords)
      .addTo(this.#map)
      .bindPopup(
        L.popup({
          maxWidth: 250,
          minWidth: 100,
          autoClose: false,
          closeOnClick: false,
          className: `${workout.type}-popup`,
        })
      )
      .setPopupContent(
        `${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`
      )
      .openPopup();
  }

  async _renderWorkout(workout) {
    const weather = await this._getWeather(workout);

    let html = `
      <li class="workout workout--${workout.type}" data-id="${workout.id}">
        <h2 class="workout__title">${workout.description} ${
      weatherIcons[weather]
    }</h2>
        <div class="workout__options">
          <button>
            <ion-icon name="ellipsis-horizontal-outline" size="small"></ion-icon>
          </button>
          <div class="workout__subs hidden">
            <button class="workout__subs--list" data-subtype="delete" data-id="${
              workout.id
            }">
              <ion-icon name="trash-outline" size="small"></ion-icon>
              <label>Delete this workout</label>
            </button>
            <button class="workout__subs--list" data-subtype="edit" data-id="${
              workout.id
            }">
              <ion-icon name="pencil-outline" size="small"></ion-icon>
              <label>Edit this workout</label>
            </button>
          </div>
        </div>
        <div class="workout__details">
          <span class="workout__icon">${
            workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
          }</span>
          <span class="workout__value">${workout.distance}</span>
          <span class="workout__unit">km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⏱</span>
          <span class="workout__value">${workout.duration}</span>
          <span class="workout__unit">min</span>
        </div>
    `;

    if (workout.type === 'running')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.pace.toFixed(1)}</span>
          <span class="workout__unit">min/km</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">🦶🏼</span>
          <span class="workout__value">${workout.cadence}</span>
          <span class="workout__unit">spm</span>
        </div>
      </li>
    `;

    if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
    `;

    form.insertAdjacentHTML('afterend', html);
  }

  _moveToPopup(e) {
    const workoutEl = e.target.closest('.workout');

    if (!workoutEl) return;

    const workout = this.#workouts.find(
      work => work.id === workoutEl.dataset.id
    );

    this.#map.setView(workout.coords, this.#mapZoomLevel, {
      animate: true,
      pan: {
        duration: 1,
      },
    });

    // using the public interface
    workout.click();
  }

  _setLocalStorage() {
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
  }

  _getLocalStorage() {
    const data = JSON.parse(localStorage.getItem('workouts'));

    if (!data) return;

    data.forEach(work => {
      if (work.type === 'running') {
        const runningWorkout = new Running(
          work.coords,
          work.distance,
          work.duration,
          work.cadence
        );

        runningWorkout.date = work.date;
        runningWorkout.description = work.description;
        runningWorkout.id = work.id;

        this.#workouts.push(runningWorkout);
      }
      if (work.type === 'cycling') {
        const cyclingWorkout = new Cycling(
          work.coords,
          work.distance,
          work.duration,
          work.elevationGain
        );

        cyclingWorkout.date = work.date;
        cyclingWorkout.description = work.description;
        cyclingWorkout.id = work.id;

        this.#workouts.push(cyclingWorkout);
      }
    });

    this.#workouts.forEach(work => {
      this._renderWorkout(work);
    });
  }

  reset() {
    localStorage.removeItem('workouts');
    location.reload();
  }

  _showHiddenButtonList() {
    optionsSub.classList.toggle('hidden');
  }

  _deleteAllOrSort(e) {
    const subEl = e.target.closest('.option-sub__list');
    const subType = subEl.dataset.subtype;

    if (!subType) return;

    if (subType === 'delete-all') {
      this.reset();
    }

    if (subType === 'sort') {
      this.#sorted ? (this.#sorted = false) : (this.#sorted = true);
      console.log(this.#sorted);

      const workouts = this.#sorted
        ? this.#workouts.slice().sort((a, b) => a.distance - b.distance)
        : this.#workouts;
      this._clearWorkoutList();

      this._renderAllWorkouts(workouts);
    }
  }

  _clearWorkoutList() {
    const workoutEl = document.querySelectorAll('.workout');
    workoutEl.forEach(el => {
      containerWorkouts.removeChild(el);
    });
  }

  _showHiddenWorkoutsList(e) {
    const target = e.target.closest('.workout__options');
    if (!target) return;

    target.querySelector('.workout__subs').classList.toggle('hidden');
  }

  _deleteOrEdit(e) {
    const subEl = e.target.closest('.workout__subs--list');

    if (!subEl) return;

    const subType = subEl.dataset.subtype;

    if (!subType) return;

    const id = subEl.dataset.id;

    if (subType === 'delete') {
      this._deleteWorkout(id);
    }

    if (subType === 'edit') {
      this._showEditForm(id);
    }
  }

  _deleteWorkout(id) {
    this.#workouts = this.#workouts.filter(work => work.id !== id);
    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    location.reload();
  }

  async _getWeather(workout) {
    return fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${
        workout.coords[0]
      }&lon=${workout.coords[1]}&appid=${this.#api}`
    )
      .then(response => response.json())
      .then(data => {
        return data.weather[0].main; // Mengembalikan data cuaca utama
      })
      .catch(error => {
        console.error('Error:', error);
        return null; // Mengembalikan null jika terjadi error
      });
  }

  _showEditForm(id) {
    formEdit.classList.remove('hidden');
    const workout = this.#workouts.find(work => work.id === id);

    inputIdEdit.value =
      inputTypeEdit.value =
      inputDistanceEdit.value =
      inputDurationEdit.value =
      inputCadenceEdit.value =
      inputElevationEdit.value =
        '';

    inputIdEdit.value = workout.id;
    inputTypeEdit.value = workout.type;
    inputDistanceEdit.value = workout.distance;
    inputDurationEdit.value = workout.duration;

    if (workout.type === 'running') {
      inputCadenceEdit
        .closest('.form__row')
        .classList.remove('form__row--hidden');
      inputElevationEdit
        .closest('.form__row')
        .classList.add('form__row--hidden');
      inputCadenceEdit.value = workout.cadence;
    }
    if (workout.type === 'cycling') {
      inputCadenceEdit.closest('.form__row').classList.add('form__row--hidden');
      inputElevationEdit
        .closest('.form__row')
        .classList.remove('form__row--hidden');
      inputElevationEdit.value = workout.elevationGain;
    }
  }

  _editWorkout(e) {
    e.preventDefault();

    const id = inputIdEdit.value;
    const workout = this.#workouts.find(work => work.id === id);

    const type = inputTypeEdit.value;
    const distance = +inputDistanceEdit.value;
    const duration = +inputDurationEdit.value;

    let editedWorkout;
    if (type === 'running') {
      editedWorkout = new Running(
        workout.coords,
        distance,
        duration,
        +inputCadenceEdit.value
      );
    }

    if (type === 'cycling') {
      editedWorkout = new Cycling(
        workout.coords,
        distance,
        duration,
        +inputElevationEdit.value
      );
    }

    editedWorkout.id = id;

    this.#workouts = this.#workouts.filter(work => work.id !== id);
    this.#workouts.push(editedWorkout);

    localStorage.setItem('workouts', JSON.stringify(this.#workouts));
    location.reload();
  }

  async _renderAllWorkouts(workouts) {
    for (const workout of workouts) {
      await this._renderWorkout(workout);
    }
  }
}

const app = new App();
