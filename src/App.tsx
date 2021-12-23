import React from "react";
import Navbar from "./components/Navbar/Navbar";
import VanshawaliComponent from "./components/Vanshawali/Vanshawali.component";
import "./App.css";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <VanshawaliComponent />
    </>
  );
}

export default App;
