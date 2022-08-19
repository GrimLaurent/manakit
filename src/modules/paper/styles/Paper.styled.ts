import styled from 'styled-components';
import { PaperStyledType } from '../types/Paper.types';
import { formatColorToRgba, getColor, getRounded } from '../../../utils';

export const PaperStyled = styled('div')<PaperStyledType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};
  border-radius: ${(props) => getRounded(props.theme, props.rounded, 'none')};
  border: ${(props) =>
    props.outlined ? 'thin solid ' + getColor(props.theme, props.color + ' 0.12', 'onSurface', props.mode) : ''};
  color: ${(props) => getColor(props.theme, props.color, 'onSurface', props.mode)};
  caret-color: ${(props) => getColor(props.theme, props.color, 'onSurface', props.mode)};
  background: ${(props) =>
    props.outlined ? 'transparent' : getColor(props.theme, props.background, 'surface', props.mode)};
`;
