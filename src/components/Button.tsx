import React from 'react';
import styled from 'styled-components';
import Label, { LabelProps } from './Label';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
}

interface StyledProps {
  background?: string;
  margin?: string;
}

const Button = ({
  onClick,
  label,
  ...rest
}: Props & LabelProps & StyledProps) => (
  <ButtonStyled onClick={onClick} {...rest}>
    <Label color="white" {...rest}>
      {label}
    </Label>
  </ButtonStyled>
);

export default Button;

const ButtonStyled = styled.button<StyledProps>`
  height: 45px;
  border-radius: 15px;
  padding: 0px 20px;
  border: none;
  cursor: pointer;
  ${({ background }) => (background ? `background: ${background};` : '')}
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
`;
