import React from "react";
import {useState, useEffect} from "react";
import Element from "./Element";
import "./table.css";

function Table(props) {

    const [elements, setElements] = useState([]);

    useEffect(() => {
        updateElements()
    }, [props.data]);

    function updateElements() {
        let arr = [];

        props.data.forEach(elem => {
            arr.push(<Element key={elem.name} name={elem.name} value={elem.value}></Element>);
        })

        setElements(arr);
    }

    return (
        <div className="tableWrapper">
            {elements}
        </div>
    );

}

export default Table;