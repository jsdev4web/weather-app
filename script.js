

let key = "NEBGHGDJN3ZBKTAG7DPJ7KCQK"
let city = "charleston"
let state = "sc"

let currentTemp = "https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/" + city + "%20" + state + "/today?unitGroup=us&elements=temp&include=remote%2Ccurrent&key=" + key + "&contentType=json"

let data1

//console.log(img)

async function fetchWeather(){

    let response = await fetch(currentTemp);
    let current = await response.json();
    //console.log(response.ok)
    //console.log(response.status)
    //console.log(current.currentConditions.temp)

    return current
}

fetchWeather().then(current => {

    data1 = current.currentConditions.temp
    let img = document.querySelector("img")
    img.setAttribute("width", "250px")
    img.src = "./loading.jpg"
   
    //console.log(current.currentConditions.temp);
    return current.currentConditions.temp
}).catch(err => {
    console.log(err)
})



let sub = document.querySelector("#submit");
//console.log(sub)

sub.addEventListener("click", (e) => {
    e.preventDefault()
    console.log(e)

    let cityInput = document.querySelector("#city").value
    console.log(cityInput);

    let stateInput = document.querySelector("#state").value
    console.log(stateInput)

    let ansOne = document.querySelector("#ans1");
    ansOne.innerHTML = "The temperature in " + cityInput + " is: " + data1

    let img = document.querySelector("img")
    img.setAttribute("width", "150px")

    if(data1 > 75){
        img.src = "./warm.jpg"
    }
    else{
        img.src ="./cold.jpg"
    }

})



