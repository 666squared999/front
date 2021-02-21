import React, { useState } from "react";
import { Adverts } from "../../components/Adverts";
import { SearchFilters } from "../../components/SearchFilters";
import { FilterData } from "../../utils/types";
import "./style.scss";

export const initialData: FilterData = {
    animalType: "",
    sexType: "",
    description: "",
    features: [
        {
            key: "Wool length",
            conflicting: false,
            featureTypes: [
                {
                    key: "Long",
                    value: false,
                },
                {
                    key: "Short",
                    value: false,
                },
                {
                    key: "No wool",
                    value: false,
                },
            ],
        },
        {
            key: "Tail length",
            conflicting: false,
            featureTypes: [
                {
                    key: "Long",
                    value: false,
                },
                {
                    key: "Short",
                    value: false,
                },
                {
                    key: "No tail",
                    value: false,
                },
            ],
        },
        {
            key: "Ears types",
            conflicting: false,
            featureTypes: [
                {
                    key: "Sharp",
                    value: false,
                },
                {
                    key: "Sloping",
                    value: false,
                },
                {
                    key: "No ears",
                    value: false,
                },
            ],
        },
        {
            key: "Face types",
            conflicting: true,
            featureTypes: [
                {
                    key: "Oblong",
                    value: false,
                },
                {
                    key: "Flat",
                    value: false,
                },
            ],
        },
        {
            key: "Color",
            conflicting: false,
            featureTypes: [
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
            ],
        },
    ],
};

export const Search = () => {
    const [filterData, setFilterData] = useState<FilterData>(initialData);
    const [
        filterDataForAdverts,
        setFilterDataForAdverts,
    ] = useState<FilterData>(initialData);

    const handleSearchButtonClick = () => {
        setFilterDataForAdverts(filterData);
    };

    return (
        <div className="Search">
            <SearchFilters
                handleSearchButtonClick={handleSearchButtonClick}
                data={filterData}
                setData={setFilterData}
            />
            <Adverts filterData={filterDataForAdverts} />
        </div>
    );
};
