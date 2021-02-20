import React, { FC, useEffect, useState } from "react";
import {
    Button,
    Checkbox,
    FormControlLabel,
    MenuItem,
    TextField,
} from "@material-ui/core";
import "./style.scss";
import { AnimalType, FilterData, SexType } from "../../utils/types";

const animalTypes = ["dog", "cat", "parrot", "other", ""];
const sexTypes = ["male", "female", "unknown", ""];

interface IProps {
    data: FilterData;
    setData: (data: FilterData) => void;
    handleSearchButtonClick: () => void;
}

export const SearchFilters = ({
    data,
    setData,
    handleSearchButtonClick,
}: IProps) => {
    const { animalType, sexType, description, features } = data;

    const handleDescriptionhValueChange = (
        event: React.ChangeEvent<HTMLInputElement>,
    ) => {
        setData({ ...data, description: event.target.value });
    };

    const handleTypeValueChange = (
        event: React.ChangeEvent<{ value: unknown }>,
    ): void => {
        setData({ ...data, animalType: event.target.value as AnimalType });
    };

    const handleSexValueChange = (
        event: React.ChangeEvent<{ value: unknown }>,
    ): void => {
        setData({ ...data, sexType: event.target.value as SexType });
    };

    const handleFeatureChange = (key: string): void => {
        const newFeatures = [...data.features];
        const searchedKeyIndex = newFeatures.findIndex((el) => el.key === key);
        newFeatures[searchedKeyIndex].value = !newFeatures[searchedKeyIndex]
            .value;
        setData({ ...data, features: newFeatures });
    };

    return (
        <div className="SearchFilters">
            <div>
                <TextField
                    select
                    className="textInput"
                    label="Pet Type"
                    value={animalType}
                    onChange={handleTypeValueChange}
                    variant="outlined">
                    {animalTypes.map((el) => {
                        return (
                            <MenuItem key={el} value={el}>
                                {el}
                            </MenuItem>
                        );
                    })}
                </TextField>
                <TextField
                    select
                    className="textInput"
                    label="Pet Sex"
                    value={sexType}
                    onChange={handleSexValueChange}
                    variant="outlined">
                    {sexTypes.map((el) => {
                        return (
                            <MenuItem key={el} value={el}>
                                {el}
                            </MenuItem>
                        );
                    })}
                </TextField>
                <TextField
                    className="textInput"
                    color="primary"
                    onChange={handleDescriptionhValueChange}
                    value={description}
                    label="Description"
                    variant="outlined"
                />
                <div>
                    {features.map(({ key, value }) => {
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
