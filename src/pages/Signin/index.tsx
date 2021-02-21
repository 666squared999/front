import { Button, TextField } from "@material-ui/core";
import { ChangeEvent, FC, useCallback, useState } from "react";
import isEmail from "validator/lib/isEmail";
import { signin } from "../../api/requests";
import { useAuthContext } from "../../store/AuthContext";
import "./style.scss";

export const SignIn: FC = () => {
    const { login } = useAuthContext();

    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const [emailError, setEmailError] = useState("");
    const [usernameError, setUsernameError] = useState("");
    const [passwordError, setPasswordError] = useState(false);

    const [error, setError] = useState("");

    const emailInputHandler = useCallback<
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    >(
        ({ currentTarget: { value } }) => {
            if (emailError || error) {
                setEmailError("");
                setPasswordError(false);
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

        const response = await signin(
            username,
            email,
            password,
            confirmPassword,
        );

        if (response.password) {
            setPasswordError(true);
            setError(response.password[0]);
            return;
        }

        if (!response.id) {
            if (response.password) {
                setPasswordError(true);
                setError(response.password[0]);
            }
            if (response.username) {
                setUsernameError(response.username[0]);
            }
            if (response.email) {
                setEmailError(response.email[0]);
            }
            return;
        }

        if (response.id) {
            login(response.jwts.access);
        }
    }, [confirmPassword, email, login, password, username]);

    const passwordInputHandler = useCallback<
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    >(
        ({ currentTarget: { value } }) => {
            if (error || passwordError) {
                setError("");
                setPasswordError(false);
            }

            return setPassword(value);
        },
        [error, passwordError],
    );

    const usernameInputHandler = useCallback<
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    >(
        ({ currentTarget: { value } }) => {
            if (error || usernameError) {
                setError("");
                setUsernameError("");
            }

            return setUsername(value);
        },
        [error, usernameError],
    );

    const confirmPasswordInputHandler = useCallback<
        (event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => void
    >(
        ({ currentTarget: { value } }) => {
            if (error || passwordError) {
                setError("");
                setPasswordError(false);
            }

            return setConfirmPassword(value);
        },
        [error, passwordError],
    );

    return (
        <div className="Signin">
            <div className="container">
                <form autoComplete="off" className="form">
                    <TextField
                        id="username"
                        className="input"
                        label="Username"
                        variant="outlined"
                        onChange={usernameInputHandler}
                        placeholder="user123"
                        value={username}
                        error={!!usernameError}
                    />
                    <TextField
                        id="email"
                        className="input"
                        label="Email"
                        variant="outlined"
                        onChange={emailInputHandler}
                        error={!!emailError}
                        placeholder="user@email.com"
                        helperText={emailError}
                        value={email}
                    />
                    <TextField
                        id="password"
                        className="input"
                        label="Password"
                        type="password"
                        variant="outlined"
                        onChange={passwordInputHandler}
                        error={passwordError}
                        value={password}
                        inputProps={{ minLength: 8 }}
                    />
                    <TextField
                        id="confirmPassword"
                        className="input"
                        label="Confirm Password"
                        type="password"
                        variant="outlined"
                        onChange={confirmPasswordInputHandler}
                        value={confirmPassword}
                        error={passwordError}
                        inputProps={{ minLength: 8 }}
                    />
                    <p>{error}</p>
                    <Button
                        variant="contained"
                        color="secondary"
                        size="large"
                        className="button"
                        disabled={
                            !email || !password || !username || !confirmPassword
                        }
                        onClick={submitForm}>
                        Sign In
                    </Button>
                </form>
            </div>
        </div>
    );
};
