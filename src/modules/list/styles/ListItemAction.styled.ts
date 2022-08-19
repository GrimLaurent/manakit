import styled from 'styled-components';
import { getColor } from '../../../utils';
import { ListItemActionStyledType } from '../types/ListItemAction.types';

export const ListItemActionStyled = styled('div')<ListItemActionStyledType>`
  align-self: center;
  margin: 12px 0;
  display: inline-flex;
  min-width: 24px;
  margin-left: 16px;
  color: ${(props) => getColor(props.theme, props.color, 'onSurface')};
  caret-color: ${(props) => getColor(props.theme, props.color, 'onSurface')};
`;
