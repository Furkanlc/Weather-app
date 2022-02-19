const url = "https://api.openweathermap.org/data/2.5";
const key = "8d187d184d8736745f3c70c0bfb95da3";
const searchBar = document.getElementById("serchBar");

/* entere basılma durumu */
const setQuery = (e) => {
    if (e.keyCode == "13") {
        getResult(searchBar.value);
    }
}

/* API çağrısı */
const getResult = (cityName) => {
    let query = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${key}&units=metric&lang=tr`
    fetch(query)
        .then(weather => {
            return weather.json()
        })
        .then(displayResult)
}
const displayResult = (result) => {

    /* Sehir Atama */
    let city = document.querySelector(".city");
    city.innerHTML = `${result.name},${result.sys.country}`

    /* Sıcaklık Atama */
    let temp = document.querySelector(".temp");
    temp.innerHTML = `${Math.round(result.main.temp)}°C`;

    /* Açıklama Atama */
    let desc = document.querySelector(".desc");
    desc.innerHTML = `${result.weather[0].description} `;

    /* Min-max sıcaklık değeri Atama */
    let minmax = document.querySelector(".minmax");
    minmax.innerHTML = `${Math.round(result.main.temp_min)} °C / ${Math.round(result.main.temp_max)} °C `;
}
searchBar.addEventListener('keypress', setQuery);