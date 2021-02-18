const API_URL = "https://api.squared.cf/";

const request = (
    method: Request["method"],
    body: Request["body"],
    headers: Request["headers"],
): Promise<Response> => {
    return fetch(API_URL, {
        mode: "cors",
        method,
        body,
        headers,
    });
};

export default request;
