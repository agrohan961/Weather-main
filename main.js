let button = document.querySelector('.button')
let inputval = document.querySelector('.inputVal')
let nameVal = document.querySelector('.name');
let temp = document.querySelector('.temp');
let desc = document.querySelector('.description');
let temp_min = document.querySelector('.temp_min');
let temp_max = document.querySelector('.temp_max');
let wind = document.querySelector('.windspeed');
let humidity = document.querySelector('.humidity');
let x = 0;

button.addEventListener('click', function(){
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${inputval.value}&units=metric&appid=108dd9a67c96f23039937fe6f3c91963`)
    .then(response => response.json())
    .then(displayData)
    .catch(err => alert('Enter a valid city name.'));

})

const displayData=(weather)=>{
    temp.innerText = `${weather.main.temp}°C`
    desc.innerText = `${weather.weather[0].description}`
    temp_min.innerText =  `Minimum Temperature : ${weather.main.temp_min}°C`
    temp_max.innerText =  `Maximum Temperature : ${weather.main.temp_max}°C`
    wind.innerText = `Wind Speed : ${weather.wind.speed} m/s`
    humidity.innerText = `Humidity : ${weather.main.humidity}%`
}



