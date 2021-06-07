import {useState} from 'react';
import weather from 'openweather-apis';
import {API_KEY} from './config'
import './App.css';
import Weather from './components/Weather';

function App() {

  weather.setLang('en');
  weather.setAPPID(API_KEY);

  const [city, setCity] = useState('')
  
  return (
    <div className="App">
      <Weather setCity={setCity} weather={weather} city={city} />
    </div>
  );
}

export default App;
