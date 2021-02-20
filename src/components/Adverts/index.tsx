import { FC, useEffect, useState } from "react";
import { Advert, FilterData } from "../../utils/types";
import { AdvertBlock } from "./Advert";
import "./style.scss";

const data: Advert[] = [
    {
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
                key: "Short wool",
                value: false,
            },
        ],
    },
    {
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
                key: "Short wool",
                value: false,
            },
        ],
    },
    {
        title: "1111",
        photo_urls: ["image.png"],
        location: "here",
        animal_type: "cat",
        breed: "muimur",
        color: "red",
        sex: "unknown",
        description: "hii",
        type: "found",
        features: [
            {
                key: "Short wool",
                value: false,
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
            await new Promise((res, _) => setTimeout(res, 1100));
            const withFilteredFeatures = data.filter((advert) => {
                // if (filterData.sexType === "unknown") {
                //     return true;
                // }
                // return advert.sex === filterData.sexType;
                // advert.features.map(feature => {
                //     if(feature.value) {

                //     }
                // })
                return true;
            });
            // const withFilteredType = withFilteredSex.filter((advert) => {
            //     return advert.sex === filterData.animalType;
            // });
            // const withFilteredType = withFilteredSex.filter((advert) => {
            //     return advert.sex === filterData.;
            // });
            setAdvertsData(withFilteredFeatures);
        };
        handleMount();
    }, [advertsData, filterData]);

    // const;

    return (
        <div className="Adverts">
            <p>Found results</p>
            {advertsData.length ? (
                <div className="AdvertsList">
                    {advertsData.map((el) => {
                        return <AdvertBlock key={el.animal_type} data={el} />;
                    })}
                </div>
            ) : (
                <p>Loading</p>
            )}
        </div>
    );
};
