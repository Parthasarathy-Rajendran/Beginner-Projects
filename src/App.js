// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Calculator from "./components/Calculator";
import WeatherApp from "./components/WeatherApp";
import Bin2Dec from "./components/Bin2Dec";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bin2Dec" element={<Bin2Dec />} />
          <Route path="/calculator" element={<Calculator />} />
          <Route path="/weather-app" element={<WeatherApp />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
