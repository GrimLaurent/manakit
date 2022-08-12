import styled from 'styled-components';
import { ListItemContentStyledType } from '../types/ListItemContent.types';

export const ListItemContentStyled = styled('div')<ListItemContentStyledType>`
  align-items: center;
  align-self: center;
  display: flex;
  flex-wrap: wrap;
  flex: 1 1;
  overflow: hidden;
  padding: 12px 0;
`;
