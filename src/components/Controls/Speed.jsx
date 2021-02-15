import React from "react";
import {makeStyles} from "@material-ui/core/styles"; 
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles({
    root: {
      height: 125,
    },
    sliderLabel: {
      paddingBottom: 5,
    },
});

function Speed(props) {
    const classes = useStyles();

    const marks = [
        {
          value: 0,
          label: '0%',
        },
        {
          value: 100,
          label: '100%',
        },
      ];
      
    return (
        <div className={classes.root}>
            <div className={classes.sliderLabel}>Speed</div>
            <Slider
            orientation="vertical"
            defaultValue={40}
            valueLabelDisplay="auto"
            onChangeCommitted={(event, value) => props.onSpeedChange(value)}
            min={0}
            max={100}
            step={20}
            marks={marks}
            />
        </div>
    );
}

export default Speed;