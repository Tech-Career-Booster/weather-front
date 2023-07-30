const apiKey = "YOURveryOWNapiKEY";  // Replace with your OpenWeatherMap API Key

function getWeather(){
    const cityName = document.getElementById('city-input').value;
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&appid=${apiKey}`)
        .then(response => response.json())
        .then(data => displayWeather(data));
}

function displayWeather(data){
    const {name} = data;
    const {icon, description} = data.weather[0];
    const {temp, humidity} = data.main;
    const {speed} = data.wind;
    document.getElementById('city-name').textContent = name;
    document.getElementById('weather-description').textContent = `Weather: ${description}`;
    document.getElementById('weather-data').textContent = `Temp: ${temp}ºC | Humidity: ${humidity}% | Wind speed: ${speed} m/s`;
}
