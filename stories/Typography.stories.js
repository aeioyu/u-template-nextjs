import React, { Fragment } from 'react';
import { Canon, Paragon } from '@/components/Typography';

export default {
  title: 'Design/Typography',
  component: Canon,
};

const Template = (args) => (
  <Fragment>
    <Canon color="maroonFlush">Canon</Canon>
    <Paragon>Paragon</Paragon>
  </Fragment>
);

export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };
