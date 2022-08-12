import { ThemeApiType } from '../../types';

const overflow = (config: ThemeApiType) => {
  return `
    .overflow-auto {overflow: auto;}
    .overflow-hidden {overflow: hidden;}
    .overflow-visible {overflow: visible;}
    .overflow-x-auto {overflow-x: auto;}
    .overflow-x-hidden {overflow-x: hidden;}
    .overflow-x-visible {overflow-x: visible;}
    .overflow-y-auto {overflow-y: auto;}
    .overflow-y-hidden {overflow-y: hidden;}
    .overflow-y-visible {overflow-y: visible;}

    @media screen and (min-width: ${config.sys.breakpoint.xs}) {
        .overflow-xs-auto {overflow: auto;}
        .overflow-xs-hidden {overflow: hidden;}
        .overflow-xs-visible {overflow: visible;}
        .overflow-xs-x-auto {overflow-x: auto;}
        .overflow-xs-x-hidden {overflow-x: hidden;}
        .overflow-xs-x-visible {overflow-x: visible;}
        .overflow-xs-y-auto {overflow-y: auto;}
        .overflow-xs-y-hidden {overflow-y: hidden;}
        .overflow-xs-y-visible {overflow-y: visible;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.sm}) {
        .overflow-sm-auto {overflow: auto;}
        .overflow-sm-hidden {overflow: hidden;}
        .overflow-sm-visible {overflow: visible;}
        .overflow-sm-x-auto {overflow-x: auto;}
        .overflow-sm-x-hidden {overflow-x: hidden;}
        .overflow-sm-x-visible {overflow-x: visible;}
        .overflow-sm-y-auto {overflow-y: auto;}
        .overflow-sm-y-hidden {overflow-y: hidden;}
        .overflow-sm-y-visible {overflow-y: visible;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.md}) {
        .overflow-md-auto {overflow: auto;}
        .overflow-md-hidden {overflow: hidden;}
        .overflow-md-visible {overflow: visible;}
        .overflow-md-x-auto {overflow-x: auto;}
        .overflow-md-x-hidden {overflow-x: hidden;}
        .overflow-md-x-visible {overflow-x: visible;}
        .overflow-md-y-auto {overflow-y: auto;}
        .overflow-md-y-hidden {overflow-y: hidden;}
        .overflow-md-y-visible {overflow-y: visible;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.lg}) {
        .overflow-lg-auto {overflow: auto;}
        .overflow-lg-hidden {overflow: hidden;}
        .overflow-lg-visible {overflow: visible;}
        .overflow-lg-x-auto {overflow-x: auto;}
        .overflow-lg-x-hidden {overflow-x: hidden;}
        .overflow-lg-x-visible {overflow-x: visible;}
        .overflow-lg-y-auto {overflow-y: auto;}
        .overflow-lg-y-hidden {overflow-y: hidden;}
        .overflow-lg-y-visible {overflow-y: visible;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.xl}) {
        .overflow-xl-auto {overflow: auto;}
        .overflow-xl-hidden {overflow: hidden;}
        .overflow-xl-visible {overflow: visible;}
        .overflow-xl-x-auto {overflow-x: auto;}
        .overflow-xl-x-hidden {overflow-x: hidden;}
        .overflow-xl-x-visible {overflow-x: visible;}
        .overflow-xl-y-auto {overflow-y: auto;}
        .overflow-xl-y-hidden {overflow-y: hidden;}
        .overflow-xl-y-visible {overflow-y: visible;}
    }
`;
};

export default overflow;
