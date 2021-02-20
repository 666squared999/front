import React, { FC } from "react";
import { Router } from "../Router";
import "./style.scss";

export const Header: FC = ({ children }) => {
    return <div className="Header">{children}</div>;
};
