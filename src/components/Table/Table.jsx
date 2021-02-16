import React from "react";
import {useState, useEffect} from "react";
import { makeStyles } from '@material-ui/core/styles';
import Element from "./Element";
import "./table.css";

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    tableWrapper: {
    //   minWidth: 365,
    //   maxWidth: 500,
    // minWidth: 740,
    // maxWidth: 500,
    // width: 300,
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    table: {
        minWidth: 370,
    }
});

function createData(name, value, boolean) {
    return { name, value, boolean };
}

function DataTable(props) {
    const classes = useStyles();

    const rows1 = [
        createData("Left Bumper", props.data.leftLightBumper, props.data.isLeftLightBumper),
        createData("Front Left Bumper", props.data.frontLeftLightBumper, props.data.isFrontLeftLightBumper),
        createData("Center Left Bumper", props.data.centerLeftLightBumper,props.data.isCenterLeftLightBumper),
        createData("Center Right Bumper", props.data.centerRightLightBumper, props.data.isCenterRightLightBumper),
        createData("Front Right Bumper", props.data.frontRightLightBumper, props.data.isFrontRightLightBumper),
        createData("Right Bumper", props.data.rightLightBumper, props.data.isRightLightBumper),

        createData("Left Bump", "-", props.data.isLeftBump),
        createData("Right Bump", "-", props.data.isRightBump),
        createData("Wheel Left Drop", "-", props.data.isWheelLeftDrop),
        createData("Wheel Right Drop", "-", props.data.isWheelRightDrop),

        createData("Left Cliff", props.data.cliffLeftSignal, props.data.isCliffLeft),
        createData("Front Left Cliff", props.data.cliffFrontLeftSignal, props.data.isCliffFrontLeft),
        createData("Front Right Cliff", props.data.cliffFrontRightSignal, props.data.isCliffFrontRight),
        createData("Right Cliff", props.data.cliffRightSignal, props.data.isCliffRight),
        createData("Wall", "-", props.data.isWall),
        createData("Virtual Wall", "-", props.data.isVirtualWall),
    ];

    const rows2 = [
        createData("Left Motor Current", props.data.leftMotorCurrent, props.data.isLeftWheelOverCurrent),
        createData("Right Motor Current", props.data.rightMotorCurrent, props.data.isRightWheelOverCurrent),
        createData("Main Brush Current", props.data.mainBrushCurrent, props.data.isMainBrushOverCurrent),
        createData("Side Brush Current", props.data.sideBrushCurrent, props.data.isSideBrushOverCurrent),

        createData("Velocity", props.data.requestedVelocity, "-"),
        createData("Radius", props.data.requestedRadius, "-"),
        createData("Left Velocity", props.data.requestedLeftVelocity, "-"),
        createData("Right Velocity", props.data.requestedRightVelocity, "-"),
        createData("Left Encoder Counts", props.data.leftEncoderCounts, "-"),
        createData("Right Encoder Counts", props.data.rightEncoderCounts, "-"),
        createData("Distance", props.data.distance, "-"),
        createData("Angle", props.data.angle, "-"),
    ];

    // const [elements, setElements] = useState([]);

    // useEffect(() => {
    //     updateElements()
    // }, [props.data]);

    // function updateElements() {
    //     let arr = [];

    //     props.data.forEach(elem => {
    //         arr.push(<Element key={elem.name} name={elem.name} value={elem.value}></Element>);
    //     })

    //     setElements(arr);
    // }

    return (
        <div className="tableWrapper">
            <div className={classes.tableWrapper}>
                <Paper elevation={5}>
                    <Table size="small" className={classes.table} aria-label="data table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Value</TableCell>
                            <TableCell align="right">Boolean</TableCell>

                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows1.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                            <TableCell align="right">{row.boolean}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Paper elevation={5}>                
                    <Table size="small" className={classes.table} aria-label="data table">
                        <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Value</TableCell>
                            <TableCell align="right">Boolean</TableCell>

                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows2.map((row) => (
                            <TableRow key={row.name}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                            <TableCell align="right">{row.boolean}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
            {/* <TableContainer component={Paper} className={classes.table}> */}



            {/* </TableContainer> */}
            </div>
        </div>
    );

}

export default DataTable;