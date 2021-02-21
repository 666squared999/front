import React, { FC, useEffect, useState } from "react";
import { getUserAdverts, getUserInfo } from "../../api/requests";
import { AdvertBlock } from "../../components/Adverts/Advert";
import { CreateAdvert } from "../../components/CreateAdvert";
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

    const [adverts, setAdverts] = useState<any>();

    useEffect(() => {
        if (!accessToken) {
            return;
        }

        (async () => {
            const state = await getUserInfo(accessToken);
            setUser(state);
            const data = await getUserAdverts(accessToken, state.id);
            setAdverts(data.results);
        })();
    }, [accessToken]);

    const handleUpdate = async () => {
        if (!accessToken) {
            return;
        }
        const data = await getUserAdverts(accessToken, user.id);
        setAdverts(data.results);
    };

    return (
        <div className="Home">
            <User logout={logout} {...user} />
            <div className="inner">
                <div className="left">
                    {adverts &&
                        adverts.map((el: any) => {
                            return <AdvertBlock data={el} />;
                        })}
                </div>
                <div className="right">
                    <CreateAdvert handleUpdate={handleUpdate} />
                </div>
            </div>
        </div>
    );
};
