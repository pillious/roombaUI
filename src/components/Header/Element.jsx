import React from "react";
import "./header.css";

function Element(props) {
    return (
        <div>
            <div>
                <span>{props.label}</span>: <span>{props.value}</span>
            </div>
        </div>
    );
}

export default Element;