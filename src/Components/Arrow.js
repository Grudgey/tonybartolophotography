import React from "react";
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

function Arrow(props) {
    return <div className={props.direction === "left" ? "arrowleft" : "arrowright"} onClick={props.handleClick}>
        {props.direction === "left" ? <ArrowBackIosIcon /> : <ArrowForwardIosIcon className="arrowright" />}
    </div>
}

export default Arrow;