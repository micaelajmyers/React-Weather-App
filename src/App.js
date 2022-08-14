import React from "react";
import "./App.css";
import Weather from "./Weather";
import Button from "./Button";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <div className="container">
        <div className="homepage shadow">
          <Weather defaultCity="New York" />
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
