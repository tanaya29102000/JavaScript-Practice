const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById("city-name");
const cityTime = document.getElementById("city-time");
const cityNameTemp = document.getElementById("city-temp");

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=878d1283093144ba95e53831252502&q=${cityName}&aqi=yes`
  );
  return await promise.json();
}
button.addEventListener("click", async () => {
  const value = input.value;
  const result = await getData(value);
  cityName.innerText = `${result.location.name}, ${result.location}`;
  cityTime.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
});
