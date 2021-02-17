import React from "react";
import Button from "@material-ui/core/Button";
import "./form.css";

function Submit(props) {

    function handleSubmit(command) {
        props.onSubmit(command);
    }

    return (
        <div className="submitButtonWrapper">
            <Button color={props.color} onClick={() => handleSubmit(props.command)} variant="contained" size="small">{props.label}</Button>
        </div>
    );
}

export default Submit;