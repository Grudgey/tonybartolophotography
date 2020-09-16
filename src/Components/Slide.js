import { Modal } from "@material-ui/core";
import React, { useState } from "react";

function Slide(props) {

    let [open, setState] = useState(false);

    const toggleOpen = () => {
        setState(!open);
      };

    return <div className="slide">
    <div onClick={toggleOpen} style={{backgroundImage: `url(${props.content})`}} className="slide-bg" />
    <Modal open={open}
        onClose={toggleOpen}
        aria-labelledby="Image pop-up"
        aria-describedby="Image description">
        <div onClick={toggleOpen} className="image-modal">
            <img  src={props.content} alt={props.content}/>
        </div>
        </Modal>
</div>

}

export default Slide;
