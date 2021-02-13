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

    function onSubmit(e) {
        e.preventDefault();
        api.sendCommand(inputValue);
        setInputValue("");
    }

    useEffect(() => {
        var command = isLightOn ? "ON" : "OFF";
        api.toggleLight(command);
    }, [isLightOn]);

    return (
        <div>
            <div>
                <Input value={inputValue} onChange={(value) => setInputValue(value)}></Input>
                <Submit onSubmit={onSubmit} command="test" text="send" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            </div>
            <Toggle onToggle={() => setIsLightOn(!isLightOn)} checked={isLightOn} value="on"></Toggle>
            <ButtonGroup onClick={(command) => console.log(command)}></ButtonGroup>
        </div>
    );

}

export default Form;