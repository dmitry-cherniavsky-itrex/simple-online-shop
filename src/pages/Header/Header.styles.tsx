import styled from "styled-components";

export const HeaderContainer = styled.div`
  height: 100px;
  padding: 16px 0;
  display: flex;
  justify-content: space-between;

  a {
    text-decoration: none;
  }
`;

export const PageWrapper = styled.div`
  width: 100%;
  max-width: 1024px;
  min-width: 600px;
  display: flex;
  flex-direction: column;
  padding-bottom: 32px;
  position: relative;
`;

export const Logo = styled.div`
  text-transform: uppercase;
  color: #414141;
  font-weight: 600;
  font-size: 30pt;
`;