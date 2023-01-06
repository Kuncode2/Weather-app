let weather = {
    apikey: "f411c6db65ce29ef7dcc057b4e54a39f",
    fetchWeather: function (city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" 
        +city 
        + "&units=metric&appid=" 
        + this.apikey)
        .then((response) => response.json())
        .then((data) => console.log(data));
        
    },
    displayWeather: function(data) {
        

    }
}
