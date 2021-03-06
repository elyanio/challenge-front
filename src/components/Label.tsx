import styled from 'styled-components';

export interface LabelProps {
  color?: string;
  size?: string;
  cursor?: string;
  fontWeight?: string;
  margin?: string;
}

const Label = styled.p<LabelProps>`
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : '')};
  color: ${({ color }: LabelProps) => color || 'black'};
  font-size: ${({ size }: LabelProps) => size || '16px'};
  font-weight: ${({ fontWeight }: LabelProps) => fontWeight || 'normal'};
  margin: ${({ margin }: LabelProps) => (margin ? `${margin}` : '0px')};
`;

export default Label;
