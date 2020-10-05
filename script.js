var api = "https://api.openweathermap.org/data/2.5/weather?zip=";
var apiKey = ",&appid=85fbdf671b1a59edaae1f9e998fdcbad";
var btn = document.getElementById("btnSearch");
var cityName = document.getElementById("cityName");
var k = document.getElementById("kelvin");
var f = document.getElementById("fahrenheit");
var c = document.getElementById("celsius");
var wthCon = document.getElementById("con");
var zipCode = document.getElementById("zipInfo");
var alert = document.getElementById("alert");
document.getElementById('btnSearch').addEventListener('click', getWeather);



//Zipcode must only be 5 digits and no characters
var z = zipCode.length;
if (z == 5 && (!isNaN(z)));

function getWeather() {
    fetch(api + zipCode.value + apiKey)   
        .then((response) => {
            if (!response.ok) {
                throw response
            }
            alert.className = null;
            
             return response.json();

        })
  
///Display data 
        .then((data) => {   

            alert.className = "d-none alert";
            cityName.innerHTML = data.name;
            k.innerHTML = `${Math.floor(data.main.temp)}<sup>o</sup>K `;
            f.innerHTML = `${Math.floor(((data.main.temp - 273.15) * 9 / 5 + 32))}<sup>o</sup>F`;
            c.innerHTML = `${Math.floor(data.main.temp - 273.15)}<sup>o</sup>C`;
            wthCon.innerHTML = data.weather[0].main;

            })
        
        .catch((error) => { 
           console.log(error);
            alert.className = "d-block alert-warning ";
        
            
        })
}
