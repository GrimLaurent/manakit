import styled from 'styled-components';
import { PaperStyledType } from '../types/Paper.types';
import { formatColorToRgba } from '../../../utils';

export const PaperStyled = styled('div')<PaperStyledType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  border-radius: ${(props) => props.rounded};
  border: ${(props) => (props.outlined ? 'thin solid ' + formatColorToRgba(String(props.color), 0.12) : '')};
  color: ${(props) => props.color};
  caret-color: ${(props) => props.color};
  background: ${(props) => (props.outlined ? 'transparent' : props.background)};
`;
