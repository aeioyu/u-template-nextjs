import React from 'react';
import styled from '@emotion/styled';
import { space, color, typography } from 'styled-system';
import propTypes from '@styled-system/prop-types';
import theme from '@/configs/theme.config';

const { canon, trafalgar, paragon, greatPrimer, doublePica, bodyCopy, pica, code } = theme.textStyles;

const StyledDynamicComponent = styled.div`
  ${space}
  ${color}
  ${typography}
`;

StyledDynamicComponent.propTypes = {
  ...propTypes.space,
  ...propTypes.color,
  ...propTypes.typography,
};

export const Canon = (props) => (
  <StyledDynamicComponent {...canon} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Trafalgar = (props) => (
  <StyledDynamicComponent {...trafalgar} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Paragon = (props) => (
  <StyledDynamicComponent {...paragon} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const GreatPrimer = (props) => (
  <StyledDynamicComponent {...greatPrimer} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const DoublePica = (props) => (
  <StyledDynamicComponent {...doublePica} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const BodyCopy = (props) => (
  <StyledDynamicComponent {...bodyCopy} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Pica = (props) => (
  <StyledDynamicComponent {...pica} {...props}>
    {props.children}
  </StyledDynamicComponent>
);

export const Code = (props) => (
  <StyledDynamicComponent {...code} {...props}>
    {props.children}
  </StyledDynamicComponent>
);
