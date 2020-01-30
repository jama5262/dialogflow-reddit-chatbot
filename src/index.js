import React from 'react';
import ReactDOM from 'react-dom';
import App from "./App.jsx";
import "./styles/index.css"
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core';
import * as serviceWorker from './serviceWorker';

const theme = createMuiTheme({
  palette: {
    primary: {
      main: "#FF4500",
      dark: "#FF4500",
    }
  }
})

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />
  </MuiThemeProvider>,
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
