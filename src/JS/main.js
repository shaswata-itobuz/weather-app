import "../scss/style.scss";


// Select elements
const weatherButton = document.querySelector(".input-button");
const inputCity = document.querySelector(".city-input");
const weatherResult = document.querySelector(".weather-result");

// Click event
weatherButton.addEventListener("click", () => {
  const city = inputCity.value.trim();
  if (city) getWeather(city);
  else weatherResult.innerHTML = "<p>Please enter a city name</p>";
});

// Fetch weather
async function getWeather(city) {
  try {
    const res = await fetch(
      `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    const data = await res.json();

    if (data.location) {
      const region = data.location.region;
      const temp = data.current.temp_c;
      const feelsLike = data.current.feelslike_c;
      const humidity = data.current.humidity;

      weatherResult.innerHTML = `
        <p><strong>Region:</strong> ${region}</p>
        <p><strong>Temperature:</strong> ${temp}°C</p>
        <p><strong>Feels Like:</strong> ${feelsLike}°C</p>
        <p><strong>Humidity:</strong> ${humidity}%</p>
      `;
    } else {
      weatherResult.innerHTML = "<p>City not found!</p>";
    }
  } catch (err) {
    console.log("Error:", err);
    weatherResult.innerHTML = "<p>Error fetching data</p>";
  }
}
