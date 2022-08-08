import styled from 'styled-components';
import { GridColStyledType } from '../types/GridCol.types';

export const GridColStyled = styled('div')<GridColStyledType>`
  width: 100%;

  // Col
  flex: ${(props) => (props.col ? `0 0 calc((100% / 12) * ${props.col} )` : '')};
  max-width: ${(props) => (props.col ? `calc((100% / 12) * ${props.col} )` : '')};

  @media (min-width: ${(props) => props.theme.sys.breakpoint.xs}) {
    flex: ${(props) => (props.col ? `0 0 calc((100% / 12) * ${props.col} )` : '')};
    max-width: ${(props) => (props.col ? `calc((100% / 12) * ${props.col} )` : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.sm}) {
    flex: ${(props) => (props.col ? `0 0 calc((100% / 12) * ${props.col} )` : '')};
    max-width: ${(props) => (props.col ? `calc((100% / 12) * ${props.col} )` : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.md}) {
    flex: ${(props) => (props.col ? `0 0 calc((100% / 12) * ${props.col} )` : '')};
    max-width: ${(props) => (props.col ? `calc((100% / 12) * ${props.col} )` : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.lg}) {
    flex: ${(props) => (props.col ? `0 0 calc((100% / 12) * ${props.col} )` : '')};
    max-width: ${(props) => (props.col ? `calc((100% / 12) * ${props.col} )` : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.xl}) {
    flex: ${(props) => (props.col ? `0 0 calc((100% / 12) * ${props.col} )` : '')};
    max-width: ${(props) => (props.col ? `calc((100% / 12) * ${props.col} )` : '')};
  }
`;
