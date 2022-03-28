function initpage() {
    const cityEl = document.getElementById('type-city');
    const searchEl = document.getElementById('search-button');
    const clearEl = document.getElementById('clear-history');
    const nameEl = document.getElementById('city-name');
    const picNowEl = document.getElementById('picture-now');
    const currentTempEl = document.getElementById('temperature');
    const currentHumidityEl = document.getElementById("humidity");
    const currentWindEl = document.getElementById("wind-speed");
    const currentUVEl = document.getElementById("UV-index");
    const historyEl = document.getElementById("history");
    var fivedayEl = document.getElementById("fiveday-header");
    var todayweatherEl = document.getElementById("weather-now");
    let searchHistory = JSON.parse(localStorage.getItem("search")) || [];

    //assigns unique API to variable
    const APIKey = '0cc6de8a1248681f45f73c2711633727';
}

function getWeather(cityName) {
    let queryURL = 'https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&appid=' + APIKey;
}