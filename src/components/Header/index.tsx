import React, { FC } from "react";
import { Router } from "../Router";
import "./style.scss";

export const Header: FC = () => {
    return (
        <div className="Header">
            <Router />
        </div>
    );
};
