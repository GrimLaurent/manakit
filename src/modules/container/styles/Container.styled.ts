import styled from 'styled-components';
import { ContainerStyledType } from '../types/Container.types';

export const ContainerStyled = styled('section')<ContainerStyledType>`
  width: 100%;
  padding: 12px;
  margin-right: auto;
  margin-left: auto;

  @media (min-width: ${(props) => props.theme.sys.breakpoint.md}) {
    max-width: ${(props) => (props.fluid ? '100%' : '900px')};
  }

  @media (min-width: ${(props) => props.theme.sys.breakpoint.lg}) {
    max-width: ${(props) => (props.fluid ? '100%' : '1185px')};
  }
`;
