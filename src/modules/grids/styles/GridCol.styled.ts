import styled from 'styled-components';
import { GridColStyledType } from '../types/GridCol.types';

export const GridColStyled = styled('div')<GridColStyledType>`
  width: 100%;

  // Col
  flex: ${(props) => (props.cols ? `0 0 calc((100% / 12) * ${props.cols} )` : '')};
  max-width: ${(props) => (props.cols ? `calc((100% / 12) * ${props.cols} )` : '')};
  margin-left: ${(props) => (props.offset ? `calc((100% / 12) * ${props.offset} )` : '')};
  order: ${(props) => (props.order ? props.order : '')};
  align-items: ${(props) => (props.alignSelf ? props.alignSelf : '')};
  align-self: ${(props) => (props.alignSelf ? props.alignSelf : '')};

  @media (min-width: ${(props) => props.theme.sys.breakpoint.xs}) {
    flex: ${(props) => (props.xs ? `0 0 calc((100% / 12) * ${props.xs} )` : '')};
    max-width: ${(props) => (props.xs ? `calc((100% / 12) * ${props.xs} )` : '')};
    margin-left: ${(props) => (props.offsetXs ? `calc((100% / 12) * ${props.offsetXs} )` : '')};
    order: ${(props) => (props.offsetXs ? props.offsetXs : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.sm}) {
    flex: ${(props) => (props.sm ? `0 0 calc((100% / 12) * ${props.sm} )` : '')};
    max-width: ${(props) => (props.sm ? `calc((100% / 12) * ${props.sm} )` : '')};
    margin-left: ${(props) => (props.offsetSm ? `calc((100% / 12) * ${props.offsetSm} )` : '')};
    order: ${(props) => (props.offsetSm ? props.offsetSm : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.md}) {
    flex: ${(props) => (props.md ? `0 0 calc((100% / 12) * ${props.md} )` : '')};
    max-width: ${(props) => (props.md ? `calc((100% / 12) * ${props.md} )` : '')};
    margin-left: ${(props) => (props.offsetMd ? `calc((100% / 12) * ${props.offsetMd} )` : '')};
    order: ${(props) => (props.offsetMd ? props.offsetMd : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.lg}) {
    flex: ${(props) => (props.lg ? `0 0 calc((100% / 12) * ${props.lg} )` : '')};
    max-width: ${(props) => (props.lg ? `calc((100% / 12) * ${props.lg} )` : '')};
    margin-left: ${(props) => (props.offsetLg ? `calc((100% / 12) * ${props.offsetLg} )` : '')};
    order: ${(props) => (props.offsetLg ? props.offsetLg : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.xl}) {
    flex: ${(props) => (props.xl ? `0 0 calc((100% / 12) * ${props.xl} )` : '')};
    max-width: ${(props) => (props.xl ? `calc((100% / 12) * ${props.xl} )` : '')};
    margin-left: ${(props) => (props.offsetXl ? `calc((100% / 12) * ${props.offsetXl} )` : '')};
    order: ${(props) => (props.offsetXl ? props.offsetXl : '')};
  }
`;
