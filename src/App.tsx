import React from "react";
import "./assets/style.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Header } from "./components/Header";

const theme = createMuiTheme({
    palette: {
        primary: {
            main: "#943435",
        },
        secondary: {
            main: "#32237e",
        },
    },
});

function App() {
    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <Header />
            </ThemeProvider>
        </div>
    );
}

export default App;
