import styled from 'styled-components';
import { ListItemAvatarStyledType } from '../types/ListItemAvatar.types';

export const ListItemAvatarStyled = styled('div')<ListItemAvatarStyledType>`
  align-self: flex-start;
  margin-right: 16px;

  .mk-list-item--avatar {
    margin-bottom: 16px;
    margin-top: 16px;
    height: 40px;
    min-width: 40px;
    width: 40px;
  }
`;
