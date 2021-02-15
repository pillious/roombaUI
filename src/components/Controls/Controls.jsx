import React, {useState, useEffect, useCallback} from "react";
import Arrow from "./Arrow";
import Speed from "./Speed";
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowLeftIcon from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

function Controls(props) {
    const [doForward, setDoForward] = useState(false);
    const [doBackward, setDoBackward] = useState(false);
    const [doLeft, setDoLeft] = useState(false);
    const [doRight, setDoRight] = useState(false);

    const [speedPercentage, setSpeedPercentage] = useState(40);

    var validKeys = [87, 65, 83, 68, 38, 37, 40, 39];
    var keyHeld = false;
    var lastKeyPressedName = "";
    var lastKeyPressedCode = "";

    // function onKeyDown(e) {
    //     let keyCode = e.keyCode;
    //     if (!keyHeld && keyCode !== lastKeyPressedCode && validKeys.includes(keyCode)) {
    //         var key = determineActiveKey(keyCode);
    //         console.log(speedPercentage)
    //         props.onMovementChange(key, speedPercentage, "START");

    //         keyHeld = true;
    //         lastKeyPressedName = key;
    //         lastKeyPressedCode = keyCode;
    //     }
    // }

    const onKeyDown = useCallback((e) => {
        let keyCode = e.keyCode;
        if (!keyHeld && keyCode !== lastKeyPressedCode && validKeys.includes(keyCode)) {
            var key = determineActiveKey(keyCode);
            props.onMovementChange(key, speedPercentage, "START");

            keyHeld = true;
            lastKeyPressedName = key;
            lastKeyPressedCode = keyCode;
        }
    }, [speedPercentage]);

    // function onKeyUp(e) {
    //     let keyCode = e.keyCode;
    //     if (keyHeld && keyCode === lastKeyPressedCode && validKeys.includes(keyCode)) {
    //         props.onMovementChange(lastKeyPressedName, speedPercentage, "STOP");
    //         console.log(speedPercentage)
    //         keyHeld = false;
    //         lastKeyPressedName = "";
    //         lastKeyPressedCode = -1;
    //     }
    // }

    const onKeyUp = useCallback((e) => {
        let keyCode = e.keyCode;
        if (keyHeld && keyCode === lastKeyPressedCode && validKeys.includes(keyCode)) {
            props.onMovementChange(lastKeyPressedName, speedPercentage, "STOP");
            keyHeld = false;
            lastKeyPressedName = "";
            lastKeyPressedCode = -1;
        }
    }, [speedPercentage])

    // Check if WASD or arrow key was pressed
    function determineActiveKey(keyCode) {
        switch (keyCode) {
            case 87:
            case 38:
                return "Forward";
            case 65:
            case 37:
                return "Left";
            case 83:
            case 40:
                return "Backward";
            case 68:
            case 39:
                return "Right";
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
        <div>
            <Arrow direction="Forward" isDisabled={false} icon={<KeyboardArrowUpIcon />}></Arrow>
            <Arrow direction="Right" isDisabled={false} icon={<KeyboardArrowRightIcon />}></Arrow>
            <Arrow direction="Backward" isDisabled={false} icon={<KeyboardArrowDownIcon />}></Arrow>
            <Arrow direction="Left" isDisabled={false} icon={<KeyboardArrowLeftIcon />}></Arrow>
            <Speed onSpeedChange={(speed) => setSpeedPercentage(speed)} />
        </div>
    );
}

export default Controls;