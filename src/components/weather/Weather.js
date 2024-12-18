import GetWeather from './GetWeather';
import ListWeather from './ListWeather';

import {useState} from "react"

function Weather(props) {
  const {phrase} = props

  const [weatherData, setWeatherData] = useState()

  function handleWeatherData(data) {
    setWeatherData(data)
  }

  return (
    <div className="kontajner" id="predpoved">
      <h2>{phrase["Weather forecast"]}</h2>

      <GetWeather phrase={phrase} onSubmitData={handleWeatherData} />
      <ListWeather phrase={phrase} weatherData={weatherData}/>
      
      <p>{phrase["The data is obtained"]} <strong><a href="https://open-meteo.com/">open-meteo.com</a></strong></p>
    </div>
  );
}

export default Weather;
