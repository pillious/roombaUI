import React, {useState, useEffect} from "react";
import "./header.css";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import Element from "./Element";

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: theme.spacing(1),  
    }
}));

function Header(props) {
    const {paperStyle} = useStyles();

    return (
        <div className="div-header-wrapper">
            <Paper className={paperStyle}>
                <Element key="isAlive" label="isAlive" value={props.data.isAlive}></Element>
                <Element key="oiMode" label="oiMode" value={props.data.oiMode}></Element>
                <Element key="chargingState" label="chargingState" value={props.data.chargingState}></Element>
            </Paper>
            <div className="header">
                <div>Roooooooomba</div>
            </div>
            <Paper className={paperStyle}>
                <Element key="battery" label="Battery" value={props.data.batteryCapacity + "/" + props.data.batteryCharge}></Element>
                <Element key="current" label="Current" value={props.data.current}></Element>
                <Element key="voltage" label="Voltage" value={props.data.voltage}></Element>
                <Element key="temperature" label="Temperature" value={props.data.temperature}></Element>
            </Paper>
        </div>

    );
}

export default Header;