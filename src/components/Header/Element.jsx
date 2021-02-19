import React from "react";
import "./header.css";

function Element(props) {
    return (
        <div>
            <div className="property">
                <div>{props.label}: </div>
                <div>{props.value} </div> 
            </div>    
        </div>
    );
}

export default Element;