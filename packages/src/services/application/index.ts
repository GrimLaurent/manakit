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
