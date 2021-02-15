import React, {useState, useEffect} from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core";
import "./header.css";
import Element from "./Element";

const useStyles = makeStyles((theme) => ({
    paperStyle: {
        padding: theme.spacing(1),  
    }
}));

function Card(props) {
    const {paperStyle} = useStyles();

    const [elements, setElements] = useState([]);

    useEffect(() => {
        var arr = [];
        props.data.forEach(elem => {
            arr.push(<Element key={elem.name} label={elem.name} value={elem.value}></Element>)
        })
        setElements(arr);
    }, [props.data]);

    return (
        <Paper className={paperStyle}>
            {elements}
        </Paper>
    );
}

export default Card;