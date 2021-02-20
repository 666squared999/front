import React, { FC } from "react";
import "./style.scss";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Logo } from "../Logo";
import { Button } from "@material-ui/core";

export const LANDING_PATH = "/";
export const SEARCH_PATH = "/search";
export const ABOUT_PATH = "/about";
export const LOGIN_PATH = "/login";
export const SIGNIN_PATH = "/signin";
export const HOME_PAGE = "/home";

export const Router: FC = () => {
    return (
        <BrowserRouter>
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
            <Switch>
                <Route path={LANDING_PATH}></Route>
                <Route path={SEARCH_PATH}></Route>
                <Route path={ABOUT_PATH}></Route>
                <Route path={LOGIN_PATH}></Route>
                <Route path={SIGNIN_PATH}></Route>
                <Route path={HOME_PAGE}></Route>
            </Switch>
        </BrowserRouter>
    );
};
