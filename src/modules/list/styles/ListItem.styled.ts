import styled from 'styled-components';
import { ListItemStyledType } from '../types/ListItem.types';

export const ListItemStyled = styled('div')<ListItemStyledType>`
  align-items: center;
  display: flex;
  flex: 1 1 100%;
  letter-spacing: normal;
  min-height: ${(props) =>
    props.twoLine
      ? props.dense
        ? '40px'
        : '64px'
      : props.threeLine
      ? props.dense
        ? '40px'
        : '88px'
      : props.dense
      ? '40px'
      : '48px'};
  outline: none;
  padding: 0 16px;
  position: relative;
  text-decoration: none;
  color: ${(props) => props.color};
  caret-color: ${(props) => props.color};
`;
