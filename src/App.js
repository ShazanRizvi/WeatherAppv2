import "./App.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Carditem from "./components/CardItem/CardItem.jsx";
import NavbarHero from "./components/Hero/NavbarHero";
import Search from "./components/Search/Search";

function App() {
  const [weather, setWeather] = useState({});
  const [cityQuery, setCityQuery] = useState("");

  const handleCityQuery = (cityQuery) => {
    setCityQuery(cityQuery);
  };

  const defaultQuery = () => {
    if (cityQuery === "") {
      setCityQuery("Delhi");
    }
  };

  useEffect(() => {
    const options = {
      method: "GET",
      url: `http://api.weatherapi.com/v1/current.json?key=143fbd2828924a2cbfc133847232303&q=${cityQuery}`,
    };
    defaultQuery();

    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
        setWeather(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [cityQuery]);

  return (
    <>
      <NavbarHero
        name={weather.location.name}
        temp={weather.current.temp_f}
        time={weather.current.last_updated}
        wind={weather.current.wind_kph}
        pressure={weather.current.pressure_in}
        humidity={weather.current.humidity}
      />
      <Search handleCityQuery={handleCityQuery} />
      <Carditem
        name={weather.location.name}
        temp={weather.current.temp_f}
        time={weather.current.last_updated}
      />
    </>
  );
}

export default App;
