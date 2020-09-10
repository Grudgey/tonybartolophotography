import React from 'react';
import "./Components/Header.js"
import Header from './Components/Header.js';
import Footer from './Components/Footer.js';
import Slider from './Components/Slider.js';

const images = [
  '/images/1.jpg',
  '/images/2.tif',
  '/images/3.tif',
  '/images/4.jpg',
  '/images/5.jpg',
  '/images/6.jpg',
  '/images/7.jpg',
  '/images/8.jpg',
]

function App() {
  return <div><Header /><Slider slides={images} /><Footer /></div> 
}

export default App;
