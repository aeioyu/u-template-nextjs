import React from 'react';
import styled from '@emotion/styled';
import { space, color, typography } from 'styled-system';
import theme from '@/configs/theme.config';

const { heading1, heading2, heading3, heading4, heading5, subHeading, body, caption } = theme.textStyles;

const StyledDynamicComponent = styled.div`
  ${space}
  ${color}
  ${typography}
`;

/**
 * Design guide for Typography component.
 */
export const Heading1 = (props) => (
  <StyledDynamicComponent {...heading1} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Heading2 = (props) => (
  <StyledDynamicComponent {...heading2} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Heading3 = (props) => (
  <StyledDynamicComponent {...heading3} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Heading4 = (props) => (
  <StyledDynamicComponent {...heading4} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Heading5 = (props) => (
  <StyledDynamicComponent {...heading5} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const SubHeading = (props) => (
  <StyledDynamicComponent {...subHeading} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Body = (props) => (
  <StyledDynamicComponent {...body} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Caption = (props) => (
  <StyledDynamicComponent {...caption} {...props}>
    {props.children}
  </StyledDynamicComponent>
);
