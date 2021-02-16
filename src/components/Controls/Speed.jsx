import React from "react";
import {makeStyles} from "@material-ui/core/styles"; 
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
      height: 125,
      fontFamily: ["Roboto"],
    },
    sliderLabel: {
      paddingBottom: 5,
    },
});

function Speed(props) {
    const classes = useStyles();
      
    return (
        <div className={classes.root}>
            <div className={classes.sliderLabel}>Speed (%)</div>
            <Slider
            orientation="vertical"
            defaultValue={40}
            valueLabelDisplay="auto"
            onChangeCommitted={(event, value) => props.onSpeedChange(value)}
            min={0}
            max={100}
            step={20}
            />
        </div>
    );
}

export default Speed;