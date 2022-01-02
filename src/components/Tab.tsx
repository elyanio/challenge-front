import React, { PropsWithChildren, useCallback } from 'react';
import styled, { useTheme } from 'styled-components';
import { Theme } from '../style/theme';
import Button from './Button';

interface Props {
  tabs: string[];
  selectedIndex?: number;
  onClick: (index: number) => void;
}

const Tab = ({
  tabs,
  children,
  selectedIndex = 0,
  onClick,
}: PropsWithChildren<Props>) => {
  const theme = useTheme() as Theme;
  const defaultBg = theme.palette.backgrounds.purple;
  const selectedBg = theme.palette.backgrounds.darkslateblue;
  const onClickCallback = useCallback(
    (index: number) => () => {
      onClick(index);
    },
    [onClick],
  );
  return (
    <Container>
      <Header>
        {tabs.map((t, i) => (
          <Button
            key={Math.random()}
            label={t}
            margin="0px 15px 0px 0px"
            background={selectedIndex === i ? selectedBg : defaultBg}
            onClick={onClickCallback(i)}
          />
        ))}
      </Header>
      <div>{children}</div>
    </Container>
  );
};

const Container = styled.div`
  border: 2px solid gray;
  border-radius: 10px;
  min-height: 500px;
`;

const Header = styled.div`
  display: flex;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  padding: 15px 0px 15px 15px;
  background: lightgray;
`;

export default Tab;
