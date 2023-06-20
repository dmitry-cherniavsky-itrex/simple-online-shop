import styled from "styled-components";
import CartIconAsset from "../../../../assets/shopping-bag.svg";
export const CartIconContainer = styled.div`
  background-image: url(${CartIconAsset});
  background-repeat: no-repeat;
  width: 50px;
  height: 50px;
  text-align: center;
  font-weight: bold;
  padding-top: 22px;
  cursor: pointer;
`;