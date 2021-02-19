import React from "react";
import AdbIcon from '@material-ui/icons/Adb';
import {makeStyles, Paper, Divider, Tooltip} from "@material-ui/core";
import {BatteryAlert, Battery20, Battery30, Battery50, Battery60, 
    Battery80, Battery90, BatteryFull, BatteryCharging20, BatteryCharging30,
    BatteryCharging50, BatteryCharging60, BatteryCharging80, 
    BatteryCharging90, BatteryChargingFull} from "@material-ui/icons";
import Element from "./Element";
import "./header.css";

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

    function createOiModeElement() {
        switch(parseInt(props.data.oiMode)) {
            case 1: return <Element key="oiMode" label="oiMode" value="Passive" />;
            case 2: return <Element key="oiMode" label="oiMode" value="Safe" />;
            case 3: return <Element key="oiMode" label="oiMode" value="Full" />;
        }
    }

    function createBatteryElement() {
        var batteryCharge = props.data.batteryCharge;
        var batteryCapacity = props.data.batteryCapacity;
        var isCharging = (props.data.current > 0) ? true : false;
        var percentFull = (batteryCharge / batteryCapacity) * 100
        var icon = batteryIcon(isCharging, percentFull);
        return <Tooltip title={batteryCharge+"/"+batteryCapacity} arrow><span><Element key="battery" label="Battery" value={icon} /></span></Tooltip>;
    }

    function batteryIcon(isCharging, percentFull) {
        if (!isCharging) {
            if (percentFull <= 5) return <BatteryAlert />;
            else if (percentFull <= 20) return <Battery20 />;
            else if (percentFull <= 30) return <Battery30 />;
            else if (percentFull <= 50) return <Battery50 />;
            else if (percentFull <= 60) return <Battery60 />;
            else if (percentFull <= 80) return <Battery80 />;
            else if (percentFull <= 90) return <Battery90 />;
            else if (percentFull === 100) return <BatteryFull />;               
        }
        else {
            if (percentFull <= 20) return <BatteryCharging20 />;
            else if (percentFull <= 30) return <BatteryCharging30 />;
            else if (percentFull <= 50) return <BatteryCharging50 />;
            else if (percentFull <= 60) return <BatteryCharging60 />;
            else if (percentFull <= 80) return <BatteryCharging80 />;
            else if (percentFull <= 90) return <BatteryCharging90 />;
            else if (percentFull === 100) return <BatteryChargingFull />;
        }
    }

    return (
        <div className="div-header-wrapper">
            <div className="header">
                <AdbIcon className={classes.icon} />
            </div>
            <div className="data-table">
                <Paper className={classes.paperStyle} elevation={5}>
                    <div className="data-row">
                        <Element key="isAlive" label="isAlive" value={props.data.isAlive ? props.data.isAlive : "NaN"}></Element>
                        {createOiModeElement()}
                        <Element key="chargingSource" label="chargingSource" value={props.data.chargingSource}></Element>
                    </div>
                    <Divider className={classes.divider} />
                    <div className="data-row">
                        {createBatteryElement()}
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