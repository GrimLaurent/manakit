import styled from 'styled-components';
import { ListItemSubTitleStyledType } from '../types/ListItemSubTitle.types';

export const ListItemSubTitleStyled = styled('div')<ListItemSubTitleStyledType>`
  line-height: 1.2;
  font-size: 0.875rem;
  flex: 1 1 100%;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  opacity: 0.6;
`;
