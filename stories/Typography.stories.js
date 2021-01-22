import React, { Fragment } from 'react';
import { Canon, Paragon } from '@/components/Typography';
import { ThemeProvider } from '@emotion/react';
import theme from '@/configs/theme.config';

export default {
  title: 'Design/Typography',
  component: Canon,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Canon color="mantis">Canon</Canon>
        <Story />
      </ThemeProvider>
    ),
  ],
};

const Template = (args) => (
  <Fragment>
    <Canon color="mantis">Canon</Canon>
    <Paragon>Paragon</Paragon>
  </Fragment>
);

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
