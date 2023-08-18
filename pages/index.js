import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import React, { useState } from "react";

export default function Home() {
  const [inputData, setInputData] = useState({
    tripMilage: "",
    tripGallons: "",
  });
  const [outputData, setOutputData] = useState({
    output: "0",
  });

  function handleChange(event) {
    let value = event.target.value;
    let id = event.target.id;
    setInputData({ ...inputData, [id]: value });
    console.log(inputData);
  }

  function calculate() {
    let result = int(tripMilage) + int(tripGallons);

    setOutputData({
      [output]: result,
    });
  }

  return (
    <div id="app">
      <h1>Gas Milage Tracker</h1>
      <form className="quick_calculate_wrapper">
        <input
          type="number"
          placeholder="Milage of Last Trip"
          id="tripMilage"
          className="quick_calculate"
          value={inputData.tripMilage}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Gallons of Last Fillup"
          id="tripGallons"
          className="trip_gallons"
          value={inputData.tripGallons}
          onChange={handleChange}
        />

        <button onClick={calculate}>Calculate</button>
        <div id="output">{outputData.output}</div>
      </form>
    </div>
  );
}
