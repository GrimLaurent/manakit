import styled from 'styled-components';
import { getColor } from '../../../utils';
import { SubHeaderStyledType } from '../types/SubHeader.types';

export const SubHeaderStyled = styled('div')<SubHeaderStyledType>`
  align-items: center;
  display: flex;
  height: 48px;
  font-size: 0.875rem;
  font-weight: 400;
  padding: 0 16px;
  opacity: 0.6;
  color: ${(props) => getColor(props.theme, props.color, 'onSurface')};
  margin-left: ${(props) => (props.inset ? '56px' : '')};
`;
