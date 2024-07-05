//Dom Variables
const searchBtn = document.getElementById("searchBtn");
const input = document.getElementById("input");
const weatherImg = document.getElementById("weatherImg");
const city = document.getElementById("city");
const celsius = document.getElementById("celsius");
const description = document.getElementById("description");
const humidity = document.getElementById("humidity");
const wind = document.getElementById("wind");

//Variables
const API_KEY = "6a88ea3c2221ebdd74bda7ecc693f4eb";

//Event Listener
searchBtn.addEventListener("click", getData);

async function getData() {
  const cityName = input.value;
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  const res = await fetch(API_URL);
  const data = await res.json();
  renderData(data);
}

async function renderData(data) {
  const temp = Math.round(data.main.temp - 273.15);
  city.innerHTML = data.name;
  celsius.innerHTML = `${temp}<span>&deg;</span>`;
  description.innerHTML = data.weather[0].description.toUpperCase();
  humidity.innerHTML = `${data.main.humidity}%`;
  wind.innerHTML = `${data.wind.speed} km/h`;
}
