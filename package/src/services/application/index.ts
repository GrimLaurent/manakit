export const generateSizeDom = (
  cible: string,
  paramCible: 'height' | 'width',
  objectif: string,
  paramObjectif: 'height' | 'width',
  unit?: string,
) => {
  let value = 0;
  const paramDom = paramCible === 'width' ? 'clientWidth' : 'clientHeight';
  const domCible = document.getElementsByClassName(cible);
  const domObjectif: any = document.getElementsByClassName(objectif);

  // getvalue
  if (domCible && domCible[0] && domCible[0][paramDom]) {
    value = domCible[0][paramDom];
  }

  // setparam
  if (domObjectif && domObjectif[0]) {
    domObjectif[0].style[paramObjectif] = String(value) + unit ? unit : 'px';
  }
};

export function getElHTMLHeight(el: string) {
  const appbarList = document.getElementsByClassName(el);
  if (appbarList && appbarList[0]?.clientHeight) return appbarList[0]?.clientHeight;
  else return 0;
}

export function getElHTMLWidth(el: string, condition?: string) {
  const appbarList = document.getElementsByClassName(el);
  console.log('getElHTMLWidth', appbarList);

  if (condition) {
    if (appbarList && appbarList[0]?.clientHeight && appbarList[0].className.includes(condition))
      return appbarList[0]?.clientWidth;
    else return 0;
  } else {
    if (appbarList && appbarList[0]?.clientHeight) return appbarList[0]?.clientWidth;
    else return 0;
  }
}

import { getElementClassName } from './getElementClassName';
import { getClassNameElevation } from './getClassNameElevation';
import { getClassNameRounded } from './getClassNameRounded';

export { getElementClassName, getClassNameElevation, getClassNameRounded };
