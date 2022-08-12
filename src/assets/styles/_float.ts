import { ThemeApiType } from '../../types';

const float = (config: ThemeApiType) => {
  return `
    .float-left {float: left;}
    .float-right {float: right;}
    .float-none {float: none;}
    .float-start {float: inline-start;}
    .float-end {float: inline-end;}

    @media screen and (min-width: ${config.sys.breakpoint.xs}) {
        .float-xs-left {float: left;}
        .float-xs-right {float: right;}
        .float-xs-none {float: none;}
        .float-xs-start {float: inline-start;}
        .float-xs-end {float: inline-end;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.sm}) {
        .float-sm-left {float: left;}
        .float-sm-right {float: right;}
        .float-sm-none {float: none;}
        .float-sm-start {float: inline-start;}
        .float-sm-end {float: inline-end;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.md}) {
        .float-md-left {float: left;}
        .float-md-right {float: right;}
        .float-md-none {float: none;}
        .float-md-start {float: inline-start;}
        .float-md-end {float: inline-end;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.lg}) {
        .float-lg-left {float: left;}
        .float-lg-right {float: right;}
        .float-lg-none {float: none;}
        .float-lg-start {float: inline-start;}
        .float-lg-end {float: inline-end;}
    }

    @media screen and (min-width: ${config.sys.breakpoint.xl}) {
        .float-xl-left {float: left;}
        .float-xl-right {float: right;}
        .float-xl-none {float: none;}
        .float-xl-start {float: inline-start;}
        .float-xl-end {float: inline-end;}
    }
`;
};

export default float;
