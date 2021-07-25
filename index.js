
let weather = {
    apiKey: "0febdb88ecc5ae2a7fe9a99341dac051", fetchWeather: function (city) {
        fetch("https://api.openweathermap.org/data/2.5/weather?q=" +city +"&units=metric&appid=" +this.apiKey)
        .then((response) => {
            if (!response.ok) {
            alert("No weather found.Please Try with another city");
            throw new Error("No weather found.");
          }
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },

    displayWeather: function (data) {
      const { name } = data;
      const { temp, humidity } = data.main;
      const { speed } = data.wind;
      document.querySelector(".city").innerText = "Weather in " + name;
      document.querySelector(".temp").innerText = temp + "°C";
      document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%";
      document.querySelector(".wind").innerText = "Wind speed: " + speed + " km/h";
      document.querySelector(".weather").classList.remove("loading");
    },
    search: function () {
      this.fetchWeather(document.querySelector(".search-bar").value);
    },
};
    document.querySelector(".search button").addEventListener("click", function () {
    weather.search();
    });
    weather.fetchWeather("Hyderabad");