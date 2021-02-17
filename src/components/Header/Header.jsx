import React from "react";
import AdbIcon from '@material-ui/icons/Adb';
import {Paper, Divider} from "@material-ui/core";
import { makeStyles } from "@material-ui/core";
import Element from "./Element";
import "./header.css";
import { findByLabelText } from "@testing-library/react";

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: theme.spacing(1),  
        height: 40,
    },
    icon: {
        fontSize: 60,
    },
    divider: {
        margin: "3px 0"
    }
}));

function Header(props) {
    const classes = useStyles();

    return (
        <div className="div-header-wrapper">
            <div className="header">
                <AdbIcon className={classes.icon} />
            </div>
            <div className="data-table">
                <Paper className={classes.paperStyle} elevation={5}>
                    <div className="data-row">
                        <Element key="isAlive" label="isAlive" value={props.data.isAlive}></Element>
                        <Element key="oiMode" label="oiMode" value={props.data.oiMode}></Element>
                        <Element key="chargingSource" label="chargingSource" value={props.data.chargingSource}></Element>
                    </div>
                    <Divider className={classes.divider} />
                    <div className="data-row">
                        <Element key="battery" label="Battery" value={props.data.batteryCharge + "/" + props.data.batteryCapacity}></Element>
                        <Element key="current" label="Current" value={props.data.current}></Element>
                        <Element key="voltage" label="Voltage" value={props.data.voltage}></Element>
                        <Element key="temperature" label="Temperature" value={props.data.temperature}></Element>
                    </div>
                </Paper>
            </div>
        </div>
    );
}

export default Header;