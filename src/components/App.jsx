import React, {useState, useEffect} from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Header from "./Header/Header";
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

  const [tableData, setTableData] = useState([]);
  const [headerData, setHeaderData] = useState([]);

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
    setTableData(result.tableData);
    setHeaderData(result.headerData);
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
      <Header data={headerData}></Header>
      <div className="body">
        <Form onSubmit={handleSubmit}></Form>
        <Table data={tableData}></Table>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
