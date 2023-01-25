fetch('https://api.openweathermap.org/data/2.5/weather?q=ogden&appid=d02f6a61ab39731d12f55d46b13ebb91').then(function(response){
    return response.json()
}).then(function(data){
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=41.223&lon=-111.9738&appid=d02f6a61ab39731d12f55d46b13ebb91').then(function(response){
        return response.json()
    }).then(function(data){
console.log(data)
    })
})