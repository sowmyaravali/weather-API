

const apiKey = "9198695f9ba9ce9f8c0d3eb23e3ee0dc";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const input = document.querySelector('.search-input');
const button = document.querySelector('.search-btn');
const wicon = document.querySelector('.w-icon');

async function checkWeather(city) {
    const reponse = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await reponse.json();
    console.log(data)

    document.querySelector('.city-temp').innerHTML = `${data.main.temp}` + ' °C';
    document.querySelector('.city').innerHTML = `${data.name}`;
    document.querySelector('.weather-description').innerHTML = `${data.weather[0].description}`;
    document.querySelector('.feels-like').innerHTML = `${data.main.feels_like}` + ' °C';
    document.querySelector('.wind-speed').innerHTML = `${data.wind.speed}` + " kmph";
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}` + ' %';
    document.querySelector('.air-pressure').innerHTML = `${data.main.pressure}` + " hpa";
    document.querySelector('.visibility').innerHTML = `${data.visibility}` + ' L';



    if (data.weather[0].main === 'Clouds') 
    {
        wicon.src = "assests/clouds.png";
    }
    else if (data.weather[0].main === 'Clear') 
    {
        wicon.src = "assests/clear.png";
    } 
    else if (data.weather[0].main === 'Rain') 
    {
        wicon.src = "assests/rain.png";
    } 
    else if (data.weather[0].main === 'Drizzle'||data.weather[0].main === 'Haze') 
    {
        wicon.src = "assests/drizzle.png";
    } 
    else if (data.weather[0].main === 'Mist') 
    {
        wicon.src = "assests/mist.png";
    }

}
button.addEventListener('click', (e) => {
    checkWeather(input.value);

})




















