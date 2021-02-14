import React from "react";
import {useState, useEffect} from "react";
import Input from "./Input";
import Submit from "./Submit";
import Toggle from "./Toggle";
import ButtonGroup from "./ButtonGroup";
import * as api from "../../services/api";

function Form() {

    const [inputValue, setInputValue] = useState("");
    const [isLightOn, setIsLightOn] = useState(false);

    function handleSubmit(command) {
        if (command === "custom") {
            api.sendCommand(inputValue);
            setInputValue("");
        }
        else {
            api.sendCommand(command);
        }
    }

    useEffect(() => {
        var command = isLightOn ? "ON" : "OFF";
        api.toggleLight(command);
    }, [isLightOn]);

    return (
        <div>
            <div>
                <Input value={inputValue} onChange={(value) => setInputValue(value)}></Input>
                <Submit onSubmit={handleSubmit} command="custom" label="send" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            </div>
            <Toggle onToggle={() => setIsLightOn(!isLightOn)} checked={isLightOn} value="on"></Toggle>
            <ButtonGroup onClick={handleSubmit}></ButtonGroup>
        </div>
    );

}

export default Form;