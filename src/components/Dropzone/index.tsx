import React, { FC } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import "./style.scss";

interface IProps {
    isOpen: boolean;
    setIsOpen: (isOpen: boolean) => void;
    handleSave: () => void;
}

export const Dropzone = ({ isOpen, setIsOpen, handleSave }: IProps) => {
    const handleClose = () => {
        setIsOpen(false);
    };
    return (
        <DropzoneDialog
            open={isOpen}
            onSave={handleSave}
            acceptedFiles={["image/jpeg", "image/png", "image/bmp"]}
            showPreviews={true}
            maxFileSize={5000000}
            onClose={handleClose}
        />
    );
};
