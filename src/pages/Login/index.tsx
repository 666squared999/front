import { Button, TextField } from "@material-ui/core";
import { ChangeEvent, FC, useCallback, useState } from "react";
import isEmail from "validator/lib/isEmail";
import { login as loginRequest } from "../../api/requests";
import { useAuthContext } from "../../store/AuthContext";
import "./style.scss";

export const Login: FC = () => {
    const { login } = useAuthContext();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [emailError, setEmailError] = useState("");

    const [error, setError] = useState("");

    const emailInputHandler = useCallback<
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    >(
        ({ currentTarget: { value } }) => {
            if (emailError || error) {
                setEmailError("");
                setError("");
            }
            setEmail(value);
        },
        [emailError, error],
    );

    const submitForm = useCallback(async () => {
        if (!isEmail(email)) {
            setEmailError("Invalid email address");
            return;
        }

        const response = await loginRequest(email, password);

        if (response.detail) {
            setError(response.detail);
            return;
        }

        if (response.access) {
            login(response.access);
        }
    }, [email, login, password]);

    const passwordInputHandler = useCallback<
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    >(
        ({ currentTarget: { value } }) => {
            if (error) {
                setError("");
            }

            return setPassword(value);
        },
        [error],
    );

    return (
        <div className="Login">
            <div className="container">
                <form autoComplete="off" className="form">
                    <TextField
                        id="email"
                        className="input"
                        label="Email"
                        variant="outlined"
                        onChange={emailInputHandler}
                        error={!!emailError || !!error}
                        placeholder="user@email.com"
                        helperText={emailError}
                        value={email}
                    />
                    <TextField
                        id="password"
                        className="input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        variant="outlined"
                        onChange={passwordInputHandler}
                        error={!!error}
                    />
                    <p>{error}</p>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className="button"
                        disabled={!email || !password}
                        onClick={submitForm}>
                        Login
                    </Button>
                </form>
            </div>
        </div>
    );
};
