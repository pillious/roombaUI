import React from "react";
import "./table.css";

function Element(props) {
    return (
        <div className="elementWrapper">
            <div className="name">{props.name}</div>
            <div className="value">{props.value}</div>
        </div>

    );
}

export default Element;