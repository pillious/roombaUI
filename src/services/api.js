import axios from "axios";

/**
 * parse incoming raw data
 * @param {*} rawDataStr raw data coming from websocket event as a string
 */
export function parseData(rawDataStr) {
    // console.log("New Data: " + rawDataStr);
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

            //data = [{name: "New 1", value: 534}, {name: "New 2", value: 75}, {name: "New 3", value: 343}, {name: "New 4", value: -1233}]
        }
    } catch (err) {

    }

    return data;
}

export async function toggleLight(command) {
        // var result = await axios.post("http://192.168.1.106:3000/api", {"command": command});
        // console.log(result.data);

        console.log("light toggled... (temp)");
        // return result.data;
}

export async function sendCommand(command) {
    console.log("submitting command: " + command);
    var result = await axios.post("http://192.168.1.106:3000/api", {"command": command});
    console.log(result.data);

    return result;
}