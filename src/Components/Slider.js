import React, { useState } from "react";
import Slide from "./Slide";
import Arrow from "./Arrow.js";


import SliderContent from "./SliderContent";

function Slider(props) {

    function getWidth() {
      return window.innerWidth;
    }

    const [state, setState] = useState({
      activeIndex: 0,
      translate: 0,
      transition: 0.45
    })

    const { translate, transition, activeIndex } = state;

      function nextImage() {
        console.log("next");
        if (activeIndex === props.slides.length - 1) {
          return setState({
            ...state,
            translate: 0,
            activeIndex: 0
          })
        }
    
        setState({
          ...state,
          activeIndex:   activeIndex + 1,
          translate: (activeIndex + 1) * getWidth()
        })
      }

      function prevImage() {
        console.log(props.slides.length);
        if (activeIndex === 0) {
          return setState({
            ...state,
            translate: (props.slides.length - 1) * getWidth(),
            activeIndex: props.slides.length - 1
          })
        }
    
        setState({
          ...state,
          activeIndex: activeIndex - 1,
          translate: (activeIndex - 1) * getWidth()
        })
      }

    return <div className="slider">
    <SliderContent translate={translate}
        transition={transition}
        width={getWidth() * props.slides.length}>

          {props.slides.map((slide, i) => (
            <Slide key={slide + i} content={slide} />
          ))} 

        </SliderContent>
        <Arrow direction="left" handleClick={prevImage}/>
        <Arrow direction="right" handleClick={nextImage}/> 
        </div>
}

export default Slider;