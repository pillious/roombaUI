import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import "./table.css";
import CheckIcon from '@material-ui/icons/Check';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    tableWrapper: {
        display: "flex",
        flexWrap: "wrap",
        flexDirection: "row",
    },
    table: {
        width: 250,
    },
    tableRow: {
        "& .MuiTableCell-root": {
            padding: "6px 16px",
        }
    },
    blockIcon: {
        fontSize: 12,
    },
    checkIcon: {
        fontSize: 18,
    }
});

function DataTable(props) {
    const classes = useStyles();

    function createData(name, rawValue, rawBoolean) {
        let boolIcon = "-";
        let value = rawValue;

        if (rawBoolean === "true") {
            boolIcon = <CheckIcon className={classes.checkIcon} />;
        }
        else if (rawBoolean === "false") {
            boolIcon = "";
        }


    
        return { name, value, boolIcon};
    }

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

    return (
        <div className="tableWrapper">
            <div className={classes.tableWrapper}>
                <Paper elevation={5}>
                    <Table size="small" className={classes.table} aria-label="data table">
                        <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Value</TableCell>
                            <TableCell align="right"><CheckIcon className={classes.checkIcon}/></TableCell>

                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows1.map((row) => (
                            <TableRow key={row.name} className={classes.tableRow}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                            <TableCell align="right">{row.boolIcon}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
                <Paper elevation={5}>                
                    <Table size="small" className={classes.table} aria-label="data table">
                        <TableHead>
                        <TableRow className={classes.tableRow}>
                            <TableCell>Name</TableCell>
                            <TableCell align="right">Value</TableCell>
                            <TableCell align="right"><CheckIcon className={classes.checkIcon}/></TableCell>

                        </TableRow>
                        </TableHead>
                        <TableBody>
                        {rows2.map((row) => (
                            <TableRow key={row.name} className={classes.tableRow}>
                            <TableCell component="th" scope="row">
                                {row.name}
                            </TableCell>
                            <TableCell align="right">{row.value}</TableCell>
                            <TableCell align="right">{row.boolIcon}</TableCell>
                            </TableRow>
                        ))}
                        </TableBody>
                    </Table>
                </Paper>
            </div>
        </div>
    );

}

export default DataTable;