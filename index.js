 const apiKey = "3205146f5da927aa58b0e23011553838";
    const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
    const searchBox = document.querySelector(".search input");
    const searchBtn = document.querySelector(".search button");
    const weatherIcon = document.querySelector(".weather-icon") 

    async  function checkWeather(city){
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);

        if(response.status == 404){
            document.querySelector(".error").style.display = "block";
            document.querySelector(".weather").style.display = "none";
        }
        else{

                var data = await response.json();
        console.log(data);
            // change the city name
    document.querySelector(".city").innerHTML = data.name;

    // change the temp
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";

    // change the humidity
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";

    // change the wind
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";

    if(data.weather[0].main == "Clouds"){
        weatherIcon.src = "./images/clouds.png";
    }
    else if(data.weather[0].main == "Rain"){
        weatherIcon.src = "./images/rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weatherIcon.src = "./images.drizzle.png";
    }
    else if(data.weather[0].main == "Mist"){
        weatherIcon.src = "./images/mist.png";
    }

    document.querySelector(".weather").style.display = "block";
      document.querySelector(".error").style.display = "none";
        }

    
    }

    searchBtn.addEventListener("click", ()=>{
       checkWeather(searchBox.value);
    })
   

