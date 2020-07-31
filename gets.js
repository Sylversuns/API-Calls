document.addEventListener('DOMContentLoaded', bindButtons);

function bindButtons(){

document.getElementById('citySubmit').addEventListener('click', function(event){
  event.preventDefault();
  var apiKey = "fa7d80c48643dfadde2cced1b1be6ca1";
  var req = new XMLHttpRequest();
  var cityN = document.getElementById('cityName').value;
  req.open("GET", 'http://api.openweathermap.org/data/2.5/weather?q=' + cityN + '&appid=' + apiKey, true);
  req.send(null);
  req.onload = function(){ 
  var response = JSON.parse(req.responseText);
  document.getElementById('city').textContent = response.name;
  document.getElementById('temperature').textContent = Math.round(response.main.temp * 9/5 - 459.67);
  document.getElementById('humidity').textContent = response.main.humidity + "%";
  document.getElementById('country').textContent = response.sys.country;
  document.getElementById('description').textContent = response.weather[0].main;
  console.log(response);
  };
})

document.getElementById('ZIPSubmit').addEventListener('click', function(event){
  event.preventDefault();
  var apiKey = "fa7d80c48643dfadde2cced1b1be6ca1";
  var req = new XMLHttpRequest();
  var ZIPZIP = document.getElementById('ZIPCode').value;
  req.open("GET", 'http://api.openweathermap.org/data/2.5/weather?zip=' + ZIPZIP + '&appid=' + apiKey, true);
  req.send(null);
  req.onload = function(){ 
  var response = JSON.parse(req.responseText);
  document.getElementById('city').textContent = response.name;
  document.getElementById('temperature').textContent = Math.round(response.main.temp * 9/5 - 459.67);
  document.getElementById('humidity').textContent = response.main.humidity + "%";
  document.getElementById('country').textContent = response.sys.country;
  document.getElementById('description').textContent = response.weather[0].main;
  };
})

}