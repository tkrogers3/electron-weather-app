
    var api = "https://api.openweathermap.org/data/2.5/weather?zip=";
var apiKey = ",&appid=85fbdf671b1a59edaae1f9e998fdcbad";
var btn = document.getElementById("btnSearch");
var cityName = document.getElementById("cityName");
var k = document.getElementById("kelvin");
var f = document.getElementById("fahrenheit");
var c = document.getElementById("celsius");
var wthCon = document.getElementById("con");
var iconImg = document.getElementById("icon");
var zipCode = document.getElementById("zipInfo");
var alert = document.getElementById("alert");
var cards = document.getElementById("card-deck");
document.getElementById('btnSearch').addEventListener('click', getWeather);

/* Preventative coding - Not allowing letters or  "+"" | "-" |"e" characters as a part of 
this statement.*/
var z = zipCode.length;
if (z == 5 && (!isNaN(z)));

/*Function to take zip code info from user and pull info from 
JSON data received from API Call. If valid, get weather info.
 If invalid, get error message. */
function getWeather() {
    fetch(api + zipCode.value + apiKey)    // Fetch = Promise
        .then((response) => {
            if (!response.ok) {
                throw response
            } return response.json();

        })
        /*once promise has been met, then data is processed and presented to screen.
        k and f strings temperate literal to embed expression. Math.floor to round 
        down to closest integer.*/

        .then((data) => {   //Promise fulfilled 

            //var info = data;
            cityName.innerHTML = data.name;
            k.innerHTML = `${Math.floor(data.main.temp)}<sup>o</sup>K `;
            f.innerHTML = `${Math.floor(((data.main.temp - 273.15) * 9 / 5 + 32))}<sup>o</sup>F`;
            c.innerHTML = `${Math.floor(data.main.temp - 273.15)}<sup>o</sup>C`;
            wthCon.innerHTML = data.weather[0].main;

            //Template Literal that concatenates the link with the icon to display image  into png.

            iconImg.innerHTML = `<img src ="https://openweathermap.org/img/wn/${info.weather[0].icon}.png">`
            alert.className = "d-none alert";
            info.weather[0].icon;
            })
        
        .catch((error) => { //Promise rejected 
            //If error has occurred, alert displays below zip search bar.
            alert.className = "d-block alert-warning ";
        })
}
