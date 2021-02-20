import { useEffect, useState } from "react";
import { Advert } from "../../../utils/types";
import petAlt from "../../../assets/images/petAlt.png";
import "./style.scss";

interface IProps {
    data: Advert;
}

export const AdvertBlock = ({ data }: IProps) => {
    const { photo_urls, breed, animal_type, type, location } = data;
    const [isImageExists, setIsImageExists] = useState(false);

    useEffect(() => {
        setIsImageExists(photo_urls.length > 1);
    }, [photo_urls]);

    return (
        <div className="Advert">
            {isImageExists ? (
                <img src={photo_urls[0]} alt="Pet Image" />
            ) : (
                <img src={petAlt} alt="Pet Image" />
            )}
            <p>
                {animal_type}, {breed}
            </p>
            <p>
                {type === "found" ? "Found in " : "Lost in"} {location}
            </p>
        </div>
    );
};
