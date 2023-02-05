export function getClassNameColorScheme(
  color?: string,
  dark?: boolean,
  light?: boolean,
  text?: boolean,
  outlined?: boolean,
) {
  const theme = dark ? 'dark' : light ? 'light' : false;

  let response = '';
  if (color !== undefined) {
    // sys class manakit
    if (outlined) {
      // border + text
      if (theme) {
        response = response + ' ' + `${color}-${theme}--outlined` + ' ' + `${color}-${theme}--text`;
      } else {
        response = response + ' ' + `${color}--outlined` + ' ' + `${color}--text`;
      }
    } else if (text) {
      // text
      if (theme) {
        response = response + ' ' + `${color}-${theme}--text`;
      } else {
        response = response + ' ' + `${color}--text`;
      }
    } else {
      //background + border
      if (theme) {
        response = response + ' ' + `${color}-${theme}`;
      } else {
        response = response + ' ' + `${color}`;
      }
    }
  }

  return response;
}
