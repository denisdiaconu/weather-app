import './App.css';
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import TimeCity from './components/TimeCity';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getFormatData from './api/weatherApi';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: 'Sofia'})
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormatData({...query}).then((data) => {
        setWeather(data)
      })
    };
    fetchWeather()
  }, [query])

  const changeBackground = () => {
    if(!weather) return "from-cyan-700 to-blue-700";
    if(weather.main.temp <= 10 ) {
      return "from-blue-400 to-blue-700"
    } else if (weather.main.temp <= 20) {
      return "from-cyan-700 to-blue-700"
    }
    return "from-yellow-700 to-orange-700"
  }


  return (
    <div className="flex md:items-center h-fit md:h-screen w-screen">
      <div className={`md:max-w-screen-md w-screen mx-auto h-fit md:h-fit py-10 md:px-32 md:shadow-lg md:shadow-gray-500 bg-gradient-to-br ${changeBackground()} md:rounded`}>
        <Buttons setQuery={setQuery} />
        <Inputs setQuery={setQuery} />

        {weather && (
          <div>
            <TimeCity weather={weather} />
            <TempAndDetails weather={weather} />
            <Forecast name="Every hour forecast" list={weather.hourly} />
            <Forecast name="Every day forecast" list={weather.daily} />
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
