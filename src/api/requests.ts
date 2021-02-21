const API_URL = "https://api.squared.cf/";

const request = (
    params: string,
    method: Request["method"],
    body?: Record<string, string>,
    headers?: Request["headers"],
): Promise<Response> => {
    return fetch(API_URL + params, {
        mode: "cors",
        method,
        body: body ? new URLSearchParams(body) : undefined,
        headers: headers
            ? {
                  "Content-Type":
                      "application/x-www-form-urlencoded;charset=UTF-8",
                  ...headers,
              }
            : {
                  "Content-Type":
                      "application/x-www-form-urlencoded;charset=UTF-8",
              },
    });
};

export const login = async (email: string, password: string) =>
    request("api/v1/users/token/", "POST", {
        email,
        password,
    }).then((response) => response.json());

export const signin = async (
    username: string,
    email: string,
    password: string,
    confirmPassword: string,
) =>
    request("api/v1/users/signup/", "POST", {
        email,
        password,
        username,
        confirmPassword,
    }).then((response) => response.json());

export default request;
