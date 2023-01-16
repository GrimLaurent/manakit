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

/**
 * getClassColor
 * @param color
 * @param backgroundColor
 * @returns string
 */
function getClassColor(c?: string, b?: string) {
  let response = '';
  if (c !== undefined) {
    if ((c as string)!.includes('.')) {
      const el = c!.slice(1);
      response = response + ' ' + `${el}--text`;
    }
  }
  if (b !== undefined) {
    if ((b as string)!.includes('.')) {
      const el = b!.slice(1);
      response = response + ' ' + `${el}`;
    }
  }

  return response.trim();
}

export default getClassColor;
