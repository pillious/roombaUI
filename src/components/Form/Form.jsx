import React from "react";
import Input from "./Input";
import Submit from "./Submit";
import ButtonGroup from "./ButtonGroup";

function Form(props) {

    return (
        <div className="formWrapper">
            <div className="customWrapper">
                <Input value={props.inputValue} onChange={(value) => props.onInputChange(value)}></Input>
                <Submit onSubmit={(command) => props.onSubmit(command)} command="custom" label="send" color="primary"></Submit>
            </div>
            <div>
                <ButtonGroup onClick={(command) => props.onSubmit(command)}></ButtonGroup>
            </div>
        </div>
    );

}

export default Form;