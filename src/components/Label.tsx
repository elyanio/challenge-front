import styled from 'styled-components';

export interface LabelProps {
  color?: string;
  size?: string;
  cursor?: string;
}

const Label = styled.p<LabelProps>`
  ${({ cursor }) => (cursor ? `cursor: ${cursor}` : '')};
  color: ${({ color }: Partial<LabelProps>) => color || 'black'};
  font-size: ${({ size }: Partial<LabelProps>) => size || '14px'};
`;

export default Label;
