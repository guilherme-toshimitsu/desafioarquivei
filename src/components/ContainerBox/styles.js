import { memo } from "react";
import styled from "styled-components";
import { breakpoints, points } from "@commons/theme";

const StyledContentBox = styled.div`
  box-sizing: border-box;
  position: relative;
  margin: 0 auto;
  min-height: calc(100vh - 92px - 60px);
  min-width: 320px;
  overflow: hidden;
  background-color: #F0F0F0;

  ${breakpoints.sm} {
    padding: 8px,
    maxWidth: ${points.sm}
    margin: 0px 0px 0px 10px;
  }

  ${breakpoints.md} {
    padding: 8px,
    maxWidth: ${points.md}
  }

  ${breakpoints.lg} {
    padding: 8px,
    maxWidth: ${points.lg}
  }
`;

export default memo(StyledContentBox);
