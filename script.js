// Group of variables equally the id's in the HTML
const searchBtn = document.getElementById('search-btn')
const userCity = document.getElementById('input-city')
const date = document.getElementById('date')
const temperature = document.getElementById('temperature')
const humidity = document.getElementById('humidity')
const windSpeed = document.getElementById('windspeed')
const icon = document.getElementById('icon')
const date2 = document.getElementById('date-2')
const temperature2 = document.getElementById('temperature-2')
const humidity2 = document.getElementById('humidity-2')
const windSpeed2 = document.getElementById('windspeed-2')
const icon2 = document.getElementById('icon-2')
const date3 = document.getElementById('date-3')
const temperature3 = document.getElementById('temperature-3')
const humidity3 = document.getElementById('humidity-3')
const windSpeed3 = document.getElementById('windspeed-3')
const icon3 = document.getElementById('icon-3')
const date4 = document.getElementById('date-4')
const temperature4 = document.getElementById('temperature-4')
const humidity4 = document.getElementById('humidity-4')
const windSpeed4 = document.getElementById('windspeed-4')
const icon4 = document.getElementById('icon-4')
const date5 = document.getElementById('date-5')
const temperature5 = document.getElementById('temperature-5')
const humidity5 = document.getElementById('humidity-5')
const windSpeed5 = document.getElementById('windspeed-5')
const icon5 = document.getElementById('icon-5')
const currentCity = document.getElementById('current-city')
const currentDate = document.getElementById('current-date')
const currentTemperature = document.getElementById('current-temperature')
const currentHumidity = document.getElementById('current-humidity')
const currentWindSpeed = document.getElementById('current-windspeed')
const currentIcon = document.getElementById('current-icon')
let searchHistory = []

// Current Day API
function cityInput(city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=imperial&appid=d02f6a61ab39731d12f55d46b13ebb91`).then(function (response) {
        return response.json()
    }).then(function (data) {
        console.log(data)

        // Current Day Forecast
        var cdate = dayjs().format('YYYY-MM-DD')

        currentCity.innerHTML = `<span> City: ${data.name}</span>`
        currentDate.innerHTML = `<span> Date: ${cdate}</span>`
        currentTemperature.innerHTML = `<span> Temperature: ${data.main.temp} ??F</span>`
        currentHumidity.innerHTML = `<span> Humidity: ${data.main.humidity}</span>`
        currentWindSpeed.innerHTML = `<span> Wind Speed: ${data.wind.speed}</span>`
        currentIcon.innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="weather icon" class="weather-pic"></img>`

        // Five Day Forecast API
        fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&units=imperial&appid=d02f6a61ab39731d12f55d46b13ebb91`).then(function (response) {
            return response.json()
        }).then(function (data) {
            console.log(data)

            // Five Day Forecast
            date.innerHTML = `<span> Date: ${data.list[0].dt_txt}</span>`
            temperature.innerHTML = `<span> Temperature: ${data.list[0].main.temp} ??F</span>`
            humidity.innerHTML = `<span> Humidity: ${data.list[0].main.humidity}</span>`
            windSpeed.innerHTML = `<span> Wind Speed: ${data.list[0].wind.speed}</span>`
            icon.innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png" alt="weather icon" class="weather-pic"></img>`

            date2.innerHTML = `<span> Date: ${data.list[8].dt_txt}</span>`
            temperature2.innerHTML = `<span> Temperature: ${data.list[8].main.temp} ??F</span>`
            humidity2.innerHTML = `<span> Humidity: ${data.list[8].main.humidity}</span>`
            windSpeed2.innerHTML = `<span> Wind Speed: ${data.list[8].wind.speed}</span>`
            icon2.innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.list[8].weather[0].icon}@2x.png" alt="weather icon" class="weather-pic"></img>`

            date3.innerHTML = `<span> Date: ${data.list[16].dt_txt}</span>`
            temperature3.innerHTML = `<span> Temperature: ${data.list[16].main.temp} ??F</span>`
            humidity3.innerHTML = `<span> Humidity: ${data.list[16].main.humidity}</span>`
            windSpeed3.innerHTML = `<span> Wind Speed: ${data.list[16].wind.speed}</span>`
            icon3.innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.list[16].weather[0].icon}@2x.png" alt="weather icon" class="weather-pic"></img>`

            date4.innerHTML = `<span> Date: ${data.list[24].dt_txt}</span>`
            temperature4.innerHTML = `<span> Temperature: ${data.list[24].main.temp} ??F</span>`
            humidity4.innerHTML = `<span> Humidity: ${data.list[24].main.humidity}</span>`
            windSpeed4.innerHTML = `<span> Wind Speed: ${data.list[24].wind.speed}</span>`
            icon4.innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.list[24].weather[0].icon}@2x.png" alt="weather icon" class="weather-pic"></img>`

            date5.innerHTML = `<span> Date: ${data.list[32].dt_txt}</span>`
            temperature5.innerHTML = `<span> Temperature: ${data.list[32].main.temp} ??F</span>`
            humidity5.innerHTML = `<span> Humidity: ${data.list[32].main.humidity}</span>`
            windSpeed5.innerHTML = `<span> Wind Speed: ${data.list[32].wind.speed}</span>`
            icon5.innerHTML = `<img src= "http://openweathermap.org/img/wn/${data.list[32].weather[0].icon}@2x.png" alt="weather icon" class="weather-pic"></img>`

        })
    })
}

// Saving the data to the local storage
searchBtn.addEventListener('click', function (event) {
    event.preventDefault()
    let city = userCity.value.trim()
    cityInput(city)
    if (searchHistory.indexOf(city)!== -1) {
        return 
    }
    searchHistory.push(city)
    localStorage.setItem('city-history', JSON.stringify(searchHistory))
    searchHistoryBtns()
})

function searchHistoryBtns() {
    document.querySelector('.history-btns').innerHTML = ''
    for (let i = 0; i< searchHistory.length; i++) {
        let cityBtn = document.createElement('button')
        cityBtn.classList.add('history-btn')
        cityBtn.setAttribute('data-search', searchHistory[i])
        cityBtn.textContent = searchHistory[i]
        document.querySelector('.history-btns').append(cityBtn)
    }
}

// Getting the saved data from the local storage
function initSearchHistory() {
    let history = localStorage.getItem('city-history')
    if (history) {
        searchHistory = JSON.parse(history)
    }
    searchHistoryBtns()
}

initSearchHistory()


function handleSearchClick(e) {
    if (!e.target.matches('.history-btn')) {
        return
    }
    let cityBtn = e.target
    let city = cityBtn.getAttribute('data-search')
    cityInput(city)
}
document.querySelector('.history-btns').addEventListener('click', handleSearchClick)