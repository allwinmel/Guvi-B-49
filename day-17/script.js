document.addEventListener("DOMContentLoaded", () => {
  const countryCardsContainer = document.getElementById("countryCards");

  fetch("https://restcountries.com/v3.1/all")
    .then((response) => response.json())
    .then((data) => {
      data.forEach((country) => {
        createCountryCard(country);
      });
    })
    .catch((error) => console.error("Error fetching countries:", error));

  function createCountryCard(country) {
    const card = document.createElement("div");
    card.classList.add("col-lg-4", "col-sm-12", "mb-4");

    const cardHeader = document.createElement("div");
    cardHeader.classList.add("card-header");
    cardHeader.textContent = country.name.common;

    const cardBody = document.createElement("div");
    cardBody.classList.add("card-body");

    const capital = document.createElement("p");
    capital.textContent = "Capital: " + country.capital;

    const latlng = document.createElement("p");
    latlng.textContent = "Latlng: " + country.latlng.join(", ");

    const flag = document.createElement("img");
    flag.src = country.flags.png;
    flag.alt = country.name.common + " Flag";

    const region = document.createElement("p");
    region.textContent = "Region: " + country.region;

    const countryCodes = document.createElement("p");
    countryCodes.textContent = "Country Codes: " + Object.keys(country.cca2).join(", ");

    const weatherBtn = document.createElement("button");
    weatherBtn.classList.add("btn", "btn-primary");
    weatherBtn.textContent = "Click for Weather";
    weatherBtn.addEventListener("click", () => {
      fetchWeather(country.latlng[0], country.latlng[1], country.name.common);
    });

    cardBody.appendChild(capital);
    cardBody.appendChild(latlng);
    cardBody.appendChild(flag);
    cardBody.appendChild(region);
    cardBody.appendChild(countryCodes);
    cardBody.appendChild(weatherBtn);

    card.appendChild(cardHeader);
    card.appendChild(cardBody);

    countryCardsContainer.appendChild(card);
  }

  function fetchWeather(latitude, longitude, countryName) {
    const apiKey = "95daeb8807e7c6c81bbfdef0b4eb545a";
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}`;

    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        displayWeather(countryName, data.weather[0].description, data.main.temp);
      })
      .catch((error) => console.error("Error fetching weather:", error));
  }
});

function displayWeather(countryName, description, temperature) {
alert(`${countryName} Weather:
Description: ${description}
Temperature: ${temperature} Kelvin`);
}
