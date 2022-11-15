const API_Key = 'L2uYtoQQwJS67ja8rwrJF9gfl1Bi8vZk';

const mainContainer = document.querySelector('.container-select-city');
const city_field = document.querySelector('#city-field');
const getWeatherBtn = document.querySelector('.get-weather');
// const daysWheatherList = document.querySelector('.wheather-list');
const childDiv = document.createElement('div');
mainContainer.append(childDiv);

const xhr = new XMLHttpRequest();

const cityData = {
    Lviv: 324561,
    Kyiv: 324505,
    Kharkiv: 323903,
    Chernihiv: 322162,
    Odesa: 325343,
    Mariupol: 323037,
    Poltava: 325523,
    Zhytomyr: 326609,
    Cherkasy: 321985,
    London: 328328,
    Warsaw: 274663,
    "New York": 349727,
};

let counter = 0;

function validateIfCity() {
    for (let city in cityData) {
        if (city_field.value === city) {
            return cityData[city];
        }
    }
    return;
}

function convertToCelsius(temp) {
    return ((temp - 32) * 5) / 9;
}

function loadData(id) {
    xhr.open(
        "GET",
        `http://dataservice.accuweather.com/forecasts/v1/daily/5day/${id}?apikey=${API_Key}`
    );
    xhr.send();
    xhr.onload = function () {
        if (xhr.status !== 200) {
            alert (`Error ${xhr.status}: ${xhr.statusText}`);
        } else {
            const result = JSON.parse(this.response);
            showWeather(result);
        }
    };
    xhr.onerror = function () {
        alert ("Request failed");
    }
} 

function showWeather(data) {
const childDIV = document.createElement("div");
mainContainer.append(childDIV);

const weather = data.DailyForecasts;

for (let param in weather) {
    const div = document.createElement("div");
    div.className = "div";
    childDIV.appendChild(div);

    const date_info = document.createElement("p");
    date_info.innerHTML = new Date(weather[param].Date).toDateString();
    div.append(date_info);

    const day_info = document.createElement("li");
    if(weather[param].Day.HasPrecipitation === false) {
        day_info.innerHTML = `Day: ${weather[param].Day.IconPhrase}.`;
    }
    div.append(day_info);

    const night_info = document.createElement("li");
    if (weather[param].Night.HasPrecipitation === false) {
        night_info.innerHTML = `Night: ${weather[param].Night.IconPhrase}`;
    } else {
        night_info.innerHTML = `Night: ${weather[param].Night.IconPhrase}. ${weather[param].Night.PrecipitationIntensity} ${weather[param].Night.PrecipitationType}.`;
    }
    div.append(night_info);

    const temperature = document.createElement("li");
    temperature.innerHTML = `Temperature: ${convertToCelsius(+weather[param].Temperature.Minimum.Value).toFixed(1)}°C`;
    div.append(temperature);
    }
    counter++;
}

getWeatherBtn.addEventListener('click', function() {
    if (counter === 1 ) {
        for (let i = 0; i < 5; i++) {
            const div = document.querySelector(`${i}`);
            div.remove();
    }
    counter--;
}
if (city_field.value !== "") {
    if (validateIfCity() !== 0) {
        loadData(validateIfCity())
    } else {
        city_field.value = "Invalid data";
    }
}
});
                
    