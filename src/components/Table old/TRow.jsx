import React from "react";
import TElement from "./TElement";
import "./table.css";

function TRow(props) {
    var tableElements = [];

    props.rowData.forEach(elem => {
        tableElements.push(<TElement key={elem.name} name={elem.name} value={elem.value}></TElement>);
    });

    return (
        <tr>{tableElements}</tr>
    );
}

export default TRow;