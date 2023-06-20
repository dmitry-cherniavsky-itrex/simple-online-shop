import styled from "styled-components";

import { formFieldStyleBase } from "../FormField.style";

export const StyledInput = styled.input`
  ${formFieldStyleBase};
  border: 2px solid #bfc9da;
  font-size: 100%;
  
  &:active {
    box-shadow: inset 0 0 5px #619151;
  }
`;

export const ErrorMessage = styled.div`
  position: absolute;
  color: darkred;
  font-size: 13px;
  top: 100%;
  left: 12px;
`;
