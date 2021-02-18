import React from "react";
import "./assets/style.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#45190E",
        },
        secondary: {
            main: "#FF7306",
        },
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>{}</ThemeProvider>
        </div>
    );
}

export default App;
