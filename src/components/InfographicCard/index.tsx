import React, { FC, useMemo } from "react";
import find from "../../assets/images/find.jpeg";
import free from "../../assets/images/free.png";
import like from "../../assets/images/like.png";
import people from "../../assets/images/people.png";
import phone from "../../assets/images/phone.png";
import thumb from "../../assets/images/thumb.png";
import "./style.scss";

export type InfographicInfo = {
    title: string;
    description: string;
    type: "free" | "find" | "thumb" | "like" | "phone" | "people";
};

export const InfographicCard: FC<InfographicInfo> = ({
    title,
    description,
    type,
}) => {
    const icon = useMemo(() => {
        switch (type) {
            case "find":
                return find;
            case "free":
                return free;
            case "like":
                return like;
            case "phone":
                return phone;
            case "people":
                return people;
            case "thumb":
                return thumb;
        }
    }, [type]);

    return (
        <div className="InfographicCard">
            <div className="container image">
                <img src={icon} alt="icon" className="icon" />
            </div>

            <div className="container text">
                <h3 className="title">{title}</h3>
                <p className="description">{description}</p>
            </div>
        </div>
    );
};
