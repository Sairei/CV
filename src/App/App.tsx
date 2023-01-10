import React from 'react';

import { MantineProvider } from '@mantine/core';

import AppRouter from './AppRouter';


function App() {
  return (
    <MantineProvider withGlobalStyles withCSSVariables withNormalizeCSS>
      <AppRouter />
    </MantineProvider>
  );
}

export default App;
