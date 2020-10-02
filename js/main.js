var currentWeatherEndpoint = "http://api.openweathermap.org/data/2.5/weather?q="
var iconImageUrl = "http://openweathermap.org/img/wn/";

async function getWeather() {
  var city = document.getElementById("city");
  var country = document.getElementById("country");

  console.log("test");
  var currentWeather = await fetchWeatherData(city.value);

  updateIconAndDesc(currentWeather.weather[0]);
  updateResults(currentWeather.main);
}

async function fetchWeatherData(city) {
  const response = await fetch(currentWeatherEndpoint + city 
    + "&appID=" + weatherApiKey);
  return await response.json();
}

function updateIconAndDesc(weather) {
  var icon = document.getElementById("icon");
  var desc = document.getElementById("desc");

  icon.src = iconImageUrl + weather.icon + "@2x.png";
  desc.innerHTML = weather.description;
}

function updateResults(measurements) {
  var currTemp = document.getElementById("current-temp")
    .getElementsByTagName("p")[0];
  var feelsLike = document.getElementById("feels-like")
    .getElementsByTagName("p")[0];
  var humidity = document.getElementById("humidity")
    .getElementsByTagName("p")[0];
  var pressure = document.getElementById("pressure")
    .getElementsByTagName("p")[0];

  currTemp.innerHTML = measurements.temp;
  feelsLike.innerHTML = measurements.feels_like;
  humidity.innerHTML = measurements.humidity;
  pressure.innerHTML = measurements.pressure;
}