let searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function () {

let city = document.getElementById("city").value;

if(city === ""){
alert("Please enter city");
return;
}

let apiKey = "9ae8aa1332b70baf59d0312fd1ecd1a7";

let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

fetch(url)

.then(response => response.json())

.then(data => {

console.log(data);

if(data.cod != 200){

alert(data.message);

return;

}

document.querySelector("#weatherResult h2").innerText =
data.name;

document.querySelector("#weatherResult p:nth-of-type(1)").innerText =
`Temperature: ${data.main.temp}°C`;

document.querySelector("#weatherResult p:nth-of-type(2)").innerText =
`Condition: ${data.weather[0].main}`;

document.getElementById("weatherIcon").src =
`https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

})

.catch(error => {

console.log(error);

alert("Something went wrong");

});

});