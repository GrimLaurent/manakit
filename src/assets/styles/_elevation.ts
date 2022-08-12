import { ThemeApiType } from '../../types';
import { formatColorToRgba } from '../../utils';

const elevation = (config: ThemeApiType) => {
  const colorLight1 = formatColorToRgba(config.themes.light.shadow, 0.2);
  const colorLight2 = formatColorToRgba(config.themes.light.shadow, 0.14);
  const colorLight3 = formatColorToRgba(config.themes.light.shadow, 0.12);
  const colorDark1 = formatColorToRgba(config.themes.dark.shadow, 0.2);
  const colorDark2 = formatColorToRgba(config.themes.dark.shadow, 0.14);
  const colorDark3 = formatColorToRgba(config.themes.dark.shadow, 0.12);
  return `
  
    .theme--light {
        .elevation-none {
            box-shadow: 0 0 0 0 ${colorLight1}, 0 0 0 0 ${colorLight2}, 0 0 0 0 ${colorLight3};
        }
        .elevation-1 {
            box-shadow: 0 2px 1px -1px ${colorLight1}, 0 1px 1px 0 ${colorLight2}, 0 1px 3px 0 ${colorLight3};
        }
        .elevation-2 {
            box-shadow: 0 3px 1px -2px ${colorLight1}, 0 2px 2px 0 ${colorLight2}, 0 1px 5px 0 ${colorLight3};
        }
        .elevation-3 {
            box-shadow: 0 3px 3px -2px ${colorLight1}, 0 3px 4px 0 ${colorLight2}, 0 1px 8px 0 ${colorLight3};
        }
        .elevation-4 {
            box-shadow: 0 2px 4px -1px ${colorLight1}, 0 4px 5px 0 ${colorLight2}, 0 1px 10px 0 ${colorLight3};
        }
        .elevation-5 {
            box-shadow: 0 3px 5px -1px ${colorLight1}, 0 5px 8px 0 ${colorLight2}, 0 1px 14px 0 ${colorLight3};
        }
        .elevation-6 {
            box-shadow: 0 3px 5px -1px ${colorLight1}, 0 6px 10px 0 ${colorLight2}, 0 1px 18px 0 ${colorLight3};
        }
        .elevation-7 {
            box-shadow: 0 4px 5px -2px ${colorLight1}, 0 7px 10px 1px ${colorLight2}, 0 2px 16px 1px ${colorLight3};
        }
        .elevation-8 {
            box-shadow: 0 5px 5px -3px ${colorLight1}, 0 8px 10px 1px ${colorLight2}, 0 3px 14px 2px ${colorLight3};
        }
        .elevation-9 {
            box-shadow: 0 5px 6px -3px ${colorLight1}, 0 9px 12px 1px ${colorLight2}, 0 3px 16px 2px ${colorLight3};
        }
        .elevation-10 {
            box-shadow: 0 6px 6px -3px ${colorLight1}, 0 10px 14px 1px ${colorLight2}, 0 4px 18px 3px ${colorLight3};
        }
        .elevation-11 {
            box-shadow: 0 6px 7px -4px ${colorLight1}, 0 11px 15px 1px ${colorLight2}, 0 4px 20px 3px ${colorLight3};
        }
        .elevation-12 {
            box-shadow: 0 6px 7px -4px ${colorLight1}, 0 11px 15px 1px ${colorLight2}, 0 4px 20px 3px ${colorLight3};
        }
        .elevation-13 {
            box-shadow: 0 7px 8px -4px ${colorLight1}, 0 13px 19px 2px ${colorLight2}, 0 5px 24px 4px ${colorLight3};
        }
        .elevation-14 {
            box-shadow: 0 7px 9px -4px ${colorLight1}, 0 14px 21px 2px ${colorLight2}, 0 5px 26px 4px ${colorLight3};
        }
        .elevation-15 {
            box-shadow: 0 8px 9px -5px ${colorLight1}, 0 15px 22px 2px ${colorLight2}, 0 6px 28px 5px ${colorLight3};
        }
        .elevation-16 {
            box-shadow: 0 8px 10px -5px ${colorLight1}, 0 16px 24px 2px ${colorLight2}, 0 6px 30px 5px ${colorLight3};
        }
        .elevation-17 {
            box-shadow: 0 8px 11px -5px ${colorLight1}, 0 17px 26px 2px ${colorLight2}, 0 6px 32px 5px ${colorLight3};
        }
        .elevation-18 {
            box-shadow: 0 9px 11px -5px ${colorLight1}, 0 18px 28px 2px ${colorLight2}, 0 7px 34px 6px ${colorLight3};
        }
        .elevation-19 {
            box-shadow: 0 9px 12px -6px ${colorLight1}, 0 19px 29px 2px ${colorLight2}, 0 7px 36px 6px ${colorLight3};
        }
        .elevation-20 {
            box-shadow: 0 10px 13px -6px ${colorLight1}, 0 20px 31px 3px ${colorLight2}, 0 8px 38px 7px ${colorLight3};
        }
        .elevation-21 {
            box-shadow: 0 10px 13px -6px ${colorLight1}, 0 21px 33px 3px ${colorLight2}, 0 8px 40px 7px ${colorLight3};
        }
        .elevation-22 {
            box-shadow: 0 10px 14px -6px ${colorLight1}, 0 22px 35px 3px ${colorLight2}, 0 8px 42px 7px ${colorLight3};
        }
        .elevation-23 {
            box-shadow: 0 11px 14px -7px ${colorLight1}, 0 23px 36px 3px ${colorLight2}, 0 9px 44px 8px ${colorLight3};
        }
        .elevation-24 {
            box-shadow: 0 11px 15px -7px ${colorLight1}, 0 24px 38px 3px ${colorLight2}, 0 9px 46px 8px ${colorLight3};
        }
    }

    .theme--dark {
         .elevation-none {
            box-shadow: 0 0 0 0 ${colorDark1}, 0 0 0 0 ${colorDark2}, 0 0 0 0 ${colorDark3};
        }
        .elevation-1 {
            box-shadow: 0 2px 1px -1px ${colorDark1}, 0 1px 1px 0 ${colorDark2}, 0 1px 3px 0 ${colorDark3};
        }
        .elevation-2 {
            box-shadow: 0 3px 1px -2px ${colorDark1}, 0 2px 2px 0 ${colorDark2}, 0 1px 5px 0 ${colorDark3};
        }
        .elevation-3 {
            box-shadow: 0 3px 3px -2px ${colorDark1}, 0 3px 4px 0 ${colorDark2}, 0 1px 8px 0 ${colorDark3};
        }
        .elevation-4 {
            box-shadow: 0 2px 4px -1px ${colorDark1}, 0 4px 5px 0 ${colorDark2}, 0 1px 10px 0 ${colorDark3};
        }
        .elevation-5 {
            box-shadow: 0 3px 5px -1px ${colorDark1}, 0 5px 8px 0 ${colorDark2}, 0 1px 14px 0 ${colorDark3};
        }
        .elevation-6 {
            box-shadow: 0 3px 5px -1px ${colorDark1}, 0 6px 10px 0 ${colorDark2}, 0 1px 18px 0 ${colorDark3};
        }
        .elevation-7 {
            box-shadow: 0 4px 5px -2px ${colorDark1}, 0 7px 10px 1px ${colorDark2}, 0 2px 16px 1px ${colorDark3};
        }
        .elevation-8 {
            box-shadow: 0 5px 5px -3px ${colorDark1}, 0 8px 10px 1px ${colorDark2}, 0 3px 14px 2px ${colorDark3};
        }
        .elevation-9 {
            box-shadow: 0 5px 6px -3px ${colorDark1}, 0 9px 12px 1px ${colorDark2}, 0 3px 16px 2px ${colorDark3};
        }
        .elevation-10 {
            box-shadow: 0 6px 6px -3px ${colorDark1}, 0 10px 14px 1px ${colorDark2}, 0 4px 18px 3px ${colorDark3};
        }
        .elevation-11 {
            box-shadow: 0 6px 7px -4px ${colorDark1}, 0 11px 15px 1px ${colorDark2}, 0 4px 20px 3px ${colorDark3};
        }
        .elevation-12 {
            box-shadow: 0 6px 7px -4px ${colorDark1}, 0 11px 15px 1px ${colorDark2}, 0 4px 20px 3px ${colorDark3};
        }
        .elevation-13 {
            box-shadow: 0 7px 8px -4px ${colorDark1}, 0 13px 19px 2px ${colorDark2}, 0 5px 24px 4px ${colorDark3};
        }
        .elevation-14 {
            box-shadow: 0 7px 9px -4px ${colorDark1}, 0 14px 21px 2px ${colorDark2}, 0 5px 26px 4px ${colorDark3};
        }
        .elevation-15 {
            box-shadow: 0 8px 9px -5px ${colorDark1}, 0 15px 22px 2px ${colorDark2}, 0 6px 28px 5px ${colorDark3};
        }
        .elevation-16 {
            box-shadow: 0 8px 10px -5px ${colorDark1}, 0 16px 24px 2px ${colorDark2}, 0 6px 30px 5px ${colorDark3};
        }
        .elevation-17 {
            box-shadow: 0 8px 11px -5px ${colorDark1}, 0 17px 26px 2px ${colorDark2}, 0 6px 32px 5px ${colorDark3};
        }
        .elevation-18 {
            box-shadow: 0 9px 11px -5px ${colorDark1}, 0 18px 28px 2px ${colorDark2}, 0 7px 34px 6px ${colorDark3};
        }
        .elevation-19 {
            box-shadow: 0 9px 12px -6px ${colorDark1}, 0 19px 29px 2px ${colorDark2}, 0 7px 36px 6px ${colorDark3};
        }
        .elevation-20 {
            box-shadow: 0 10px 13px -6px ${colorDark1}, 0 20px 31px 3px ${colorDark2}, 0 8px 38px 7px ${colorDark3};
        }
        .elevation-21 {
            box-shadow: 0 10px 13px -6px ${colorDark1}, 0 21px 33px 3px ${colorDark2}, 0 8px 40px 7px ${colorDark3};
        }
        .elevation-22 {
            box-shadow: 0 10px 14px -6px ${colorDark1}, 0 22px 35px 3px ${colorDark2}, 0 8px 42px 7px ${colorDark3};
        }
        .elevation-23 {
            box-shadow: 0 11px 14px -7px ${colorDark1}, 0 23px 36px 3px ${colorDark2}, 0 9px 44px 8px ${colorDark3};
        }
        .elevation-24 {
            box-shadow: 0 11px 15px -7px ${colorDark1}, 0 24px 38px 3px ${colorDark2}, 0 9px 46px 8px ${colorDark3};
        }
    }
   
`;
};

export default elevation;
