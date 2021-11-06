import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#f44336",
        },
        secondary: {
            main: "#ffc400",
        },
    },
});

ReactDOM.render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <App />
        </ThemeProvider>
    </React.StrictMode>,
    document.getElementById("root")
);
