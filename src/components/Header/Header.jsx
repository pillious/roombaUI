import React, {useState, useEffect} from "react";
import "./header.css";
import Card from "./Card";

function Header(props) {

    const [sensorData, setSensorData] = useState([]);
    const [batteryData, setBatteryData] = useState([]);

    useEffect(() => {
        var arr1 = [];
        var arr2 = [];

        for (let i = 0; i < props.data.length; i++) {
            if (["isHomeBase", "chargingState", "oiMode", "isAlive"].includes(props.data[i].name)) {
                arr1.push(props.data[i]);
            }
            else {
                arr2.push(props.data[i]);
            }
        }
        setSensorData(arr1);
        setBatteryData(arr2);
    }, [props.data]);

    return (
        <div className="div-header-wrapper">
            <Card data={sensorData}></Card>
            <div className="header">
                <div>Roooooooomba</div>
            </div>
            <Card data={batteryData}></Card>
        </div>

    );
}

export default Header;