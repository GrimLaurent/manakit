export const useColor = (d: string, color?: string, dark?: boolean, light?: boolean) => {
  if (color) {
    if (light) {
      return `${color}-light`;
    } else if (dark) {
      return `${color}-dark`;
    } else {
      return `${color}`;
    }
  } else {
    if (light) {
      return `${d}-light`;
    } else if (dark) {
      return `${d}-dark`;
    } else {
      return `${d}`;
    }
  }
};
