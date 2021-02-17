import React, {useState, useEffect} from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from "./Header/Header";
import Form from "./Form/Form";
import DataTable from "./Table/Table";
import Controls from "./Controls/Controls";
import Video from "./Video/Video";
import "./App.css";
import * as api from "../services/api";
import { Paper } from "@material-ui/core";

const THEME = createMuiTheme({
  palette: {
    type: "dark",
    typography: {
       "fontFamily": ['Roboto'],
    },
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#fff',
    },
  }
});

function App() {

  const [tableData, setTableData] = useState([]);
  const [headerData, setHeaderData] = useState([]);

  const [inputValue, setInputValue] = useState("");

  // runs once to initialize websocket.
  useEffect(() => {
    let ws;
    if (process.env.REACT_WS_PORT) {
      ws = new WebSocket(`ws://{process.env.REACT_APP_SERVERURL}:{process.env.REACT_WS_PORT}`);
    } else {
      ws = new WebSocket(`ws://{process.env.REACT_APP_SERVERURL}`);
    }
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
    setTableData(result.tableData);
    setHeaderData(result.headerData);
  }

  /**
   * Handle the on-click button from body component.
   * This is where the HTTP:POST will be handled.
   */
  function onSubmit(command) {
    if (command === "custom") {
      api.sendCommand(inputValue.toUpperCase());
      setInputValue("");
    }
    else {
      api.sendCommand(command.toUpperCase());
    }
  }

  // save the value of the custom command input
  function onInputChange(value) {
    setInputValue(value);
  }

  return (
    <MuiThemeProvider theme={THEME}>
      <Paper className="div-container" square>
        <div className="div-center">
          <div className="div-content">
            <Header data={headerData}></Header>
            <Form onSubmit={onSubmit} onInputChange={onInputChange} inputValue={inputValue}></Form>
            <div className="body">
              <DataTable data={tableData}></DataTable>
              <div className="rightWrapper">
                <Video></Video>
                <Controls></Controls>
              </div>
            </div>
          </div>
        </div>
      </Paper>
    </MuiThemeProvider>
  );
}

export default App;
