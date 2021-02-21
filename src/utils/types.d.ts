export type AnimalType = "dog" | "cat" | "parrot" | "other" | "";

export type AnimalFeature = {
    key: FeatureType;
    conflicting: boolean;
    featureTypes: FeatureValueType[];
};

export type FeatureValueType = {
    key: FeatureTypesType;
    value: boolean;
};

export type FeatureType =
    | "Wool length"
    | "Tail length"
    | "Ears types"
    | "Face types"
    | "Color";

export type FeatureTypesType =
    | "Long"
    | "Short"
    | "No wool"
    | "No tail"
    | "Sharp"
    | "Sloping"
    | "No ears"
    | "Oblong"
    | "Flat"
    | "Spotted"
    | "Striped"
    | "Monotonous"
    | "";

export type SexType = "male" | "female" | "unknown" | "";

export type AdvertType = "found" | "lost";

export type Advert = {
    id: number;
    title: string;
    photo_urls: string[];
    location: string;
    animal_type: AnimalType;
    breed: string;
    color: string;
    sex: SexType;
    description: string;
    type: AdvertType;
    features: AnimalFeature[];
};

export type FilterData = {
    animalType: AnimalType;
    sexType: SexType;
    description: string;
    features: AnimalFeature[];
};
