import { memo } from "react";
import styled from "styled-components";
import { breakpoints, points } from "@commons/theme";

const Title = memo(styled.p`
  color: ${({ theme }) => theme.colors.main};
  font-size: 32px;
  font-weight: bold;
  margin-top: 24px;
`);

const Text = memo(styled.p`
  color: ${({ theme }) => theme.colors.text};
  font-size: 16px;
  margin-top: 24px;
`);

export { Title, Text };
