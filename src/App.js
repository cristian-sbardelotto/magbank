import React from "react";
import Navbar from "./components/Navbar";
import Hero from './components/Hero';
import Credit from "./components/Credit";
import "./app.scss";

const App = () => (
    <div className="App">
      <Navbar />
      <Hero />
      <Credit />
    </div>
  );

export default App;
