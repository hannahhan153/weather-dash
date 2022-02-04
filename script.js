
    // elements that are part of the search bar
    var searchEl = document.getElementById("search-button");
    var cityEl = document.getElementById("chosen-city");
    var clearEl = document.getElementById("clear-history");
    var nameEl = document.getElementById("city-name");
    var iconEl = document.getElementById("icon");
    var tempEl = document.getElementById("temperature");
    var humidityEl = document.getElementById("humidity");
    var windEl = document.getElementById("wind-speed");
    var uvEl = document.getElementById("uv-index");
    const apiKey = "486c5ee4ab0f079c93dc3b5e85a913c2";


searchEl.addEventListener("click", function() {
    
    fetch(`https://api.openweathermap.org/data/2.5/forecast?q=${cityEl.value}&units=imperial&appid=${apiKey}`).then(function (response) {
        console.log(response)
    
        return response.json()
    }).then(function (data){
        console.log(data)
        console.log(data.list[0].main.temp)
    })
})


// API key 



startApp();