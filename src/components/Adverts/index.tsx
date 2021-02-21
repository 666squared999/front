import { FC, useEffect, useState } from "react";
import { Advert, FilterData } from "../../utils/types";
import { AdvertBlock } from "./Advert";
import "./style.scss";

const data: Advert[] = [
    {
        id: 1,
        title: "1111",
        photo_urls: ["image.png"],
        location: "here",
        animal_type: "cat",
        breed: "muimur",
        color: "red",
        sex: "male",
        description: "hii",
        type: "found",
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
                        value: true,
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
                        value: true,
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
    },
    {
        id: 2,
        title: "1111",
        photo_urls: ["image.png"],
        location: "here",
        animal_type: "cat",
        breed: "muimur",
        color: "red",
        sex: "female",
        description: "hii",
        type: "found",
        features: [
            {
                key: "Wool length",
                conflicting: false,
                featureTypes: [
                    {
                        key: "Long",
                        value: true,
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
                        value: true,
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
    },
];

interface IProps {
    filterData: FilterData;
}

export const Adverts = ({ filterData }: IProps) => {
    const [advertsData, setAdvertsData] = useState<Advert[]>([]);
    useEffect(() => {
        const handleMount = async () => {
            await new Promise((res, _) => setTimeout(res, 1000));
            const withFilteredFeatures = data.filter((advert) => {
                const isValid = filterData.features.every(
                    ({ featureTypes, key }) => {
                        const shouldFilter = featureTypes.some(
                            ({ value }) => value,
                        );
                        console.log(shouldFilter, "featureTypes");
                        if (shouldFilter) {
                            const advertFeatureKeyIndex = advert.features.findIndex(
                                (el) => el.key === key,
                            );
                            const isValid = featureTypes.some(
                                ({ value, key }) => {
                                    const advertFeatureTypeKeyIndex = advert.features[
                                        advertFeatureKeyIndex
                                    ].featureTypes.findIndex(
                                        (el) => el.key === key,
                                    );
                                    if (
                                        advert.features[advertFeatureKeyIndex]
                                            .featureTypes[
                                            advertFeatureTypeKeyIndex
                                        ].value === value &&
                                        value
                                    ) {
                                        return true;
                                    }
                                },
                            );
                            return isValid;
                        } else {
                            return true;
                        }
                    },
                );
                return isValid;
            });
            setAdvertsData(withFilteredFeatures);
        };
        handleMount();
    }, [filterData]);

    // const;

    return (
        <div className="Adverts">
            <p>Found results</p>
            {advertsData.length ? (
                <div className="AdvertsList">
                    {advertsData.map((el) => {
                        return <AdvertBlock key={el.id} data={el} />;
                    })}
                </div>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
};
