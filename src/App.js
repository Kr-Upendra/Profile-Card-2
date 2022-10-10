import React from "react";
import "./App.css";
import Info from "./components/Info";
import Info2 from "./components/Info2";
import About from "./components/About";
import Interest from "./components/Interests";
import Footer from "./components/Footer";
import Footer2 from "./components/Footer2";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <Info />
        <About />
        <Interest />
        <Footer />
      </div>
      <div className="card">
        <Info2 />
        <About />
        <Interest />
        <Footer2 />
      </div>
    </div>
  );
}
