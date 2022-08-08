import styled from 'styled-components';
import { ViewStyledType } from '../types/View.types';

export const ContainerStyled = styled('div')<ViewStyledType>`
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${(props) => props.theme.sys.breakpoint.xs}) {
    max-width: 100%;
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.md}) {
    max-width: ${(props) => (props.fluid ? '100%' : '900px')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.lg}) {
    max-width: ${(props) => (props.fluid ? '100%' : '1185px')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.xl}) {
    max-width: ${(props) => (props.fluid ? '100%' : '1785px')};
  }
`;
