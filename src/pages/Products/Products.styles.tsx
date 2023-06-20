import styled from "styled-components";
export const ProductsContainer = styled.div`
  width: 100%;
  max-width: 1024px;
  min-width: 600px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 20px;
  grid-row-gap: 40px;
`;