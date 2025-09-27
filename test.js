const apiKey = '0c80b2b56f1943ada19100744230103'
async function getFullWeather(city) {
  try {
    const response = await fetch(
      `http://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`
    );
    const data = await response.json();

    console.log("Full API Response:", data); // logs everything in console

    // Show the whole JSON on the web page as well
    // weatherResult.innerHTML = `
    //   <pre>${JSON.stringify(data, null, 2)}</pre>

  } catch (error) {
    console.error("Error fetching weather:", error);
    weatherResult.innerHTML = `<p>Something went wrong!</p>`;
  }
}

getFullWeather("Kolkata");