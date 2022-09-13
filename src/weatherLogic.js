const weatherLogic = (() => {
  const _apiKey = "4a6ad7f18848adcfbfcc05c698c9343a";
  const _getCityData = async (cityName, unit) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${_apiKey}&units=${unit}`
      );
      const data = await response.json();
      return data;
    } catch (error) {
      console.log(error);
    }
  };
  const getprocessedData = async (cityName, unit) => {
    try {
      const data = await _getCityData(cityName, unit);
      const country = data.sys.country === "PS" ? "IL" : data.sys.country;
      return {
        name: data.name,
        country: country,
        temp: data.main.temp,
        feels_like: data.main.feels_like,
        description: data.weather[0].description,
        humidity: data.main.humidity,
        wind_speed: data.wind.speed,
      };
    } catch (error) {
      console.error("Not Found");
    }
  };
  return { getprocessedData };
})();

export { weatherLogic };
