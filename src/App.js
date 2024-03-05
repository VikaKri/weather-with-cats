import "./App.css";

import Search from "./Search";
import MainCity from "./MainCity";
import TodayForecast from "./TodayForecast";
import NextDays from "./NextDays";
import Creator from "./Creator";

function App() {
  return (
    <div className="App">
      <div className="card mt-0 mb-4">
        <div className="card-body">
          <h1>Weather Forecast with Cats</h1>
        </div>
      </div>
      <Search />
      <MainCity />
      <TodayForecast />
      <NextDays />
      <Creator />
    </div>
  );
}

export default App;
