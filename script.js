


function GetWeatherData(city, city_details) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=27dc83f685be9830b15d9ced41a8ded7`)
    .then((response)=>{
        return response.json();
    })
    .then((response)=>{
        city_details.name = city;
        city_details.temp = response.main.temp;
        city_details.feels_like = response.main.feels_like;
        city_details.humidity = response.main.humidity;
        city_details.pressure = response.main.pressure;
        city_details.description = response.weather[0].description;
        city_details.pic_id = response.weather[0].icon;
        console.log(city_details.name);
        insertDOM(city_details);
    });  
}

let search_button = document.querySelector(".search-button");
search_button.addEventListener('click',show_card);

function show_card() {
    let city_details={};
    let input = document.querySelector('input');
    let city = input.value;
    GetWeatherData(city,city_details);
}

function insertDOM(city_details) {
    let city_card = document.querySelector('.city-card');
    city_card.style.visibility = 'visible'

    let city_name = document.querySelector('.city-name');
    city_name.textContent = city_details.name;

    let weather_icon = document.querySelector('.icon');
    weather_icon.src = `http://openweathermap.org/img/wn/${city_details.pic_id}@2x.png`;

    let temp = document.querySelector('.temp');
    temp.textContent = `TEMP: ${city_details.temp}`;

    let feels_like = document.querySelector('.feels-like');
    feels_like.textContent = `feels like ${city_details.feels_like}`;

    let humidity = document.querySelector('.humidity');
    humidity.textContent = `Humidity: ${city_details.humidity}`;

    let pressure = document.querySelector('.pressure');
    pressure.textContent = `Pressure: ${city_details.pressure}`;
}