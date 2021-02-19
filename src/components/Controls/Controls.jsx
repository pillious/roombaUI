import React, {useRef} from "react";
import {makeStyles} from "@material-ui/core/styles"; 
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import SpeedIcon from '@material-ui/icons/Speed';
import { IconButton, Divider, Button, Tooltip  } from "@material-ui/core";
import HorizontalSlider from "./HorizontalSlider";
import "./controls.css";
import * as api from "../../services/api";

const useStyles = makeStyles({
    divider: {
        margin: "6px 0",
    },
    arrowIcon: {
        fontSize: "2rem",
    }
});

function Controls(props) {
    const classes = useStyles();

    const speedPercentage = useRef(40);
    const radius = useRef(0);
    const brushPercentage = useRef(50);
    const sideBrushPercentage = useRef(50);
    const vacPercentage = useRef(50);

    const validKeys = ["KeyW", "KeyA", "KeyS", "KeyD", "ArrowUp", "ArrowLeft", "ArrowDown", "ArrowRight", "BtnUp", "BtnLeft", "BtnDown", "BtnRight"];
    const isKeyHeld = useRef(false);
    const currentDirection = useRef("");
    const currentKeyPressed = useRef(NaN);

    function onKeyDown(key) {
        if (!isKeyHeld.current && key !== currentKeyPressed.current && validKeys.includes(key)) {
            console.log(key)
            var direction = determineDirection(key);
            sendMovementCommand(direction);

            isKeyHeld.current = true;
            currentDirection.current = direction;
            currentKeyPressed.current = key;

        }
    }

    function onKeyUp(key) {
        if (isKeyHeld.current && key === currentKeyPressed.current && validKeys.includes(key)) {
            stopMotion();
            isKeyHeld.current = false;
            currentDirection.current = "";
            currentKeyPressed.current = -1;
        }
    }

    function sendMovementCommand(direction) {
        let command;
        if (direction === "FORWARD") {
            command = `DRIVE ${speedPercentage.current} ${radius.current}`;
        }
        else if (direction === "BACKWARD") {
            command = `DRIVE -${speedPercentage.current} ${radius.current}`;
        }
        else if (direction === "LEFT") {
            command = `DRIVE ${speedPercentage.current} 1`;
        }
        else if (direction === "RIGHT") {
            command = `DRIVE ${speedPercentage.current} -1`;
        }

        if (command) {
            api.sendCommand(command);
        }
    }

    function stopMotion() {
        api.sendCommand("DRIVE 0 0");
    }

    // Check if WASD/arrow key/button was pressed
    function determineDirection(key) {
        switch (key) {
            case "KeyW":
            case "ArrowUp":
            case "BtnUp":
                return "FORWARD";
            case "KeyA":
            case "ArrowLeft":
            case "BtnLeft":
                return "LEFT";
            case "KeyS":
            case "ArrowDown":
            case "BtnDown":
                return "BACKWARD";
            case "KeyD":
            case "ArrowRight":
            case "BtnRight":
                return "RIGHT";
        }
    }

    function sendPWM() {
        console.log({P: brushPercentage.current, W: sideBrushPercentage.current, M: vacPercentage.current});
        api.sendCommand(`PWM ${brushPercentage.current} ${sideBrushPercentage.current} ${vacPercentage.current}`);
    }

    function sendEMO() {
        api.sendCommand("EMO");
    }

    return (
    <div className="container" tabIndex="0" onKeyDown={(e) => onKeyDown(e.code)} onKeyUp={(e) => onKeyUp(e.code)}>
        <div className="controlsWrapper">
            <div className="ArrowKeysWrapper">
                <div className="center">

                <IconButton
                    color="secondary"
                    onMouseDown={() => onKeyDown("BtnUp")}
                    onMouseUp={() => onKeyUp("BtnUp")}
                    onTouchStart={() => onKeyDown("BtnUp")}
                    onTouchEnd={() => onKeyUp("BtnUp")}
                >
                    <KeyboardArrowUpIcon className={classes.arrowIcon} />
                </IconButton>

                <IconButton
                    color="secondary"
                    onMouseDown={() => onKeyDown("BtnRight")}
                    onMouseUp={() => onKeyUp("BtnRight")}
                    onTouchStart={() => onKeyDown("BtnRight")}
                    onTouchEnd={() => onKeyUp("BtnRight")}
                >
                    <KeyboardArrowRightIcon className={classes.arrowIcon} />
                </IconButton>

                <IconButton
                    color="secondary"
                    onMouseDown={() => onKeyDown("BtnDown")}
                    onMouseUp={() => onKeyUp("BtnDown")}
                    onTouchStart={() => onKeyDown("BtnDown")}
                    onTouchEnd={() => onKeyUp("BtnDown")}
                >
                    <KeyboardArrowDownIcon className={classes.arrowIcon} />
                </IconButton>

                <IconButton
                    color="secondary"
                    onMouseDown={() => onKeyDown("BtnLeft")}
                    onMouseUp={() => onKeyUp("BtnLeft")}
                    onTouchStart={() => onKeyDown("BtnLeft")}
                    onTouchEnd={() => onKeyUp("BtnLeft")}
                >
                    <KeyboardArrowLeftIcon className={classes.arrowIcon} />
                </IconButton>

                </div>
            </div>
            <div className="sliderWrapper">
                <HorizontalSlider onSliderChange={(speed) => {speedPercentage.current = speed}} label={<Tooltip title="Speed (%)" placement="top" arrow><SpeedIcon /></Tooltip>} minVal={0} maxVal={100} step={20} defaultVal={speedPercentage.current}/>
                <Divider orientation="horizontal" className={classes.divider} />
                <HorizontalSlider onSliderChange={(val) => {brushPercentage.current = val}} label={<Tooltip title="Main Brush Speed" placement="top" arrow><span>P</span></Tooltip>} minVal={0} maxVal={100} step={25} defaultVal={brushPercentage.current}/>
                <HorizontalSlider onSliderChange={(val) => {sideBrushPercentage.current = val}} label={<Tooltip title="Side Brush Speed" placement="top" arrow><span>W</span></Tooltip>} minVal={0} maxVal={100} step={25} defaultVal={sideBrushPercentage.current}/>
                <HorizontalSlider onSliderChange={(val) => {vacPercentage.current = val}} label={<Tooltip title="Vacuum Power" placement="top" arrow><span>M</span></Tooltip>} minVal={0} maxVal={100} step={25} defaultVal={vacPercentage.current}/>
                <div className="buttonsWrapper">
                    <Button variant="contained" color="primary" size="medium" onClick={sendPWM}>Set PWM</Button>
                    <Button variant="contained" color="secondary" size="medium" onClick={sendEMO}>Stop</Button>
                </div>
            </div>
        </div>
    </div>
    );
}

export default Controls;
