import styled from 'styled-components';
import { ListItemIconStyledType } from '../types/ListItemIcon.types';

export const ListItemIconStyled = styled('div')<ListItemIconStyledType>`
  align-self: flex-start;
  margin: 16px 0;
  display: inline-flex;

  min-width: 24px;
  height: 24px;
  margin-right: 32px;
  margin-top: 8px;
  margin-bottom: 8px;
`;
