import styled from 'styled-components';
import { ListItemAvatarStyledType } from '../types/ListItemAvatar.types';

export const ListItemAvatarStyled = (Avatar: any) => styled(Avatar)`
  align-self: ${(props) => (props.right ? 'flex-start' : props.left ? 'flex-end' : '')};
  margin-right: ${(props) => (props.right ? '16px' : props.left ? '' : '')};
  margin-left: ${(props) => (props.right ? '' : props.left ? '16px' : '')};
  margin-bottom: 16px;
  margin-top: 16px;
  height: 40px;
  min-width: 40px;
  width: 40px;
`;
