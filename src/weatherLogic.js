const weatherLogic = (() => {
  const _apiKey = "4a6ad7f18848adcfbfcc05c698c9343a";
  const getCityData = async (cityName) => {
    try {
      const response = await fetch(
        `http://api.openweathermap.org/data/2.5/weather?q=${cityName}&APPID=${_apiKey}`
      );
      return await response.json();
    } catch (error) {
      console.error(error);
    }
  };

  return { getCityData };
})();

export { weatherLogic };
