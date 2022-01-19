import './App.css';
import { WheatherProvider } from './context/WeatherContext';
import { Select } from './companenets/Select';
import { Cards } from './companenets/Cards';

function App() {
  return (
    <div className="App">
      <WheatherProvider>
        <Select />
        <Cards />
      </WheatherProvider>
    </div>
  );
}

export default App;
