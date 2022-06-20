import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';
import TimeCity from './components/TimeCity';
import TempAndDetails from './components/TempAndDetails';
import Forecast from './components/Forecast';

function App() {
  return (
    <div className="max-w-screen-md mx-auto h-fit mt-5 py-6 px-32 shadow-lg shadow-gray-500 bg-gradient-to-br from-orange-400 to-orange-700">
      <Buttons />
      <Inputs />
      <TimeCity />
      <TempAndDetails />
      <Forecast name="every hour forecast" />
      <Forecast name="every day forecast" />
    </div>
  );
}

export default App;
