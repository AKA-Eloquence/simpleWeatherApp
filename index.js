'use strict';
// unsplashClientId
const clientId = '0XoJKdUh5WWPsYEAIaZXRvBa9eNvm_BGpu0W_rz4LkQ'

// unsplashBaseUrl
const unsplashApi = {
    endPoint: 'https://api.unsplash.com/photos/random/?client_id=' + clientId,
}

//making an AJAX call for Unsplash Images using Fetch, i haven't tried to understand fetchApi yet however im using this piece of code for the sake of this background
// fetch(unsplashApi.endPoint)
//     .then(function (response) {
//         return response.json();
//     })
//     .then(function (jsonData) {
//         console.log(jsonData.urls.regular);
//         document.body.style.cssText+=`background-image:url(${jsonData.urls.regular})`;

// nope ignore this i cant make it work the way i want, not in mood no more docs for this at least for now
//     })


// Open Weather Api Key
const weatherCall = {
    apiKey: "ae4c65943583db32625509cd27d12611",
}

// Old School Way Of Making an AJAX Call They dont use XMLHTTPEwquest anymore
const getWeatherData = function(city){

    // Making AJAX call through XMLHttpRequest
     const request = new XMLHttpRequest();
     request.open('get' , `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${weatherCall.apiKey}`);
     request.send();

    //  Adding EventListener to Request
        request.addEventListener('load' , function(){
            const data = JSON.parse(this.responseText);

            // Getting Niche Data In Variables
            const { name} = data;
            const { icon, description } = data.weather[0];
            const { temp, humidity } = data.main;
            const { speed } = data.wind;

            // Displaying Information On The Page
            document.querySelector(".city").innerText = "Weather in " + name;
            document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png";
            document.querySelector(".description").innerText = description;
            document.querySelector(".temp").innerText = temp + "°C";
            document.querySelector(".humidity").innerText = "humidity: " + humidity + "%";
            document.querySelector(".wind").innerText = "Wind Speed: " + speed + " km/h";

            // removing loading class
            document.querySelector(".weather").classList.remove('loading');

        });  
};

// Search Button Listener
document.querySelector('.search-btn').addEventListener('click' , function(){
    const searchValue = document.querySelector(".search-bar").value;
    getWeatherData(searchValue);
});

// EnterkeyListener
document.addEventListener('keypress' , function(e){

    if (e.key == "Enter") {
        const searchValue2 = document.querySelector(".search-bar").value;
        getWeatherData(searchValue2);
    }
    });

    getWeatherData('karachi');

// underConstruction