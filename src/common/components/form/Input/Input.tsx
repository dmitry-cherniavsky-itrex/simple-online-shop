import React from "react";

import {StyledInput} from "./Input.styles";
import {ErrorMessage} from "./Input.styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error: string
}

export const Input = ({error, ...inputProps} : IInputProps) => {
    return (
        <>
            <StyledInput {...inputProps} />
            <ErrorMessage>{error}</ErrorMessage>
        </>
    );
};
