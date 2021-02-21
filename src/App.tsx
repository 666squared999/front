import React from "react";
import "./assets/style.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Router } from "./components/Router";
import { Footer } from "./components/Footer";
import { AuthContextProvider, useAuthState } from "./store/AuthContext";

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
    const auth = useAuthState();

    return (
        <div className="App">
            <ThemeProvider theme={theme}>
                <AuthContextProvider value={auth}>
                    <Router />
                    <Footer />
                </AuthContextProvider>
            </ThemeProvider>
        </div>
    );
}

export default App;
