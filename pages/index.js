import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import React, {useState} from 'react';

export default function Home() {
  const [inputData, setInputData] = useState({
    tripMilage: '',
    tripGallons: '',
  })
  const [outputData, setOutputData] = useState({
    output: ''
  })
  return (
    <div id='app'>
      <h1>Gas Milage Tracker</h1>
      <form className='quick_calculate_wrapper'>
        <input type='number' placeholder='Milage of Last Trip' id='trip_milage' className='quick_calculate'></input>
        <input type='number' placeholder='Gallons of Last Fillup' id='trip_gallons' ></input>
        <div id='output'></div>
      </form>
    </div>
  )
}
