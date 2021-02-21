import { Advert } from "./types";

export const getAdvertById = (id: string) => {
    return fetch("http://example.com/movies.json", {
        method: "GET",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
    });
};

export const postAdvert = (data: Advert) => {
    return fetch("http://example.com/movies.json", {
        method: "POST",
        mode: "cors",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
    });
};
