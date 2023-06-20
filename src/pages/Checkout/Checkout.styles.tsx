import styled from "styled-components";

export const CheckoutContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    text-align: center;
  }
`;

export const OrderItemsList = styled.div`
  background: white;
  padding: 10px 32px;
  border-radius: 10px;
  margin: 32px auto;
  width: 50%;
`;

export const OrderItem = styled.div`
  display: grid;
  grid-template-columns: 6fr 2fr 1fr;
  grid-column-gap: 20px;
  padding: 16px 0;
  align-items: center;

  &:not(:last-child) {
    border-bottom: 1px solid #eee;
  }
  
  button {
    width: 25px;
    height: 25px;
    border: 1px solid gray;
    border-radius: 50%;
    cursor: pointer;
    font-size: 19px;
  }
`;

export const EmptyMessage = styled.p`
    margin-top: 100px;
`;