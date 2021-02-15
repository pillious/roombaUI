import axios from "axios";

/**
 * parse incoming raw data
 * @param {*} rawDataStr raw data coming from websocket event as a string
 */
export function parseData(rawDataStr) {
    var data = [];
    try {
        var rawDataJson = JSON.parse(rawDataStr);

        if (rawDataJson) {
            var keys = Object.keys(rawDataJson);
            var values = Object.values(rawDataJson);

            for (let i = 0; i < keys.length; i++) {
                let obj = {};
                obj["name"] = keys[i];
                obj["value"] = values[i].toString();
                data.push(obj);
            }
        }
    } catch (err) {
        console.log(err);
    }

    var sortedData = splitData(data);  
    return sortedData;
}

// split the data into header & table data
function splitData(data) {

    var tableData = {};
    var headerData = {};

    // these are the values use in the header
    var forHeader = ["isAlive", "oiMode", "isHomeBase", "voltage", "current", "temperature", "batteryCharge", "batteryCapacity"];

    for (let i = 0; i < data.length; i++) {
        if (forHeader.includes(data[i].name)) {
            headerData[data[i].name] = data[i].value;
        }
        else {
            tableData[data[i].name] = data[i].value;
        }
    }

    // console.log(tableData);

    return {"tableData": tableData, "headerData": headerData};
}

export async function toggleLight(command) {
        // var result = await axios.post("http://192.168.1.106:3000/api", {"command": command});
        // console.log(result.data);

        console.log("light toggled... (temp): " + command);
        // return result.data;
}

export async function sendCommand(command) {
    console.log("submitting command: " + command);
    // var result = await axios.post("http://192.168.1.106:3000/api", {"command": command});
    // console.log(result.data);

    // return result;
}