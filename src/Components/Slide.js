import React from "react";

function Slide(props) {
    return <div style={{
        backgroundImage: `url(${props.content})`,
    }} className="slide"  />
}

export default Slide;