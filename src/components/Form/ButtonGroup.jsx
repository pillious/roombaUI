import React from "react";
import Submit from "./Submit";
import "./form.css"

function ButtonGroup(props) {

    return (
        <div className="btnGroup">
            <Submit onSubmit={() => props.onClick(1)} text="test1" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test2" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test3" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test4" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test5" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test6" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test7" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test8" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test9" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
            <Submit onSubmit={() => props.onClick(1)} text="test10" textColor="#fff" bgColor="#ffb300" bgColorHover="#ffa000"></Submit>
        </div>        
    );
}

export default ButtonGroup;