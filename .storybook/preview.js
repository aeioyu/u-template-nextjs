import React from 'react';
import { ThemeProvider } from '@emotion/react';
import theme from '../configs/theme.config';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <div style={{ margin: '3em' }}>
      <Story />
    </div>
  ),
];

// export const decorators = [
//   (Story) => (
//     <ThemeProvider theme={theme}>
//       <Story />
//     </ThemeProvider>
//   ),
// ];
