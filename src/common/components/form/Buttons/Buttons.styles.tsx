import styled from "styled-components";

import { formFieldStyleBase } from "../FormField.style";

export const Button = styled.button`
  ${formFieldStyleBase};
  border: none;
  background: #222;
  color: #f8f8f3;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;

  &:hover {
    background: #911f1f;
    color: #fff;
  }

  &:active {
    background: #6e1616;
    color: #c08e8e;
    box-shadow: inset 0 0 5px #3d1010;
  }
`;

export const SecondaryButton = styled.button`
  background: none;
  border: none;
  color: #7850fa;
  font-size: 13px;
  text-decoration: underline;
  cursor: pointer;
`;
