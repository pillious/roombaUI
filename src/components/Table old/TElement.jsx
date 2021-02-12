import React from "react";
import "./table.css";

function TElement(props) {
    return (
        <td>
            <div className="name">{props.name}</div>
            <div className="value">{props.value}</div>
        </td>
    );
}

export default TElement;