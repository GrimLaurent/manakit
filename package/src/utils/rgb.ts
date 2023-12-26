/**
 * rgb
 * @param color
 * @returns string
 */
function rgb(v?: any) {
  let response = '';

  if (v?.includes('#')) {
    // is hexa
    const color = v.substring(1);
    const aRgbHex = color.match(/.{1,2}/g);
    const aRgb = [parseInt(aRgbHex![0], 16), parseInt(aRgbHex![1], 16), parseInt(aRgbHex![2], 16)];

    //response = `rgb(${aRgb[0]}, ${aRgb[1]}, ${aRgb[2]})`;
    response = String(aRgb);
    console.log('rgb', aRgb, response);
  } else if (v !== undefined) {
    response = v;
  }

  return response.trim();
}

export default rgb;
