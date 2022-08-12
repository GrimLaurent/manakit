import styled from 'styled-components';
import { ListStyledType } from '../types/List.types';

export const ListStyled = (Paper: any) => styled(Paper)`
  display: block;
  padding: 8px 0;
  position: static;
  transition: box-shadow 0.28s cubic-bezier(0.4, 0, 0.2, 1);
  border-radius: ${(props) => props.roundedChild};
  padding-left: ${(props) => (props.nav ? '8px' : '')};
  padding-right: ${(props) => (props.nav ? '8px' : '')};

  .mk-subheader {
    ${(props) =>
      props.subHeader &&
      props.dense &&
      `
        height: 40px;
        font-size: 0.75rem;
        padding: 0 8px;
    `}

    ${(props) =>
      props.subHeader &&
      props.dense !== true &&
      `
        height: 48px;
        font-size: 0.875rem;
        padding: 0 16px;
    `}
  }

  .mk-list--item {
    ${(props) =>
      props.dense &&
      props.twoLine !== true &&
      props.threeLine !== true &&
      `
     min-height: 40px;
  `}

    ${(props) =>
      props.dense !== true &&
      props.twoLine &&
      props.threeLine !== true &&
      `
     min-height: 64px;
  `}

    ${(props) =>
      props.dense !== true &&
      props.twoLine !== true &&
      props.threeLine &&
      `
        min-height: 88px;
    `}
  }
`;
