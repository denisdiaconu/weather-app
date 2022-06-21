import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import TimeCity from './components/TimeCity';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';
import getFormatData from './api/weatherApi';
import { useEffect, useState } from 'react';

function App() {

  const [query, setQuery] = useState({q: 'berlin'})
  const [weather, setWeather] = useState(null)

  useEffect(() => {
    const fetchWeather = async () => {
      await getFormatData({...query}).then((data) => {
        setWeather(data);
      })
    };
    fetchWeather();
  }, [query])


  return (
    <div className="max-w-screen-md mx-auto h-fit mt-5 py-6 px-32 shadow-lg shadow-gray-500 bg-gradient-to-br from-orange-400 to-orange-700">
      <Buttons setQuery={setQuery} />
      <Inputs setQuery={setQuery} />

      {weather && (
        <div>
          <TimeCity weather={weather} />
          <TempAndDetails weather={weather} />
          <Forecast name="every hour forecast" list={weather.hourly} />
          <Forecast name="every day forecast" list={weather.daily} />
        </div>
      )}
    </div>
  );
}

export default App;
