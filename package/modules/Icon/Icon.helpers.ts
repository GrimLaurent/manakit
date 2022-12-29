/**
 * getSizeSVG
 *
 * @param xSmall
 * @param small
 * @param large
 * @param xLarge
 * @param dense
 */

function getSizeSVG(xSmall?: boolean, small?: boolean, large?: boolean, xLarge?: boolean, dense?: boolean) {
  if (xSmall) {
    return '12px';
  } else if (small) {
    return '16px';
  } else if (large) {
    return '36px';
  } else if (xLarge) {
    return '40px';
  } else if (dense) {
    return '20px';
  } else {
    return '24px';
  }
}

export default getSizeSVG;
