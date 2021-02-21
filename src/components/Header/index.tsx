import { Button } from "@material-ui/core";
import React, { FC, useMemo } from "react";
import { Logo } from "../Logo";
import { Link } from "react-router-dom";
import {
    ABOUT_PATH,
    HOME_PAGE,
    LANDING_PATH,
    LOGIN_PATH,
    SEARCH_PATH,
    SIGNIN_PATH,
} from "../Router";
import "./style.scss";
import { useAuthContext } from "../../store/AuthContext";

export const Header = () => {
    const { accessToken } = useAuthContext();
    const isLoggedIn = !!accessToken;

    const tabs = useMemo(
        () =>
            isLoggedIn ? (
                <li>
                    <Link to={HOME_PAGE} className="link auth">
                        PROFILE
                    </Link>
                </li>
            ) : (
                <>
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
                </>
            ),
        [isLoggedIn],
    );

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
                    {tabs}
                </ul>
            </nav>
        </div>
    );
};
