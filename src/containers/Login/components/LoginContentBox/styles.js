import { memo } from "react";
import styled from "styled-components";
import { breakpoints, points } from "@commons/theme";

const LoginContentBox = styled.div`
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

export default memo(LoginContentBox);
