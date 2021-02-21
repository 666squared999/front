import { FC } from "react";
import { FilterData } from "../../utils/types";
import "./style.scss";

// const initialData: FilterData = {
//     animalType: "",
//     sexType: "",
//     description: "",
//     features: [
//         {
//             key: "Wool length",
//             conflicting: false,
//             featureTypes: [
//                 {
//                     key: "Long",
//                     value: false,
//                 },
//                 {
//                     key: "Short",
//                     value: false,
//                 },
//                 {
//                     key: "No wool",
//                     value: false,
//                 },
//             ],
//         },
//         {
//             key: "Tail length",
//             conflicting: false,
//             featureTypes: [
//                 {
//                     key: "Long",
//                     value: false,
//                 },
//                 {
//                     key: "Short",
//                     value: false,
//                 },
//                 {
//                     key: "No tail",
//                     value: false,
//                 },
//             ],
//         },
//         {
//             key: "Ears types",
//             conflicting: false,
//             featureTypes: [
//                 {
//                     key: "Sharp",
//                     value: false,
//                 },
//                 {
//                     key: "Sloping",
//                     value: false,
//                 },
//                 {
//                     key: "No ears",
//                     value: false,
//                 },
//             ],
//         },
//         {
//             key: "Face types",
//             conflicting: true,
//             featureTypes: [
//                 {
//                     key: "Oblong",
//                     value: false,
//                 },
//                 {
//                     key: "Flat",
//                     value: false,
//                 },
//             ],
//         },
//         {
//             key: "Color",
//             conflicting: false,
//             featureTypes: [
//                 {
//                     key: "Spotted",
//                     value: false,
//                 },
//                 {
//                     key: "Striped",
//                     value: false,
//                 },
//                 {
//                     key: "Monotonous",
//                     value: false,
//                 },
//             ],
//         },
//     ],
// };

export const Home = () => {
    const access =
        "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNjE2NDU0NTUyLCJqdGkiOiI2OWI2NTRiMmVjZWM0MzIxOTA2MzcyYzNiMjEzOWFkOCIsInVzZXJfaWQiOjF9.mhQP_OW2zLfyDCPplwQyKbfo6Ed9VPfLyOKAdENqOy0";
    return (
        <div className="Home">
            <p>Create Advert</p>
            <div></div>
        </div>
    );
};
