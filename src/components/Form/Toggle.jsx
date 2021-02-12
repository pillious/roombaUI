import React from "react";
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';

function Toggle(props) {

    function handleChange() {
        props.onToggle();
    }

    return (
        <div>
            <FormControlLabel
                control={<Switch checked={props.checked} onChange={handleChange}/>}
                label="Light On"
            />
        </div>
    );
}

export default Toggle;