import React from "react";
import Submit from "./Submit";
import "./form.css"

function ButtonGroup(props) {

    function handleSubmit(command) {
        props.onClick(command);
    }

    return (
        <div className="btnGroup">
            <Submit onSubmit={handleSubmit} command="RESET" label="RESET" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={handleSubmit} command="DOCK" label="DOCK" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={handleSubmit} command="CLEAN" label="CLEAN" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={handleSubmit} command="FULL" label="FULL" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={handleSubmit} command="PASSIVE" label="PASSIVE" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={handleSubmit} command="SAFE" label="SAFE" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={handleSubmit} command="OFF" label="OFF" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={handleSubmit} command="WAKEUP" label="WAKEUP" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
        </div>        
    );
}

export default ButtonGroup;