import { TextField, Button } from "@material-ui/core";
import { FC, useEffect, useMemo, useState } from "react";
import { getUserInfo } from "../../api/requests";
import { useAuthContext } from "../../store/AuthContext";
import "./style.scss";

export interface User {
    id: number;
    username: string;
    email: string;
}

export const User: FC<User & { logout: () => void }> = ({
    logout,
    username,
    email,
}) => {
    return (
        <div className="User">
            <div className="textContainer">
                <div className="row left">
                    <span>Username:</span>
                    <TextField
                        disabled
                        value={username}
                        variant="outlined"
                        size="small"
                        className="input"
                    />
                </div>
                <div className="row right">
                    <span>Email:</span>
                    <TextField
                        disabled
                        value={email}
                        variant="outlined"
                        size="small"
                        className="input"
                    />
                </div>
            </div>
            <Button onClick={logout} color="primary" variant="contained">
                Logout
            </Button>
        </div>
    );
};
