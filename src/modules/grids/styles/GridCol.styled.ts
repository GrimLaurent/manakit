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

  @media (min-width: ${(props) => props.theme.sys.breakpoint.xs}) {
    flex: ${(props) => (props.cols ? `0 0 calc((100% / 12) * ${props.cols} )` : '')};
    max-width: ${(props) => (props.cols ? `calc((100% / 12) * ${props.cols} )` : '')};
    margin-left: ${(props) => (props.offsetXs ? `calc((100% / 12) * ${props.offsetXs} )` : '')};
    order: ${(props) => (props.offsetXs ? props.offsetXs : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.sm}) {
    flex: ${(props) => (props.cols ? `0 0 calc((100% / 12) * ${props.cols} )` : '')};
    max-width: ${(props) => (props.cols ? `calc((100% / 12) * ${props.cols} )` : '')};
    margin-left: ${(props) => (props.offsetSm ? `calc((100% / 12) * ${props.offsetSm} )` : '')};
    order: ${(props) => (props.offsetSm ? props.offsetSm : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.md}) {
    flex: ${(props) => (props.cols ? `0 0 calc((100% / 12) * ${props.cols} )` : '')};
    max-width: ${(props) => (props.cols ? `calc((100% / 12) * ${props.cols} )` : '')};
    margin-left: ${(props) => (props.offsetMd ? `calc((100% / 12) * ${props.offsetMd} )` : '')};
    order: ${(props) => (props.offsetMd ? props.offsetMd : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.lg}) {
    flex: ${(props) => (props.cols ? `0 0 calc((100% / 12) * ${props.cols} )` : '')};
    max-width: ${(props) => (props.cols ? `calc((100% / 12) * ${props.cols} )` : '')};
    margin-left: ${(props) => (props.offsetLg ? `calc((100% / 12) * ${props.offsetLg} )` : '')};
    order: ${(props) => (props.offsetLg ? props.offsetLg : '')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.xl}) {
    flex: ${(props) => (props.cols ? `0 0 calc((100% / 12) * ${props.cols} )` : '')};
    max-width: ${(props) => (props.cols ? `calc((100% / 12) * ${props.cols} )` : '')};
    margin-left: ${(props) => (props.offsetXl ? `calc((100% / 12) * ${props.offsetXl} )` : '')};
    order: ${(props) => (props.offsetXl ? props.offsetXl : '')};
  }
`;
