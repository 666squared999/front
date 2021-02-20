import React, { FC } from "react";
import { InfographicCard, InfographicInfo } from "../InfographicCard";
import "./style.scss";

const info1: InfographicInfo[] = [
    {
        title: "Our website is completely free",
        description:
            "The most advanced, free online missing pet matching service",
        type: "free",
    },
    {
        title: "We can help locate any kind of pet",
        description:
            "From dogs and cats to ferrets and birds, whether they are lost or stolen.",
        type: "find",
    },
    {
        title: "First uniformed Missing Pet Search Team",
        description: "Finding lost pets since 2021.",
        type: "thumb",
    },
];

const info2: InfographicInfo[] = [
    {
        title: "Expert support 7 days a week",
        description:
            "Providing both practical guidance and expert support over the phone and via email.",
        type: "phone",
    },
    {
        title: "We help reunite thousands of pets",
        description:
            "Our website utilises a unique auto-match facility which helps to reunite thousands of pets each year.",
        type: "like",
    },
    {
        title: "A network of many volunteers",
        description:
            "A network of animal lovers nationwide, who volunteer to help find matches in their area.",
        type: "people",
    },
];

export const Infographic: FC = () => {
    return (
        <div className="Infographic">
            <div className="title">
                <h1>Reuniting pets since 2021</h1>
            </div>
            <div className="row">
                {info1.map((info) => (
                    <InfographicCard {...info} />
                ))}
            </div>
            <div className="row">
                {info2.map((info) => (
                    <InfographicCard {...info} />
                ))}
            </div>
        </div>
    );
};
