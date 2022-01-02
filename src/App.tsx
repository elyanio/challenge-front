import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { Tab } from './components';
import theme from './style/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Container>
        <Tab tabs={['button 1', 'button 2']} />
      </Container>
    </ThemeProvider>
  );
}

const Container = styled.div`
  margin: 30px;
`;

export default App;
