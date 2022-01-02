/* eslint-disable no-confusing-arrow */
import React, { useMemo, useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Button, Label, Spinner, Tab } from './components';
import useLoadUser from './services/useLoadUsers';
import theme from './style/theme';
import getUserByModule from './utils';

function App() {
  const { red, goldenrod, lightcoral, lightseagreen, purple } =
    theme.palette.backgrounds;

  const { users, loading, error } = useLoadUser();

  // states
  const [currModuleTypeIndex, setCurrModuleType] = useState(0);
  const [currModuleIndex, setcurrModuleIndex] = useState(0);

  const modules = useMemo(() => getUserByModule(users), [users]);

  // getting entries of the current module type (auth or content)
  const currModulesType = useMemo(() => {
    const tmp =
      currModuleTypeIndex === 0 ? modules.content_module : modules.auth_module;
    return Object.entries(tmp).sort(([a], [b]) => (a > b ? 1 : -1));
  }, [currModuleTypeIndex, modules.auth_module, modules.content_module]);

  const modulesName = useMemo(
    () =>
      currModulesType.map(([k]) => {
        const arr = k.split('_');
        return `Module ${arr[arr.length - 1]}`;
      }),
    [currModulesType],
  );

  // getting the current users by current module
  const currUsers = useMemo(() => {
    const currEntry = currModulesType[currModuleIndex] || [];
    return currEntry.length ? currEntry[1] : [];
  }, [currModuleIndex, currModulesType]);

  const currUsersName = useMemo(() => {
    // getting only unique values
    const dataSet = new Set(currUsers);
    const unique = [...(dataSet as unknown as Array<string>)];

    const usersNumbers = unique.map((ele) =>
      Number(ele.replace('/u', '').replace('.json', '')),
    );
    const softed = usersNumbers.sort((a, b) => (a > b ? 1 : -1));
    return softed.map((ele) => `User ${ele}`);
  }, [currUsers]);

  if (loading) return <Spinner />;

  if (error) {
    return (
      <Container margin="30px">
        <Label>{`An error has occurred: ${error?.message || 'Unknown'}`}</Label>
      </Container>
    );
  }

  return (
    <ThemeProvider theme={theme}>
      <Container margin="30px">
        <Tab
          tabs={['Content_module', 'Auth_module']}
          selectedIndex={currModuleTypeIndex}
          onClick={setCurrModuleType}>
          <Container margin="10px 15px 12px 15px">
            <Tab
              tabs={modulesName || []}
              selectedIndex={currModuleIndex}
              onClick={setcurrModuleIndex}>
              <InfoPanel>
                <Label fontWeight="bold">
                  {`Number of users in module ${currUsersName.length}:`}
                </Label>
              </InfoPanel>
              <List>
                {currUsersName.map((user) => (
                  <Button
                    key={Math.random()}
                    label={user}
                    margin="15px 0px 0px 0px"
                    background={purple}
                    cursor="default"
                  />
                ))}
              </List>
              <ActionPanel>
                <Button
                  key={Math.random()}
                  label="Delete"
                  margin="10px 15px 0px 0px"
                  padding="0px 5px 0px 10px"
                  background={red}
                  rightIcon="trash"
                />
                <Button
                  key={Math.random()}
                  label="Advice"
                  margin="10px 15px 0px 0px"
                  padding="0px 5px 0px 10px"
                  background={goldenrod}
                  rightIcon="lightBulb"
                />
                <Button
                  key={Math.random()}
                  label="Create"
                  margin="10px 15px 0px 0px"
                  padding="0px 10px 0px 5px"
                  background={lightcoral}
                  color="black"
                  leftIcon="plusCircle"
                />
                <Button
                  key={Math.random()}
                  label="Submit"
                  margin="10px 15px 0px 0px"
                  padding="0px 5px 0px 10px"
                  background={lightseagreen}
                  rightIcon="rightArrow"
                />
              </ActionPanel>
            </Tab>
          </Container>
        </Tab>
      </Container>
    </ThemeProvider>
  );
}

interface StyledProps {
  margin?: string;
}

const Container = styled.div<StyledProps>`
  ${({ margin }) => (margin ? `margin: ${margin};` : '')}
`;

const InfoPanel = styled.div<StyledProps>`
  padding: 20px 20px;
`;

const List = styled.div<StyledProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 150px;
`;

const ActionPanel = styled.div<StyledProps>`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  margin: 25px 10px;
`;

export default App;
