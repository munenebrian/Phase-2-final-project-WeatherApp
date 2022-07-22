import React, {useState} from "react";
import Container from "./Container";
import axios from "axios";

function App() {
 // const url = `https://api.openweathermap.org/data/2.5/weather?q={city name}&appid=6d8edebf6ae0e79385fd677f52dccb28`



  return (
    <div className="app">
      <div className="container">
       <div className="top">
        <div className="location">
         <p>Nairobi</p>
        </div>
        <div className="temp">
          <h1>20°F</h1>
        </div>
        <div className="description">
          <p>Clouds</p>
        </div>
       </div>
       <div className="bottom">
        <div className="feels">
          <p>20°F</p>
        </div>
        <div className="humidity">
          <p>20%</p>
        </div>
        <div className="wind">
          <p>12mph</p>
        </div>
       </div>
      </div>
    </div>
  );
}

export default App;
