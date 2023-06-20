import styled from "styled-components";

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  column-gap: 16px;
  height: 80px;

  & > img {
    height: 60px;
    width: 25%;
    object-position: left top;
    object-fit: cover;
  }
  
  & > button {
    appearance: none;
    border: none;
    background: transparent;
    cursor: pointer;
  }
`;

export const ItemDetails = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;