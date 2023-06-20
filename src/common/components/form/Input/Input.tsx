import React from "react";

import { StyledInput } from "./Input.styles";
import {ErrorMessage} from "./Input.styles";

interface IInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    error: string
}

const Input : React.FC<IInputProps> = ({children, error, ...otherProps}) => {
    return (
        <>
            <StyledInput {...otherProps} />
            <ErrorMessage>{error}</ErrorMessage>
        </>

    );
};

export default Input;
