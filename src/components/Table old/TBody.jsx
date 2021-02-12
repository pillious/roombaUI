import React from "react";
import TRow from "./TRow";
import "./table.css";

function TBody(props) {
    let tableRows = [];

    for (let i = 0; i < props.rows; i++) {
        let rowData = props.data.slice(0 + i*props.cols, (props.cols-1)+(i*props.cols)) 

        tableRows.push(<TRow key={"row_" + i} rowData={rowData}></TRow>)
    }

    return (
        <tbody>{tableRows}</tbody>
    );
}

export default TBody;