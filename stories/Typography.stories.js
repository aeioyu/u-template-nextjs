import React, { Fragment } from 'react';
import { Caption, Heading1, Heading2, Heading3, Heading4, Heading5, SubHeading, Body } from '@/components/Typography';

export default {
  title: 'Design/Typography',
  component: Heading1,
};

// const Template = (args) => <Heading1 color="maroonFlush"> This is Primary</Heading1>;

export const Summary = () => (
  <div>
    <Heading1>Heading 1</Heading1>
    <Heading2>Heading 2</Heading2>
    <Heading3>Heading 3</Heading3>
    <Heading4>Heading 4</Heading4>
    <Heading5>Heading 5</Heading5>
    <br />
    <SubHeading>Sub Heading</SubHeading>
    <Body>Body</Body>
    <br />
    <Caption>Caption</Caption>
  </div>
);
// Overall.args = {
//   primary: true,
//   label: 'Button',
// };
