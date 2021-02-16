import React, {useState, useEffect, useCallback} from "react";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';
import { IconButton } from "@material-ui/core";
import Arrow from "./Arrow";
import Speed from "./Speed";
import PWM from "./PWM";
import "./controls.css";
import * as api from "../../services/api";


function Controls(props) {
    const [doForward, setDoForward] = useState(false);
    const [doBackward, setDoBackward] = useState(false);
    const [doLeft, setDoLeft] = useState(false);
    const [doRight, setDoRight] = useState(false);

    const [speedPercentage, setSpeedPercentage] = useState(40);
    const radius = 0;
    const brushPercentage = 40;
    const sideBrushPercentage = 40;
    const vacPercentage = 40;

    var validKeys = [87, 65, 83, 68, 38, 37, 40, 39];
    var keyHeld = false;
    var lastKeyPressedName = "";
    var lastKeyPressedCode = "";

    function onKeyDown(e) {
        let keyCode = e.keyCode;
        if (!keyHeld && keyCode !== lastKeyPressedCode && validKeys.includes(keyCode)) {
            var key = determineActiveKey(keyCode);
            sendMovementCommand(key);

            keyHeld = true;
            lastKeyPressedName = key;
            lastKeyPressedCode = keyCode;

        }
    }

    // const onKeyDown = useCallback((e) => {
    //     let keyCode = e.keyCode;
    //     if (!keyHeld && keyCode !== lastKeyPressedCode && validKeys.includes(keyCode)) {
    //         var key = determineActiveKey(keyCode);
    //         props.onMovementChange(key, speedPercentage, "START");

    //         keyHeld = true;
    //         lastKeyPressedName = key;
    //         lastKeyPressedCode = keyCode;
    //     }
    // }, [speedPercentage]);

    function onKeyUp(e) {
        let keyCode = e.keyCode;
        if (keyHeld && keyCode === lastKeyPressedCode && validKeys.includes(keyCode)) {
            stopMotion();
            keyHeld = false;
            lastKeyPressedName = "";
            lastKeyPressedCode = -1;
        }
    }

    function sendMovementCommand(key) {
        let command;
        if (key === "FORWARD") {
            command = `DRIVE ${speedPercentage} ${radius}`;
        }
        else if (key === "BACKWARD") {
            command = `DRIVE ${speedPercentage * -1} ${radius}`;
        }
        else if (key === "LEFT") {
            command = `DRIVE ${speedPercentage} 1`;
        }
        else if (key === "RIGHT") {
            command = `DRIVE ${speedPercentage} -1`;
        }

        if (command) {
            api.sendCommand(command);
        }
    }

    function stopMotion() {
        api.sendCommand("DRIVE 0 0");
    }

    // const onKeyUp = useCallback((e) => {
    //     let keyCode = e.keyCode;
    //     if (keyHeld && keyCode === lastKeyPressedCode && validKeys.includes(keyCode)) {
    //         props.onMovementChange(lastKeyPressedName, speedPercentage, "STOP");
    //         keyHeld = false;
    //         lastKeyPressedName = "";
    //         lastKeyPressedCode = -1;
    //     }
    // }, [speedPercentage])

    // Check if WASD or arrow key was pressed
    function determineActiveKey(keyCode) {
        switch (keyCode) {
            case 87:
            case 38:
                return "FORWARD";
            case 65:
            case 37:
                return "LEFT";
            case 83:
            case 40:
                return "BACKWARD";
            case 68:
            case 39:
                return "RIGHT";
        }
    }

    // useEffect(() => {
    //     window.removeEventListener('keydown', (e) => onKeyDown(e));
    //     window.removeEventListener('keyup', (e) => onKeyUp(e));

    //     window.addEventListener('keydown', (e) => onKeyDown(e));
    //     window.addEventListener('keyup', (e) => onKeyUp(e));

    //     return () => {
    //         window.removeEventListener('keydown', (e) => onKeyDown(e));
    //         window.removeEventListener('keyup', (e) => onKeyUp(e));
    //     };
    // }, [speedPercentage, onKeyUp, onKeyDown]);

    useEffect(() => {
        window.addEventListener('keydown', (e) => onKeyDown(e));
        window.addEventListener('keyup', (e) => onKeyUp(e));

        return () => {
            window.removeEventListener('keydown', (e) => onKeyDown(e));
            window.removeEventListener('keyup', (e) => onKeyUp(e));
        };
    }, []);

    return (
        <div className="container">
            <div className="controlsWrapper">
                <div className="ArrowKeysWrapper">
                    <div className="center" >                        
                        {/* <Arrow direction="Forward" isDisabled={false} icon={<KeyboardArrowUpIcon />}></Arrow>
                        <Arrow direction="Right" isDisabled={false} icon={<KeyboardArrowRightIcon />}></Arrow>
                        <Arrow direction="Backward" isDisabled={false} icon={<KeyboardArrowDownIcon />}></Arrow>
                        <Arrow direction="Left" isDisabled={false} icon={<KeyboardArrowLeftIcon />}></Arrow> */}
                        <IconButton color="secondary"><KeyboardArrowUpIcon /></IconButton>
                        <IconButton color="secondary"><KeyboardArrowRightIcon /></IconButton>
                        <IconButton color="secondary"><KeyboardArrowDownIcon /></IconButton>
                        <IconButton color="secondary"><KeyboardArrowLeftIcon /></IconButton>
                    </div>
                </div>
                <Speed onSpeedChange={(speed) => setSpeedPercentage(speed)} />
                <PWM></PWM>
            </div>
        </div>
    );
}

export default Controls;