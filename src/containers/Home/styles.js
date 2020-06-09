import { memo } from "react";
import styled from "styled-components";
import { breakpoints, points } from "@commons/theme";

const HomeContainer = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  min-height: calc(100vh - 92px - 60px);
  min-width: 320px;
  max-width: 900px
  overflow: hidden;
  padding: 24px;
  background-color: #F0F0F0;

  ${breakpoints.sm} {
    padding: 8px,
    max-width: 320px
  }

  ${breakpoints.md} {
    padding: 8px,
    max-width: 600px
  }

  ${breakpoints.lg} {
    padding: 8px,
    max-width: 600px
  }
`;

const PromotionTitle = styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 32px;
  font-weight: bold;
  margin: 24px;
`;

const PromotionText = styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin: 24px;
`;

const ButtonContainer = styled.div`
  margin-top: 140px;
  display: flex;
  justify-content: flex-end;
  ${breakpoints.sm} {
    justify-content: flex-start;
  }
`;

export { HomeContainer, PromotionTitle, PromotionText, ButtonContainer };
