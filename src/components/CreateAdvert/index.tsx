import { Button, TextField } from "@material-ui/core";
import { AirplanemodeInactiveTwoTone } from "@material-ui/icons";
import React, { ChangeEvent, FC, useCallback, useState } from "react";
import { createAdvert } from "../../api/requests";
import { useAuthContext } from "../../store/AuthContext";
import "./style.scss";

interface Advert {
    title?: string;
    breed?: string;
    animal_type?: string;
    color?: string;
    sex?: string;
    description?: string;
}

export const CreateAdvert = ({ handleUpdate }: any) => {
    const [advert, setAdvert] = useState<Advert>();

    const { accessToken } = useAuthContext();

    const inputHolder = useCallback<
        (
            type:
                | "title"
                | "bread"
                | "input"
                | "animal_type"
                | "color"
                | "sex"
                | "description",
        ) => (
            event: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>,
        ) => void
    >(
        (type) => ({ currentTarget: { value } }) =>
            setAdvert((prev) =>
                prev ? { ...prev, [type]: value } : { [type]: value },
            ),
        [],
    );

    const submit = useCallback(async () => {
        console.log("on clieck");
        const { breed, color, sex, animal_type } = advert ?? {};
        if (!accessToken) {
            console.log("return");
            return;
        }

        const resp = await createAdvert(accessToken, advert);
        console.log(resp);
        handleUpdate();
    }, [accessToken, advert, handleUpdate]);

    return (
        <div className="CreateAdvert">
            <form autoComplete="off" className="form">
                <div className="row">
                    <span>Title</span>
                    <TextField
                        id="title"
                        className="input"
                        variant="outlined"
                        size="small"
                        label="Title"
                        placeholder="Boy Jack"
                        onChange={inputHolder("title")}
                        value={advert?.title}
                    />
                </div>

                <div className="row">
                    <span>Breed</span>
                    <TextField
                        id="breed"
                        className="input"
                        variant="outlined"
                        size="small"
                        label="Breed"
                        placeholder="Labrador"
                        onChange={inputHolder("bread")}
                        value={advert?.breed}
                        required
                    />
                </div>

                <div className="row">
                    <span>Type</span>
                    <TextField
                        id="type"
                        className="input"
                        variant="outlined"
                        size="small"
                        label="Type"
                        placeholder="Dog"
                        onChange={inputHolder("animal_type")}
                        value={advert?.animal_type}
                        required
                    />
                </div>

                <div className="row">
                    <span>Color</span>
                    <TextField
                        id="color"
                        className="input"
                        variant="outlined"
                        size="small"
                        label="Color"
                        placeholder="red"
                        onChange={inputHolder("color")}
                        value={advert?.color}
                        required
                    />
                </div>

                <div className="row">
                    <span>Sex</span>
                    <TextField
                        id="sex"
                        className="input"
                        variant="outlined"
                        size="small"
                        label="Sex"
                        placeholder="male"
                        onChange={inputHolder("sex")}
                        value={advert?.sex}
                    />
                </div>

                <div className="row">
                    <span>Description</span>
                    <TextField
                        id="description"
                        className="input"
                        variant="outlined"
                        size="small"
                        label="Description"
                        placeholder="Donut tail"
                        onChange={inputHolder("description")}
                        value={advert?.description}
                    />
                </div>

                <Button
                    variant="contained"
                    color="secondary"
                    size="large"
                    className="button"
                    onClick={submit}>
                    Post
                </Button>
            </form>
        </div>
    );
};
