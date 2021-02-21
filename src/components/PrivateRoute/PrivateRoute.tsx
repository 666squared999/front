import React, { FC } from "react";
import { Redirect, Route, RouteProps } from "react-router-dom";
import { useAuthContext } from "../../store/AuthContext";
import { LOGIN_PATH } from "../Router";

export const PrivateRoute: FC<RouteProps> = ({ children, ...rest }) => {
    const { accessToken } = useAuthContext();

    return (
        <Route
            {...rest}
            render={({ location }) =>
                accessToken ? (
                    children
                ) : (
                    <Redirect
                        to={{
                            pathname: LOGIN_PATH,
                            state: { from: location },
                        }}
                    />
                )
            }
        />
    );
};
