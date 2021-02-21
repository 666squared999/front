import React, { FC } from "react";
import "./style.scss";

export const Wallpaper: FC = () => {
    return (
        <div className="Wallpaper">
            <div className="container">
                <p className="firstLine">Have you lost your soulmate?</p>
                <p className="secondLine">
                    Or have you found a pet and want help it to get home?
                </p>
            </div>
        </div>
    );
};
