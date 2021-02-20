export type AnimalType = "dog" | "cat" | "parrot" | "other" | "";

export type AnimalFeature = {
    key: FeatureType;
    value: boolean;
};

export type FeatureType =
    | "Short wool"
    | "Long wool"
    | "Short tail"
    | "Without tail"
    | "Sharp ears"
    | "Sloping ears"
    | "Long face"
    | "Oblong face"
    | "Short face"
    | "Spotted"
    | "Striped"
    | "Monotonous"
    | "Long tail";

export type SexType = "male" | "female" | "unknown" | "";

export type AdvertType = "found" | "lost";

export type Advert = {
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
