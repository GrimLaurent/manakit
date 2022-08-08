import styled from 'styled-components';
import { GridStyledType } from '../types/Grid.types';

export const GridStyled = styled('div')<GridStyledType>`
  width: 100%;
  padding: ${(props) => (props.noGutter ? '6px' : '12px')};
  margin-right: auto;
  margin-left: auto;
`;
