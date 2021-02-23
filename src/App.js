import React, { Component, useState, useEffect, useRef } from 'react'
import './style/styles.css'
import Button from './component/Button'
import Header from './component/Header'
import { useSpring, animated } from "react-spring";
import { render } from 'react-dom'
import $ from 'jquery'



class App extends React.Component {


  render() {
    return (
      <>
      <Header  text1="Hello World" text2="Lorem Ipsum Lorem Ipsum Lorem Ipsum"/>
        <div className="main"><div id="progress">20</div></div>
        <div className="container">
          <div className="glass">
            <div className="water" ></div>
          </div>
          <Button classcolor='glassIncrease' text='Increase level' onClick={increaseHeight} />
          <Button classcolor='glassDecrease' text='Decrease level' onClick={decreaseClick} />

        </div>
        
      </>
    )
  }
}



var p = $("#progress").text(),//your percentage
  c = 100,//height of glass
  a = (p / 100) * c;
const increaseHeight = () => {
  if (a == 20) {
    // document.getElementsByClassName('water');
    $('div .water').animate().animate({
      height: a + "px",
    }, 500);
    a += 20;
  } else if (a == 40) {

    $('div .water').animate().animate({
      height: a + "px",
    }, 500);
    a += 20;

  } else if (a == 60) {

    $('div .water').animate().animate({
      height: a + "px",
    }, 500);
    a += 20;

  } else if (a == 80) {

    $('div .water').animate().animate({
      height: a + "px",
    }, 500);
    a += 20;

  } else if (a == 100) {

    $('div .water').animate().animate({
      height: a + "px",
    }, 500);

  } else {
    a = 20;
    $('div .water').animate().animate({
      height: a + "px",
    }, 500);
  }
  console.log('increaseClick' + a);


}

const decreaseClick = () => {
  console.log('decreaseClick' + a);
  if (a == 20) {

    $('div .water').animate().animate({
      height: "0px",
    }, 500);
    a = 0;
  } else if (a == 40) {

    $('div .water').animate().animate({
      height: "20px",
    }, 500);
    a = 20;

  } else if (a == 60) {

    $('div .water').animate().animate({
      height: "40px",
    }, 500);
    a = 40;

  } else if (a == 80) {

    $('div .water').animate().animate({
      height: "60px",
    }, 500);

    a = 60;
  } else if (a == 100) {

    $('div .water').animate().animate({
      height: "80px",
    }, 500);

    a = 80;
  } else {

  }
  console.log('decreaseClick' + a);

}
export default App