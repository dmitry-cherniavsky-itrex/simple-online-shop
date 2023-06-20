import styled from "styled-components";

export const CartDropdownContainer = styled.div`
    position: absolute;
    width: 300px;
    height: 350px;
    display: flex;
    flex-direction: column;
    padding: 20px;
    border: 1px solid #999;
    background-color: white;
    box-shadow: 5px 5px 20px rgba(0, 0, 0, 0.7);
    border-radius: 10px;
    top: 70px;
    right: 20px;

    button {
      margin-top: auto;
    }
`;

export const EmptyPlaceholder = styled.div`
    font-size: 18px;
    margin: 50px auto;
`;

export const CartItemsContainer = styled.div`
    height: 260px;
    display: flex;
    flex-direction: column;
    row-gap: 15px;
    overflow-y: auto;
`;
