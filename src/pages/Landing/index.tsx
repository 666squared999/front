import React, { FC } from "react";
import { Infographic } from "../../components/Infographic";
import { LandingOptions } from "../../components/LandingOptions";
import { Wallpaper } from "../../components/Wallpaper";
import "./style.scss";

export const Landing: FC = () => {
    return (
        <div className="Landing">
            <Wallpaper />
            <Infographic />
            <LandingOptions />
        </div>
    );
};
