import { useEffect, useState } from "react";
import { Advert } from "../../../utils/types";
import petAlt from "../../../assets/images/petAlt.png";
import "./style.scss";

interface IProps {
    data: any;
}

export const AdvertBlock = ({ data }: IProps) => {
    const {
        photos,
        photo_urls,
        breed,
        animal_type,
        type,
        location,
        title,
        sex,
    } = data;
    const [isImageExists, setIsImageExists] = useState(false);
    console.log(data);
    useEffect(() => {
        if (photos) {
            setIsImageExists(photos.length > 1);
        }
        if (photo_urls) {
            setIsImageExists(photo_urls.length > 1);
        }
    }, [photos, photo_urls]);

    return (
        <div className="Advert">
            {isImageExists ? (
                <img src={photos[0]} alt="Pet Image" />
            ) : (
                <img src={petAlt} alt="Pet Image" />
            )}
            <p>
                {animal_type}
                {breed ? ", " + breed : ""}
                {title ? ", " + title : ""}
                {sex ? ", " + sex : ""}
            </p>
            <p>
                {type === "found" ? "Found in " : "Lost in"} {location}
            </p>
        </div>
    );
};
