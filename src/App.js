import React from "react";
import "./App.css";
import Info from "./components/Info";
import About from "./components/About";
import Interest from "./components/Interests";

export default function App() {
  return (
    <div className="container">
      <div className="card">
        <Info />
        <About />
        <Interest />
      </div>
    </div>
  );
}
