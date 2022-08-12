import { ThemeApiType } from '../../types';

const display = (config: ThemeApiType) => {
  return `
    .d-none {display: none;}
    .d-inline {display: inline;}
    .d-inline-block {display: inline-block;}
    .d-block {display: block;}
    .d-table {display: table;}
    .d-table-cell {display: table-cell;}
    .d-table-row {display: table-row;}
    .d-flex {display: flex;}
    .d-inline-flex {display: inline-flex;}
    .d-flex {display: flex;}
    .d-inline-flex {display: inline-flex;}

    @media screen and (min-width: ${config.sys.breakpoint.xs}) {
        .d-xs-none {display: none;}
        .d-xs-inline {display: inline;}
        .d-xs-inline-block {display: inline-block;}
        .d-xs-block {display: block;}
        .d-xs-table {display: table;}
        .d-xs-table-cell {display: table-cell;}
        .d-xs-table-row {display: table-row;}
        .d-xs-flex {display: flex;}
        .d-xs-inline-flex {display: inline-flex;}
        .d-xs-flex {display: flex;}
        .d-xs-inline-flex {display: inline-flex;}
    }
    @media screen and (min-width: ${config.sys.breakpoint.sm}) {
        .d-sm-none {display: none;}
        .d-sm-inline {display: inline;}
        .d-sm-inline-block {display: inline-block;}
        .d-sm-block {display: block;}
        .d-sm-table {display: table;}
        .d-sm-table-cell {display: table-cell;}
        .d-sm-table-row {display: table-row;}
        .d-sm-flex {display: flex;}
        .d-sm-inline-flex {display: inline-flex;}
        .d-sm-flex {display: flex;}
        .d-sm-inline-flex {display: inline-flex;}
    }
    @media screen and (min-width: ${config.sys.breakpoint.md}) {
        .d-md-none {display: none;}
        .d-md-inline {display: inline;}
        .d-md-inline-block {display: inline-block;}
        .d-md-block {display: block;}
        .d-md-table {display: table;}
        .d-md-table-cell {display: table-cell;}
        .d-md-table-row {display: table-row;}
        .d-md-flex {display: flex;}
        .d-md-inline-flex {display: inline-flex;}
    }
    @media screen and (min-width: ${config.sys.breakpoint.lg}) {
        .d-lg-none {display: none;}
        .d-lg-inline {display: inline;}
        .d-lg-inline-block {display: inline-block;}
        .d-lg-block {display: block;}
        .d-lg-table {display: table;}
        .d-lg-table-cell {display: table-cell;}
        .d-lg-table-row {display: table-row;}
        .d-lg-flex {display: flex;}
        .d-lg-inline-flex {display: inline-flex;}
    }
    @media screen and (min-width: ${config.sys.breakpoint.xl}) {
        .d-xl-none {display: none;}
        .d-xl-inline {display: inline;}
        .d-xl-inline-block {display: inline-block;}
        .d-xl-block {display: block;}
        .d-xl-table {display: table;}
        .d-xl-table-cell {display: table-cell;}
        .d-xl-table-row {display: table-row;}
        .d-xl-flex {display: flex;}
        .d-xl-inline-flex {display: inline-flex;}
    }
`;
};

export default display;
