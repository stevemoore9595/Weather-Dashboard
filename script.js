//const currentDay = document.getElementById('c-forecast-section')
const searchBtn = document.getElementById('search-btn')
const userCity = document.getElementById('input-city')
const cardWrap = document.getElementById('card-1')
function cityInput(city) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d02f6a61ab39731d12f55d46b13ebb91`).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=d02f6a61ab39731d12f55d46b13ebb91`).then(function(response){
        return response.json()
    }).then(function(data){
console.log(data)
cardWrap.textContent = data.city.name + data.list[0].main.humidity
for (var i = 5; i < cardWrap; i++) {
    var cardsEl = document.createElement('cards-1')
    cardsEl.textContent = cardWrap[5].text
    cardWrap.append(cardsEl)
console.log(cardsEl)
}

    })
});
}
searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    cityInput(userCity.value.trim())
})
