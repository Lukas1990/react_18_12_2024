import temperature from '../../img/temperature.gif';
import wind from '../../img/wind.gif';
import partly_cloudy from '../../img/partly_cloudy.gif';
import rain from '../../img/rain.gif';
import snow from '../../img/snow.gif';


function ListWeather(props) {

  const {weatherData, phrase} = props

  return (
      <div id="tabulky">
      {weatherData != undefined && weatherData.map((item, index) => (
        <table key={index}>
          <caption>{item.date}</caption>
          <tbody>
            <tr>
              <th scope="row"><img alt="temperature" src={temperature} width="40"/></th>
              <td>max</td>
              <td>{item.temperature_2m_max} °C</td>
            </tr>
            <tr>
              <th scope="row"><img alt="wind" src={wind} width="40"/></th>
              <td>{phrase["wind"]}</td>
              <td>{item.wind_speed_10m_max} km/h</td>
            </tr>
            <tr>
              <th scope="row"><img alt="cloudy" src={partly_cloudy} width="40"/></th>
              <td>{phrase["cloudiness"]}</td>
              <td>{item.weather_code} %</td>
            </tr>
            <tr>
              <th scope="row"><img alt="rain" src={rain} width="40"/></th>
              <td>{phrase["rain"]}</td>
              <td>{item.rain_sum} mm</td>
            </tr>
            <tr>
              <th scope="row"><img alt="snow" src={snow} width="40"/></th>
              <td>{phrase["snow"]}</td>
              <td>{item.snowfall_sum} cm</td>
            </tr>
          </tbody>
        </table>
        ))}
      </div>
  );
}

export default ListWeather;
