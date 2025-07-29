const button = document.getElementById("search-button");
const input = document.getElementById("city-input");

const cityName = document.getElementById('city-name');
const cityTime = document.getElementById('city-name');
const cityTemp = document.getElementById('city');

async function getData(cityName) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=2c98dbbdb5ef44e99bc90820252107&q=${cityName}&aqi=yes`
  );

  return await promise.json();
}

button.addEventListener("click", async () => {
  // console.log(input.value);
  const value = input.value;
  const result = await getData(value);
  console.log(result);
  cityName.innerText = `${result.loacation.name}, ${result.location.region} -${result.location.country}`;
  cityName.innerText = result.location.localtime;
  cityTemp.innerText = result.current.temp_c;
});
