$(function () {
    var sanAntonioID = 4726206;
    var weatherAppId = localStorage.getItem("weatherrapikey");
    var weatherOptions = {};
    weatherOptions.id = sanAntonioID;
    weatherOptions.appid = weatherAppId;

    $.get("https://api.openweathermap.org/data/2.5/weather", weatherOptions).done(function () {
        console.log(data);

        var highlowtemp = "";
        var temp_max = parseFloat(data.main.temp_max) * 9 / 5 - 459.67;
        highlowtemp += Math.floor(temp_max);
        highlowtemp += "°/";
        var temp_min = parseFloat(data.main.temp_max) * 9 / 5 - 459.67;
        highlowtemp += Math.floor(temp_min);
        highlowtemp += "°";
        console.log(highlowtemp);
        $("#localWeather").append("<h4>" + highlowtemp + "</h4>");

        var currweather = "";
        currweather += "<h4>";
        currweather += data.weather[0].main;
        currweather += " : ";
        currweather += data.weather[0].description;
        currweather += "</h4>";
        console.log(currweather);
        $("#localWeather").append(weatherimg);

        var humidity = "";
        humidity += "<h4>Humidity: ";
        humidity += data.main.humidity;
        humidity += "</h4>";
        console.log(humidity);
        $("#localWeather").append(humidity);

        var wind = "";
        wind += "<h4>Wind: ";
        wind += data.main.wind;
        wind += "</h4>";
        console.log(wind);
    });
});