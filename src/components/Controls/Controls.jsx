import React, {useState, useRef, useEffect, useCallback} from "react";
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

    // const [speedPercentage, setSpeedPercentage] = useState(40);
    const speedPercentage = useRef(40);
    const radius = useRef(0);
    const brushPercentage = useRef(40);
    const sideBrushPercentage = useRef(40);
    const vacPercentage = useRef(40);

    // 1001 - forward btn, 1002 - left button, 1003 - back button, 1004 - right button
    // const validKeys = [87, 65, 83, 68, 38, 37, 40, 39, 1001, 1002, 1003, 1004];
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

    function setNewSpeed(speed) {
        speedPercentage.current = speed;
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
                <KeyboardArrowUpIcon />
              </IconButton>

              <IconButton
                color="secondary"
                onMouseDown={() => onKeyDown("BtnLeft")}
                onMouseUp={() => onKeyUp("BtnLeft")}
                onTouchStart={() => onKeyDown("BtnLeft")}
                onTouchEnd={() => onKeyUp("BtnLeft")}
              >
                <KeyboardArrowRightIcon />
              </IconButton>

              <IconButton
                color="secondary"
                onMouseDown={() => onKeyDown("BtnDown")}
                onMouseUp={() => onKeyUp("BtnDown")}
                onTouchStart={() => onKeyDown("BtnDown")}
                onTouchEnd={() => onKeyUp("BtnDown")}
              >
                <KeyboardArrowDownIcon />
              </IconButton>

              <IconButton
                color="secondary"
                onMouseDown={() => onKeyDown("BtnRight")}
                onMouseUp={() => onKeyUp("BtnRight")}
                onTouchStart={() => onKeyDown("BtnRight")}
                onTouchEnd={() => onKeyUp("BtnRight")}
              >
                <KeyboardArrowLeftIcon />
              </IconButton>

            </div>
          </div>
          <Speed onSpeedChange={(speed) => setNewSpeed(speed)} />
          <PWM></PWM>
        </div>
      </div>
    );
}

export default Controls;
