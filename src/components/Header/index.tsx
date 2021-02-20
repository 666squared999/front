import { Button } from "@material-ui/core";
import React, { FC } from "react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import {
    ABOUT_PATH,
    LANDING_PATH,
    LOGIN_PATH,
    Router,
    SEARCH_PATH,
    SIGNIN_PATH,
} from "../Router";
import "./style.scss";

export const Header = () => {
    return (
        <div className="Header">
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
        </div>
    );
};
