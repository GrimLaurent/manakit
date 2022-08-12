import styled from 'styled-components';
import { AvatarStyledType } from '../types/Avatar.types';

export const AvatarStyled = styled('div')<AvatarStyledType>`
  width: ${(props) => (props.width ? props.width : props.size)};
  height: ${(props) => (props.height ? props.height : props.size)};
  min-height: ${(props) => props.minHeight};
  max-height: ${(props) => props.maxHeight};
  min-width: ${(props) => (props.minWidth ? props.minWidth : props.size)};
  max-width: ${(props) => props.maxWidth};
  border-radius: ${(props) => props.rounded};
  align-items: center;
  display: inline-flex;
  justify-content: center;
  line-height: normal;
  position: relative;
  text-align: center;
  vertical-align: middle;
  overflow: hidden;
  background: ${(props) => props.color};

  img {
    border-radius: inherit;
    display: inline-flex;
    height: inherit;
    width: inherit;
  }
`;
