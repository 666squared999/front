import React, { FC, useEffect, useState } from "react";
import {
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    TextField,
} from "@material-ui/core";
import "./style.scss";

const animalTypes = [
    { key: "dog", value: "Dog" },
    { key: "cat", value: "Cat" },
    { key: "parrot", value: "Parrot" },
    { key: "other", value: "Other" },
];
const animalSex = [
    { key: "female", value: "Female" },
    { key: "male", value: "Male" },
    { key: "unknown", value: "Unknown" },
];

const animalFeatures = [
    {
        key: "Short wool",
        value: false,
    },
    {
        key: "Long wool",
        value: false,
    },
    {
        key: "Short tail",
        value: false,
    },
    {
        key: "Long tail",
        value: false,
    },
    {
        key: "Without tail",
        value: false,
    },
    {
        key: "Sharp ears",
        value: false,
    },
    {
        key: "Sloping ears",
        value: false,
    },
    {
        key: "Long face",
        value: false,
    },
    {
        key: "Oblong face",
        value: false,
    },
    {
        key: "Short face",
        value: false,
    },
    {
        key: "Spotted",
        value: false,
    },
    {
        key: "Striped",
        value: false,
    },
    {
        key: "Monotonous",
        value: false,
    },
];

export const SearchFilters = () => {
    const [typeValue, setTypeValue] = useState("");
    const [sexValue, setSexValue] = useState("");
    const [descriptionValue, setDescriptionValue] = useState("");
    const [featureValues, setFeatureValues] = useState(animalFeatures);

    const handleDescriptionhValueChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setDescriptionValue(event.currentTarget.value);
    };

    const handleTypeValueChange = (
        event: React.ChangeEvent<{ value: unknown }>,
    ): void => {
        setTypeValue(event.target.value as string);
    };

    const handleSexValueChange = (
        event: React.ChangeEvent<{ value: unknown }>,
    ): void => {
        setSexValue(event.target.value as string);
    };

    const handleFeatureChange = (key: string): void => {
        const newFeatureValues = [...animalFeatures];
        const searchedKeyIndex = newFeatureValues.findIndex(
            (el) => el.key === key,
        );
        newFeatureValues[searchedKeyIndex].value = !newFeatureValues[
            searchedKeyIndex
        ].value;
        setFeatureValues(newFeatureValues);
    };

    const handleSearchButtonClick = () => {
        const data = {
            type: typeValue,
            sex: sexValue,
            description: descriptionValue,
            feature: featureValues,
        };
        console.log(" Fetching, ", data);
    };

    return (
        <div className="SearchFilters">
            <div>
                <TextField
                    select
                    className="textInput"
                    label="Pet Type"
                    value={typeValue}
                    onChange={handleTypeValueChange}
                    variant="outlined">
                    {animalTypes.map(({ key, value }) => {
                        return (
                            <MenuItem key={key} value={value}>
                                {value}
                            </MenuItem>
                        );
                    })}
                </TextField>
                <TextField
                    select
                    className="textInput"
                    label="Pet Sex"
                    value={sexValue}
                    onChange={handleSexValueChange}
                    variant="outlined">
                    {animalSex.map(({ key, value }) => {
                        return (
                            <MenuItem key={key} value={value}>
                                {value}
                            </MenuItem>
                        );
                    })}
                </TextField>
                <TextField
                    className="textInput"
                    color="primary"
                    onChange={handleDescriptionhValueChange}
                    value={descriptionValue}
                    label="Description"
                    variant="outlined"
                />
                <div>
                    {featureValues.map(({ key, value }) => {
                        return (
                            <FormControlLabel
                                control={
                                    <Checkbox
                                        value={value}
                                        onChange={() =>
                                            handleFeatureChange(key)
                                        }
                                        color="primary"
                                    />
                                }
                                label={key}
                                labelPlacement="start"
                            />
                        );
                    })}
                </div>
            </div>
            <Button
                className="searchButton"
                color="primary"
                variant="outlined"
                onClick={handleSearchButtonClick}>
                Search
            </Button>
        </div>
    );
};
