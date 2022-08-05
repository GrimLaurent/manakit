import styled from 'styled-components';
import { AppType, ApplicationStyledType } from '../types/App.types';

export const Application = styled('div')<ApplicationStyledType>`
  background: ${(props) => props.theme.themes[props.mode].background};
  border-color: ${(props) => props.theme.themes[props.mode].background};
  color: ${(props) => props.theme.themes[props.mode].onBackground};
  caret-color: ${(props) => props.theme.themes[props.mode].onBackground};

  transform-origin: center top 0px;
  display: flex;
  position: relative;
`;

export const ApplicationWrap = styled('div')<AppType>`
  flex: 1 1 auto;
  backface-visibility: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 100%;
  position: relative;
`;
