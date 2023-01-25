fetch('https://api.openweathermap.org/data/2.5/weather?q=ogden&appid=9859fc6998842f2d4d3f91cde44162d0').then(function(response){
    return response.json()
}).then(function(data){
    fetch('https://api.openweathermap.org/data/2.5/forecast?lat=41.223&lon=-111.9738&appid=9859fc6998842f2d4d3f91cde44162d0').then(function(response){
        return response.json()
    }).then(function(data){
console.log(data)
    })
})