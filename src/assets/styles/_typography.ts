import { ThemeApiType } from '../../types';

const typography = (config: ThemeApiType) => {
  return `
    .text-left {text-align: left;}
    .text-center {text-align: center;}
    .text-right {text-align: right;}

    @media screen and (min-width: ${config.sys.breakpoint.xs}) {
        .text-xs-left {text-align: left;}
        .text-xs-center {text-align: center;}
        .text-xs-right {text-align: right;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.sm}) {
        .text-sm-left {text-align: left;}
        .text-sm-center {text-align: center;}
        .text-sm-right {text-align: right;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.md}) {
        .text-md-left {text-align: left;}
        .text-md-center {text-align: center;}
        .text-md-right {text-align: right;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.lg}) {
        .text-lg-left {text-align: left;}
        .text-lg-center {text-align: center;}
        .text-lg-right {text-align: right;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.xl}) {
        .text-xl-left {text-align: left;}
        .text-xl-center {text-align: center;}
        .text-xl-right {text-align: right;}
    }
`;
};

export default typography;
