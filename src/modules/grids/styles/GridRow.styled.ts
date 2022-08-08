import styled from 'styled-components';
import { GridStyledType } from '../types/Grid.types';

export const GridRowStyled = styled('div')<GridStyledType>`
  display: flex;
  flex-wrap: wrap;
  flex: 1 1 auto;
  margin: 0 -12px 0;
`;
