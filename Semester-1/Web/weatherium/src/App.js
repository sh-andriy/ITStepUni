import './App.css';
import Search from "./components/search/search";
import CurrentWeather from "./components/current-weather/current-weather";
import {WEARTHER_API_KEY, WEATHER_API_URL} from "./api";

function App() {

    const handleOnSearchChange = (searchData) => {
        const [lat, lon] = searchData.value.split(" ");

        const currentWeatherFetch = fetch(`${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEARTHER_API_KEY}`)
        const forecastFetch = fetch(`${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEARTHER_API_KEY}`)

    }

  return (
    <div className="container">
        <Search onSearchChange={handleOnSearchChange}/>
        <CurrentWeather />
    </div>
  );
}

export default App;
