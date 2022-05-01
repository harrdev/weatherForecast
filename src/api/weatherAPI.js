// import axios from 'axios';

// function fetchWeatherData() {
//     const apiKey = '8befedfd791ad7d475cbd5fe6a81e729'
//     const mesaLat = 33.4152
//     const mesaLon = 111.8315
//     const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${mesaLat}&lon=${mesaLon}&exclude=current,minutely,hourly,alerts&appid=${apiKey}`
//     axios.get(url)
//         .then((response) => {
//             let results = response.data.daily
//             let stateData = []
//             results.map((weather) => {
//               stateData.push(weather)
//             })
//             console.log("StateData will be: ", stateData)
//             setForecast(stateData)
//         })
//         .catch((error) => {
//             console.log("Error is: ", error)
//         })
//   }
  
//   export default fetchWeatherData;
  