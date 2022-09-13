import { weatherLogic } from "./weatherLogic";

const domLogic = (() => {
  const form = document.querySelector("form");
  const cityField = document.getElementById("city");
  const cityStatus = document.getElementById("city-status");
  const temp = document.getElementById("temp");
  const feelsLike = document.getElementById("temp-feels-like");
  const windSpeed = document.getElementById("wind-speed");
  const humidityLevel = document.getElementById("humidity-level");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    weatherLogic
      .getprocessedData(cityField.value, "metric")
      .then((res) => displayContent(res));
  });

  const displayContent = (data) => {
    cityField.value = `${data.name}, ${data.country}`;
    cityField.style.width = `calc(${cityField.value.length}ch + 20px)`;
    cityStatus.textContent = data.description;
    temp.textContent = Math.round(data.temp);
    feelsLike.textContent = Math.round(data.feels_like);
    windSpeed.textContent = Math.round(data.wind_speed);
    humidityLevel.textContent = data.humidity;
  };

  return { displayContent };
})();

export { domLogic };
