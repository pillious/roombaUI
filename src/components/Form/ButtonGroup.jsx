import React from "react";
import Submit from "./Submit";
import "./form.css"

function ButtonGroup(props) {

    function handleSubmit(command) {
        props.onClick(command);
    }

    return (
        <div className="btnGroup">
            <Submit onSubmit={handleSubmit} command="RESET" label="RESET" color="primary"></Submit>
            <Submit onSubmit={handleSubmit} command="DOCK" label="DOCK" color="primary"></Submit>
            <Submit onSubmit={handleSubmit} command="CLEAN" label="CLEAN" color="primary"></Submit>
            <Submit onSubmit={handleSubmit} command="FULL" label="FULL" color="primary"></Submit>
            <Submit onSubmit={handleSubmit} command="PASSIVE" label="PASSIVE" color="primary"></Submit>
            <Submit onSubmit={handleSubmit} command="SAFE" label="SAFE" color="primary"></Submit>
            <Submit onSubmit={handleSubmit} command="OFF" label="OFF" color="primary"></Submit>
            <Submit onSubmit={handleSubmit} command="WAKEUP" label="WAKEUP" color="primary"></Submit>
        </div>        
    );
}

export default ButtonGroup;