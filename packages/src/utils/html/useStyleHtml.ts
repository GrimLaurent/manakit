/**
 * useStyleHtml
 * @param value
 * @returns string
 */

function useStyleHtml(moduleStyle: object, customStyle?: object, additional?: object) {
  let response = moduleStyle;

  if (customStyle) response = Object.assign({}, response, customStyle);
  if (additional) response = Object.assign({}, response, additional);

  return response;
}

export default useStyleHtml;
