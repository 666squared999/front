import React, { FC, useEffect, useState } from "react";
import { getUserInfo } from "../../api/requests";
import { User } from "../../components/User";
import { useAuthContext } from "../../store/AuthContext";
import "./style.scss";

export const Home: FC = () => {
    const { accessToken, logout } = useAuthContext();
    const [user, setUser] = useState<User>({
        id: 0,
        username: "",
        email: "",
    });

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        (async () => {
            const state = await getUserInfo(accessToken);
            setUser(state);
        })();
    }, [accessToken]);

    return (
        <div className="Home">
            <User logout={logout} {...user} />
        </div>
    );
};
