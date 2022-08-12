import styled from 'styled-components';
import { ListItemTitleStyledType } from '../types/ListItemTitle.types';

export const ListItemTitleStyled = styled('div')<ListItemTitleStyledType>`
  line-height: 1.2;
  align-self: center;
  font-size: 1rem;
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;
