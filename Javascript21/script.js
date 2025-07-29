const button = document.getElementById('get-locations');


async function getData(lat,long) {
  const promise = await fetch(
    `http://api.weatherapi.com/v1/current.json?key=2c98dbbdb5ef44e99bc90820252107&q=${lat}, ${long}&aqi=yes`
  );

  return await promise.json();
}

async function geolocation(position){
const result = await getData(position.coords.latitude,
     position.coords.longitude);
console.log(result);
}

function failedToGet(){
    console.log('There was some issue');
}


button.addEventListener('clcik', async() =>{
const result = navigator.geolocation.getCurrentPosition({})//it has two callbacks one is success and another is for failure.
})