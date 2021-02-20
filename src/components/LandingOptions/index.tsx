import { Button } from "@material-ui/core";
import React, { FC } from "react";
import "./style.scss";
import pets from "../../assets/images/Pets.png";

export const LandingOptions: FC = () => {
    return (
        <div className="LandingOptions">
            <div className="title">
                <h1>Let's look how we can help you</h1>
                <img src={pets} alt="Pets" />
            </div>
            <div className="container">
                <div className="option left">
                    <h3>Have you have found a pet?</h3>
                    <div className="button">
                        <Button variant="contained" color="primary">
                            Show lost pets
                        </Button>
                    </div>
                </div>
                <div className="option right">
                    <h3>Have you have lost a pet?</h3>
                    <div className="button">
                        <Button
                            variant="contained"
                            color="secondary"
                            size="large">
                            Show found pets
                        </Button>
                    </div>
                </div>
            </div>
        </div>
    );
};
