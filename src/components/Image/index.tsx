import React, { Component, useEffect, useState } from "react";
import axios from "axios";

interface IProps {
    path: string;
}

export const Image = ({ path }: IProps) => {
    const [source, setSource] = useState("");

    useEffect(() => {
        const getImage = async () => {
            const response = await axios.get("", {
                responseType: "arraybuffer",
            });
            const base64 = btoa(
                new Uint8Array(response.data).reduce(
                    (data, byte) => data + String.fromCharCode(byte),
                    "",
                ),
            );
            setSource("data:;base64," + base64);
        };
        getImage();
    }, []);
    return source && <img src={source} />;
};
