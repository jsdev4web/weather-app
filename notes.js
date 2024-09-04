




let key1 = "NEBGHGDJN3ZBKTAG7DPJ7KCQK"
let city1 = "columbia"
let state1 = "sc"

let currentTemp1 = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city1 + "%20" + state1 + "/today?unitGroup=us&elements=temp&include=remote%2Ccurrent&key=" + key1 + "&contentType=json"





function getWeatherOne(){
fetch(currentTemp1)
    .then(function(response) {
        return response.json()
    })
    .then(function(response) {
        console.log(response.currentConditions.temp + " columbia sc")
    })

}

//getWeatherOne()