//const currentDay = document.getElementById('c-forecast-section')
const searchBtn = document.getElementById('search-btn')
const userCity = document.getElementById('input-city')
const cardWrap = document.getElementById('card-1')
const cardWrap2 = document.getElementById('card-2')
const cardWrap3 = document.getElementById('card-3')
const cardWrap4 = document.getElementById('card-4')
const cardWrap5 = document.getElementById('card-5')
function cityInput(city) {
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d02f6a61ab39731d12f55d46b13ebb91`).then(function(response){
    return response.json()
}).then(function(data){
    console.log(data)
    fetch(`https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=d02f6a61ab39731d12f55d46b13ebb91`).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)

cardWrap.textContent = ' Date: ' + data.list[0].dt_txt + ' Temperature: ' + data.list[0].main.temp  
+ ' Humidity: ' + data.list[0].main.humidity + ' Wind Speed: ' + data.list[0].wind.speed

for (var i = 5; i < cardWrap; i++) {
    var cardsEl = document.createElement('cards-1')
    cardsEl.textContent = cardWrap[5].text
    cardWrap.append(cardsEl)
console.log(cardsEl)
}

{
    cardWrap2.textContent = ' Date: ' + data.list[6].dt_txt + ' Temperature: ' + data.list[6].main.temp  
+ ' Humidity: ' + data.list[6].main.humidity + ' Wind Speed: ' + data.list[6].wind.speed

for (var i = 5; i < cardWrap2; i++) {
    var cardsEl = document.createElement('cards-2')
    cardsEl.textContent = cardWrap2[5].text
    cardWrap2.append(cardsEl)
console.log(cardsEl)
}

{
cardWrap3.textContent = ' Date: ' + data.list[14].dt_txt + ' Temperature: ' + data.list[14].main.temp  
+ ' Humidity: ' + data.list[14].main.humidity + ' Wind Speed: ' + data.list[14].wind.speed

for (var i = 5; i < cardWrap3; i++) {
    var cardsEl = document.createElement('cards-3')
    cardsEl.textContent = cardWrap3[5].text
    cardWrap3.append(cardsEl)
console.log(cardsEl)
}

{
    cardWrap4.textContent = ' Date: ' + data.list[22].dt_txt + ' Temperature: ' + data.list[22].main.temp  
+ ' Humidity: ' + data.list[22].main.humidity + ' Wind Speed: ' + data.list[22].wind.speed

for (var i = 5; i < cardWrap4; i++) {
    var cardsEl = document.createElement('cards-4')
    cardsEl.textContent = cardWrap4[5].text
    cardWrap4.append(cardsEl)
console.log(cardsEl)
}

{
    cardWrap5.textContent = ' Date: ' + data.list[30].dt_txt + ' Temperature: ' + data.list[30].main.temp  
+ ' Humidity: ' + data.list[30].main.humidity + ' Wind Speed: ' + data.list[30].wind.speed

for (var i = 5; i < cardWrap5; i++) {
    var cardsEl = document.createElement('cards-5')
    cardsEl.textContent = cardWrap5[5].text
    cardWrap5.append(cardsEl)
console.log(cardsEl)
}

}}}}

    })
});
}
searchBtn.addEventListener('click', function(event){
    event.preventDefault()
    cityInput(userCity.value.trim())
})
