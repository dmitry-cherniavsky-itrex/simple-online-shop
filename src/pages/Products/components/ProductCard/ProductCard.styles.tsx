import styled from "styled-components";
import {Button} from "../../../../common/components/form/Buttons/Buttons.styles";
export const ProductCardContainer = styled.div`
  height: 350px;
  overflow: hidden;
  width: 100%;
  box-shadow: 0 0 4px gray;
  border-radius: 10px;
  background: white;
  display: flex;
  flex-direction: column;
  
  ${Button} {
    visibility: hidden;
    margin-top: 3px;
  }
  
  &:hover ${Button}{
    visibility: visible;
  }
  
  img {
    transition: transform 0.5s ease;
    height: 50%;
    min-width: 100%;
    object-position: left top;
    object-fit: cover;
  }
  
  .product-info {
    padding: 8px 10px;
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  
  .product-name-price {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    font-weight: bold;
  }
  
  .description {
    flex: 1;
    overflow-y: auto;
  }
`;