import React, { FC } from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import { About } from "../../pages/About";
import { Home } from "../../pages/Home";
import { Landing } from "../../pages/Landing";
import { Login } from "../../pages/Login";
import { Search } from "../../pages/Search";
import { Signin } from "../../pages/SignIn";
import { Header } from "../Header";
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
            <Header />
            <Switch>
                <Route exact path={LANDING_PATH}>
                    <Landing />
                </Route>
                <Route path={SEARCH_PATH}>
                    <Search />
                </Route>
                <Route path={ABOUT_PATH}>
                    <About />
                </Route>
                <Route path={LOGIN_PATH}>
                    <Login />
                </Route>
                <Route path={SIGNIN_PATH}>
                    <Signin />
                </Route>
                <Route path={HOME_PAGE}>
                    <Home />
                </Route>
            </Switch>
        </BrowserRouter>
    );
};
