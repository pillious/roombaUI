import React from "react";
import {useState, useEffect} from "react";
import Input from "./Input";
import Submit from "./Submit";
import Toggle from "./Toggle";
import ButtonGroup from "./ButtonGroup";
import * as api from "../../services/api";

function Form(props) {

    // const [inputValue, setInputValue] = useState("");
    // const [isLightOn, setIsLightOn] = useState(false);

    // function handleSubmit(command) {
    //     props.onSubmit(command)
    // }

    useEffect(() => {
        var command = props.isLightOn ? "ON" : "OFF";
    }, [props.isLightOn]);

    return (
        <div>
            <div>
                <Input value={props.inputValue} onChange={(value) => props.onInputChange(value)}></Input>
                <Submit onSubmit={(command) => props.onSubmit(command)} command="custom" label="send" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            </div>
            <Toggle onToggle={() => props.onLightToggle()} checked={props.isLightOn} value="on"></Toggle>
            <ButtonGroup onClick={(command) => props.onSubmit(command)}></ButtonGroup>
        </div>
    );

}

export default Form;