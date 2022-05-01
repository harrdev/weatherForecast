import './App.css';
import { useState, useEffect } from 'react';
import axios from 'axios';
import Forecast from './components/Forecast';

function App() {

  const [today, setToday] = useState(0)
  const [lows, setLows] = useState([])
  const [highs, setHighs] = useState([])
  const [icon, setIcon] = useState([])

  useEffect(() => {
    fetchWeatherData()
    getDayOfWeek()
  }, [])

  function fetchWeatherData() {
    const apiKey = ''
    const mesaLat = 33.4152
    const mesaLon = -111.8315
    const url = `https://api.openweathermap.org/data/2.5/onecall?lat=${mesaLat}&lon=${mesaLon}&units=imperial&exclude=current,minutely,hourly,alerts&appid=${apiKey}`
    axios.get(url)
      .then((response) => {
        let results = response.data.daily
        let stateData = []
        let lows = []
        let highs = []
        let icons = []
        results.map((weather) => {
          stateData.push(weather)
          lows.push(parseInt(weather.temp.min))
          highs.push(parseInt(weather.temp.max))
          icons.push(weather.weather[0].icon)
          return weather
        })
        setLows(lows)
        setHighs(highs)
        setIcon(icons)
      })
      .catch((error) => {
        console.log("Error is: ", error)
      })
  }

  function getDayOfWeek() {
    let today = new Date();
    setToday(today.getDay())
  };

  return (
    <div className="App">
      <h1>Weather Forecast</h1>
      <Forecast today={today} lows={lows} highs={highs} icon={icon} />
    </div>
  );
}

export default App;
