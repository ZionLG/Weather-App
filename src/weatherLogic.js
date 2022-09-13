const weatherLogic = (() => {
  const _apiKey = "0Oaj07vOtXRsOSIVFVMF8Fi7e1s1Se2L";
  const getCityData = async (cityName) => {
    try {
      const response = await fetch(
        `https://api.giphy.com/v1/gifs/translate?api_key=${_apiKey}&s=${cityName}`
      );
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return { getCityData };
})();

export { weatherLogic };
