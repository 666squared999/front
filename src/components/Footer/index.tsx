import React, { FC } from "react";
import { Router } from "../Router";
import "./style.scss";

export const Footer: FC = () => {
    return (
        <div className="Footer">
            <p>Squared Team</p>
            <p>2021</p>
            <p>
                <a href="https://github.com/666squared999">GitHub</a>
            </p>
        </div>
    );
};
