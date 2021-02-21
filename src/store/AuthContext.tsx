import React, { createContext, useCallback, useContext, useState } from "react";

const ACCESS_TOKEN_KEY = "accessToken";

export type AuthContextType = {
    accessToken: string | null;
    login: (token: string) => void;
    logout: () => void;
};

const AuthContext = createContext<AuthContextType | null>(null);

export const AuthContextProvider = AuthContext.Provider;

export const useAuthContext = () => {
    const authContext = useContext(AuthContext);

    if (authContext === null) {
        throw new Error(
            "Auth context cannot be null, please add a context provider.",
        );
    }
    return authContext as AuthContextType;
};

export const useAuthState = (): AuthContextType => {
    const initialToken = localStorage.getItem(ACCESS_TOKEN_KEY);

    const [accessToken, setAccessToken] = useState(initialToken);

    const login = useCallback<(token: string) => void>((token) => {
        setAccessToken(token);
        localStorage.setItem(ACCESS_TOKEN_KEY, token);
    }, []);

    const logout = useCallback(() => {
        setAccessToken(null);
        localStorage.removeItem(ACCESS_TOKEN_KEY);
    }, []);

    return { accessToken, login, logout };
};
