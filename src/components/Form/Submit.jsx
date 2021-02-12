import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import "./form.css";

const SubmitButton = withStyles({
    root: {
        backgroundColor: "#ffb300",
        color: "#fff",
        "&:hover": {
            backgroundColor: "#ffa000",
        },
    },
})(Button);

function Submit(props) {

    function handleSubmit(e) {
        props.onSubmit(e);
    }

    return (
        <div className="submitButtonWrapper">
            <SubmitButton type="submit" onClick={handleSubmit} variant="contained" size="large">Send</SubmitButton>
        </div>
    );
}

export default Submit;