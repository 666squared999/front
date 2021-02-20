import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Logo } from "../Logo";
import { LANDING_PATH, Router } from "../Router";
import "./style.scss";

export const Header: FC = () => {
    return (
        <div className="Header">
            <Router />
        </div>
    );
};
