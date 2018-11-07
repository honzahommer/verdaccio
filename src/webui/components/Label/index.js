/**
 * @prettier
 * @flow
 */

import React from 'react';
import styled from 'react-emotion';
import { fontWeight } from '../../utils/styles/sizes';
import colors from '../../utils/styles/colors';
import ellipsis from '../../utils/styles/ellipsis';

import type { Node } from 'react';
import { IProps } from './types';

// TODO
const Wrapper = styled.span`
  font-weight: ${({ weight }) => fontWeight[weight]};
  text-transform: ${({ capitalize }) => (capitalize ? 'capitalize' : 'none')};
  ${props => props.limit && ellipsis(props.limit)};
  ${props => props.primary && `color: ${colors.primary}`};
`;

const Label = ({ text = '', capitalize = false, weight = 'regular', ...props }: IProps): Node => (
  <Wrapper weight={weight} capitalize={capitalize} {...props}>
    {text}
  </Wrapper>
);

export default Label;
