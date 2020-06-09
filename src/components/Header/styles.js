import styled from "styled-components";
import { breakpoints } from "@commons/theme";

const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  top: 0;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.main};
  height: 60px;
  cursor: pointer;

  ${breakpoints.sm} {
    height: 40px;
    display: flex;
    flex-direction: column-reverse;
  }
`;

const Img = styled.img`
  margin: auto 0;
  height: 50px;
  ${breakpoints.sm} {
    display: none;
  }
`;

const HeaderButton = styled.button`
  width: 100px;
  height: 60px;
  border: 0px;
  color: white;
  font-size: 24px;
  background-color: ${({ theme }) => theme.colors.main};
`;

export { HeaderContainer, Img, HeaderButton };
