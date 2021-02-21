import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { About } from "../../pages/About";
import { Home } from "../../pages/Home";
import { Landing } from "../../pages/Landing";
import { Login } from "../../pages/Login";
import { SignIn } from "../../pages/SignIn";
import { Header } from "../Header";
import { Logo } from "../Logo";
import "./style.scss";

export const LANDING_PATH = "/";
export const SEARCH_PATH = "/search";
export const ABOUT_PATH = "/about";
export const LOGIN_PATH = "/login";
export const SIGNIN_PATH = "/signin";
export const HOME_PAGE = "/home";

export const Router: FC = () => {
    return (
        <BrowserRouter>
            <Header>
                <Link to={LANDING_PATH}>
                    <Logo />
                </Link>
                <nav className="Router">
                    <ul
                        style={{
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}>
                        <li>
                            <Link to={SEARCH_PATH} className="link">
                                SEARCH
                            </Link>
                        </li>
                        <li>
                            <Link to={ABOUT_PATH} className="link">
                                ABOUT
                            </Link>
                        </li>
                        <li className="Auth">
                            <Link to={LOGIN_PATH} className="link auth">
                                LOGIN
                            </Link>
                        </li>
                        <li>
                            <Link to={SIGNIN_PATH} className="link auth">
                                <Button
                                    style={{ fontSize: "1rem" }}
                                    variant="contained"
                                    color="secondary"
                                    size="small">
                                    Sign In
                                </Button>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </Header>
            <Switch>
                <Route exact path={LANDING_PATH}>
                    <Landing />
                </Route>
                <Route path={SEARCH_PATH}></Route>
                <Route path={ABOUT_PATH}>
                    <About />
                </Route>
                <Route path={LOGIN_PATH}>
                    <Login />
                </Route>
                <Route path={SIGNIN_PATH}>
                    <SignIn />
                </Route>
                <Route path={HOME_PAGE}>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
