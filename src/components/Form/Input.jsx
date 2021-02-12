import React from "react";
import TextField from "@material-ui/core/TextField";

function Input(props) {

    function handleChange(e) {
        props.onChange(e.target.value);
    }

    return (
        <TextField label="Command" type="search" variant="outlined" size="small" onChange={handleChange} value={props.value}/>
    );
}

export default Input;