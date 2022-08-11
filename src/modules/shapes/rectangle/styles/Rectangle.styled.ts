import styled from 'styled-components';
import { RectangleStyledType } from '../types/Rectangle.types';

export const RectangleStyled = styled('div')<RectangleStyledType>`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => props.minWidth};
  max-width: ${(props) => props.maxWidth};

  color: ${(props) => (props.mode !== undefined ? props.theme.themes[props.mode].onBackground : '')};
  caret-color: ${(props) => (props.mode !== undefined ? props.theme.themes[props.mode].onBackground : '')};

  background: ${(props) =>
    props.color ? props.color : props.mode !== undefined ? props.theme.themes[props.mode].background : ''} !important;
  border-color: ${(props) =>
    props.color ? props.color : props.mode !== undefined ? props.theme.themes[props.mode].background : ''} !important;
`;
