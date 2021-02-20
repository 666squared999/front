import React, { useState } from "react";
import { Adverts } from "../../components/Adverts";
import { SearchFilters } from "../../components/SearchFilters";
import { FilterData } from "../../utils/types";
import "./style.scss";

const initialData: FilterData = {
    animalType: "",
    sexType: "",
    description: "",
    // checkBoxFeature: [
    //     {
    //         key: "Wool",
    //         value: false,
    //     },
    //     {
    //         key: "",
    //         value: false,
    //     },
    // ],
    features: [
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
