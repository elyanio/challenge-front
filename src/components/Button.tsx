import React from 'react';
import styled from 'styled-components';
import { Icon, IconNames } from './Icon';
import Label, { LabelProps } from './Label';

interface Props {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  label: string;
  leftIcon?: IconNames;
  rightIcon?: IconNames;
}

interface StyledProps {
  background?: string;
  margin?: string;
  padding?: string;
}

const Button = ({
  onClick,
  label,
  leftIcon,
  rightIcon,
  ...rest
}: Props & LabelProps & StyledProps) => (
  <ButtonStyled onClick={onClick} {...rest}>
    {leftIcon && <Icon name={leftIcon} />}
    <Label color="white" {...rest} margin="0px 5px">
      {label}
    </Label>
    {rightIcon && <Icon name={rightIcon} />}
  </ButtonStyled>
);

export default Button;

const ButtonStyled = styled.button<StyledProps>`
  display: flex;
  align-items: center;
  height: 45px;
  min-width: 100px;
  justify-content: center;
  border-radius: 15px;
  ${({ padding }) => (padding ? `padding: ${padding};` : 'padding: 0px 15px;')}
  border: none;
  cursor: pointer;
  ${({ background }) => (background ? `background: ${background};` : '')}
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
`;
