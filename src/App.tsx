import React from "react";
import "./assets/style.scss";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Search } from "./pages/Search";

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
            <ThemeProvider theme={theme}>
                <Router>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/search">Search</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/search">
                            <Search />
                        </Route>
                    </Switch>
                </Router>
            </ThemeProvider>
        </div>
    );
}

export default App;
