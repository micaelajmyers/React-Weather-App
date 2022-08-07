import React from "react";
import "./App.css";
import Search from "./Search";
import Temperature from "./Temperature";
import Button from "./Button";
import Footer from "./Footer";
import Forecast from "./Forecast";
function App() {
  return (
    <div>
      <div className="container">
        <div className="homepage shadow">
          <Search />
          <Temperature />
          <br />
          <div className="basic weather-forecast" id="forecast"></div>
          <Forecast />
        </div>

        <div className="row">
          <Footer />
          <Button />
        </div>
      </div>
      <script src="scripts/app.js"></script>
    </div>
  );
}

export default App;
