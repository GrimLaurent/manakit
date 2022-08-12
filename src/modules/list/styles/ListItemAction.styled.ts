import styled from 'styled-components';
import { ListItemActionStyledType } from '../types/ListItemAction.types';

export const ListItemActionStyled = styled('div')<ListItemActionStyledType>`
  align-self: center;
  margin: 12px 0;
  display: inline-flex;
  min-width: 24px;
  margin-left: 16px;
  color: ${(props) => props.color};
  caret-color: ${(props) => props.color};
`;
