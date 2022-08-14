import React from "react";
import "./App.css";
import Search from "./Search";
import Button from "./Button";
import Footer from "./Footer";
function App() {
  return (
    <div>
      <div className="container">
        <div className="homepage shadow">
          <Search defaultCity="New York" />
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
