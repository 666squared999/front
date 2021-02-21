import { User } from "../components/User";

const API_URL = "https://api.squared.cf/";

const request = (
    params: string,
    method: Request["method"],
    body?: Record<string, string>,
    headers?: Record<string, string>,
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

export const login = (email: string, password: string) =>
    request("api/v1/users/token/", "POST", {
        email,
        password,
    }).then((response) => response.json());

export const signin = (
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

export const getUserInfo = async (token: string): Promise<User> =>
    request("api/v1/users/me", "GET", undefined, {
        Authorization: `Bearer ${token}`,
    })
        .then((response) => response.json())
        .catch(console.log);

export const createAdvert = async (token: string, data: any) =>
    request("api/v1/adverts/", "POST", data, {
        Authorization: `Bearer ${token}`,
    })
        .then((response) => response.json())
        .catch(console.log);

export const getUserAdverts = async (token: string, id: number) =>
    request(`api/v1/adverts?user=${id}`, "GET", undefined, {
        Authorization: `Bearer ${token}`,
    })
        .then((response) => response.json())
        .catch(console.log);

export default request;
