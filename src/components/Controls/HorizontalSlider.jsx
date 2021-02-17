import React, {useState, useEffect} from "react";
import {makeStyles} from "@material-ui/core/styles";
import Grid from '@material-ui/core/Grid';
import Slider from '@material-ui/core/Slider';
import Input from '@material-ui/core/Input';

const useStyles = makeStyles({
    root: {
      width: 250,
      height: 34,
      fontFamily: ["Roboto"],
    },
    input: {
      width: 42,
    },
});

function HorizontalSlider(props) {
    const classes = useStyles();

    const [value, setValue] = useState(props.defaultVal);

    const handleSliderChange = (event, newValue) => {
        setValue(newValue);
    };
    
    const handleInputChange = (event) => {
        setValue(event.target.value === '' ? '' : Number(event.target.value));
    };

    const handleBlur = () => {
        if (value < 0) {
          setValue(0);
        } else if (value > props.maxVal) {
          setValue(100);
        }
    };

    useEffect(() => {
        props.onSliderChange(value);
      }, [value]);

    return (
        <div className="PWM-container">
            <div className={classes.root}>
                <Grid container spacing={2} alignItems="center">
                    <Grid item>{props.label}</Grid>
                    <Grid item xs>
                    <Slider
                        value={typeof value === 'number' ? value : 0}
                        onChange={handleSliderChange}
                        aria-labelledby="input-slider"
                        step={props.step}

                    />
                    </Grid>
                    <Grid item>
                    <Input
                        className={classes.input}
                        value={value}
                        margin="dense"
                        onChange={handleInputChange}
                        onBlur={handleBlur}
                        inputProps={{
                        step: props.step,
                        min: props.minVal,
                        max: props.maxVal,
                        type: 'number',
                        'aria-labelledby': 'input-slider',
                        }}
                    />
                    </Grid>
                </Grid>
            </div>
        </div>
    );
}

export default HorizontalSlider;