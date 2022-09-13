import { weatherLogic } from "./weatherLogic";

const domLogic = (() => {
  const form = document.querySelector("form");
  const cityField = document.getElementById("city");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    weatherLogic
      .getprocessedData(cityField.value, "metric")
      .then((res) => console.table(res));
  });

  return {};
})();

export { domLogic };
