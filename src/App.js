import './App.css';
import UilReact from '@iconscout/react-unicons/icons/uil-react'
import Buttons from './components/Buttons';
import Inputs from './components/Inputs';

function App() {
  return (
    <div className="max-w-screen-md mx-auto h-fit mt-5 py-6 px-32 shadow-lg shadow-gray-500 bg-gradient-to-br from-orange-400 to-orange-700">
      <Buttons />
      <Inputs />
    </div>
  );
}

export default App;
