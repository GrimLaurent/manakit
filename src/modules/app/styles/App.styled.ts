import styled from 'styled-components';
import { AppType, AppStyledType } from '../types/App.types';

export const ApplicationStyled = styled('div')<AppStyledType>`
  background: ${(props) => props.theme.themes[props.theme.mode.use].background};
  border-color: ${(props) => props.theme.themes[props.theme.mode.use].background};
  color: ${(props) => props.theme.themes[props.theme.mode.use].onBackground};
  caret-color: ${(props) => props.theme.themes[props.theme.mode.use].onBackground};
  transform-origin: center top 0px;
  display: flex;
  position: relative;
`;

export const ApplicationWrapsStyled = styled('div')<AppType>`
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
`;
