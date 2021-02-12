import React from "react";
import {useState, useEffect} from "react";
import Element from "./Element";
import "./table.css";

function Table() {

    const [data, setData] = useState(
        [{name: "Reading 1", value: 10}, {name: "Reading 2", value: 35}, {name: "Reading 3", value: -43}, {name: "Reading 4", value: 481}]
    );
    const [elements, setElements] = useState([]);

    function updateElements() {
        let arr = [];

        data.forEach(elem => {
            arr.push(<Element key={elem.name} name={elem.name} value={elem.value}></Element>);
        })

        setElements(arr);
    }

    useEffect(() => {
        updateElements()
    }, [data]);

    useEffect(() => {
        const ws = new WebSocket("ws://192.168.1.106:8888");
        ws.onopen = () => console.log("ws opened.");
        ws.onclose = () => console.log("ws closed.");
        ws.onmessage = e => updateData(e);
    }, []);

    function updateData(e) {
        console.log("New Data: " + e.data);
        var newData = [{name: "New 1", value: 534}, {name: "New 2", value: 75}, {name: "New 3", value: 343}, {name: "New 4", value: -1233}]
        setData(newData);
    }

    return (
        <div className="tableWrapper">
            {elements}
        </div>

    );

}

export default Table;