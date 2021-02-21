import { FC, useEffect } from "react";
import { getAdvertById } from "../../utils/request";
import { Advert } from "../../utils/types";
import "./style.scss";

export const AdvertInfo = () => {
    const access =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2NDU0NTUyLCJqdGkiOiI2OWI2NTRiMmVjZWM0MzIxOTA2MzcyYzNiMjEzOWFkOCIsInVzZXJfaWQiOjF9.mhQP_OW2zLfyDCPplwQyKbfo6Ed9VPfLyOKAdENqOy0";
    useEffect(() => {
        const handleMount = async () => {
            const response = await getAdvertById("1212");
        };
    }, []);
    return <div className="AdvertInfo"></div>;
};
