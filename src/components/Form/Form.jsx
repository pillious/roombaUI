import React from "react";
import {useState, useEffect} from "react";
import axios from "axios";
import Input from "./Input";
import Submit from "./Submit";
import Toggle from "./Toggle";

// POST: {'command': INPUT_VALUE}

function Form() {

    const [inputValue, setInputValue] = useState("");
    const [updateDataState, setUpdateDataState] = useState(false);
    const [isLightOn, setIsLightOn] = useState(false);

    function onChange(value) {
        setInputValue(value);
    }

    async function onSubmit(e) {
        e.preventDefault();

        console.log("submitting: " + inputValue);
        var result = await axios.post("http://192.168.1.106:3000/api", {"command": inputValue});
        console.log(result.data);

        onChange("");
    }

    function toggleLightState() {
        setIsLightOn(!isLightOn);
    }

    useEffect(async () => {
        console.log("isLightOn: " +  isLightOn); 

        var command = isLightOn ? "ON" : "OFF";

        var result = await axios.post("http://192.168.1.106:3000/api", {"command": command});
        console.log(result.data);

    }, [isLightOn]);

    return (
        <div>
            <form>
                <Input value={inputValue} onChange={onChange}></Input>
                <Submit onSubmit={onSubmit}></Submit>
            </form>
            <Toggle onToggle={toggleLightState} checked={isLightOn} value="on" color="primary"></Toggle>
        </div>
    );

}

export default Form;