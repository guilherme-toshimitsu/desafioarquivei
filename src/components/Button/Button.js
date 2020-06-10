import { memo } from "react";
import styled, { css } from "styled-components";

const StyledButton = styled.button.attrs((props) => ({
  disabled: props.disabled || false,
}))`
  width: 100px;
  min-height: 40px;
  border: 0px;
  border-radius: 4px;
  margin: 0 12px 0 12px;
  color: white;
  font-size: 16px;
  outline: none;
  background-color: ${({ theme }) => theme.colors.main}
    ${({ disabled }) =>
      disabled &&
      css`
        height: 60px;
        background-color: ${({ theme }) => theme.colors.disabled};
      `};
`;

export default memo(StyledButton);
