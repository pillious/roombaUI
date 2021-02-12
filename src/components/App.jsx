import React from "react";
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import Form from "./Form/Form";
import Table from "./Table/Table";
import "./App.css";

const THEME = createMuiTheme({
  typography: {
   "fontFamily": `"Montserrat", sans-serif`,
  }
});

function App() {
  return (
    <MuiThemeProvider theme={THEME}>
      <div className="body">
        <Form></Form>
        <Table></Table>
      </div>
    </MuiThemeProvider>
  );
}

export default App;
