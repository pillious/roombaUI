import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import TBody from "./TBody";
import "./table.css";

function Table() {

    const [data, setData] = useState(
        [{name: "Reading 1", value: 10}, {name: "Reading 2", value: 35}, {name: "Reading 3", value: -43}, {name: "Reading 4", value: 481}]
    );

    const cols = 10;
    var rows = numOfRows();

    function numOfRows() {
        if (data.length == 0) {
            return 0;
        }

        rows = parseInt(data.length / cols);
        if (data.length % cols != 0) {
            rows++;
        }

        return rows;
    }

    // useEffect(() => {
    //     const ws = new WebSocket("ws://192.168.1.106:8888");
    //     ws.onopen = () => console.log("ws opened.");
    //     ws.onclose = () => console.log("ws closed.");
    //     ws.onmessage = e => updateData(e);
    // }, []);

    function updateData(e) {
        console.log("New Data: " + e.data);
        var newData = [{name: "New 1", value: 534}, {name: "New 2", value: 75}, {name: "New 3", value: 343}, {name: "New 4", value: -1233}]
        setData(newData);
    }

    return (
        <div>
            <table>
                <TBody rows={rows} cols={cols} data={data}></TBody>
            </table>
        </div>

    );

}

export default Table;