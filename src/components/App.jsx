import React, {useState, useEffect} from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Form from "./Form/Form";
import Table from "./Table/Table";
import "./App.css";
import * as api from "../services/api";

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"Montserrat", sans-serif`,
  }
});

function App() {

  const [data, setData] = useState(
    [{name: "Reading 1", value: 10}, {name: "Reading 2", value: 35}, {name: "Reading 3", value: -43}, {name: "Reading 4", value: 481}]
  );

  // runs once to initialize websocket.
  useEffect(() => {
    const ws = new WebSocket("ws://192.168.1.106:8888");
    ws.onopen = () => console.log("ws opened.");
    ws.onclose = () => console.log("ws closed.");
    ws.onmessage = e => updateData(e);
  }, []);

  /**
   * handle incoming websocket event
   * @param {*} event socket event 
   */
  function updateData(e) {
    var result = api.parseData(e.data);
    setData(result);
  }

  /**
   * Handle the on-click button from body component.
   * This is where the HTTP:POST will be handled.
   */
  function handleSubmit(command) {
    console.log("Handle Submit: " + command);
  }

  return (
    <MuiThemeProvider theme={THEME}>
      <div className="body">
        <Form onSubmit={handleSubmit}></Form>
        <Table data={data}></Table>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
