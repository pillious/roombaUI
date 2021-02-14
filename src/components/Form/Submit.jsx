import React from "react";
import { makeStyles } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import "./form.css";

const useStyles = makeStyles({
    btnStyle: {
        backgroundColor: props => props.bgColor,
        color: props => props.textColor,
        "&:hover": {
            backgroundColor: props => props.bgColorHover,
        },
    },
});

function Submit(props) {

    const {btnStyle} = useStyles(props);

    function handleSubmit(command) {
        props.onSubmit(command);
    }

    return (
        <div className="submitButtonWrapper">
            <Button className={btnStyle} onClick={() => handleSubmit(props.command)} variant="contained" size="small">{props.label}</Button>
        </div>
    );
}

export default Submit;