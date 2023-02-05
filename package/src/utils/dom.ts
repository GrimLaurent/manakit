import { CSSProperties } from 'react';
import getClassColor from './color';

export const useId = (d?: string, n?: string) => {
  // d: default id
  // n: props.id ( custom by developer )
  return n ? n : d ? d : '';
};

export const useClassName = (
  d?: string,
  x?: string | CSSProperties,
  c?: object,
  t?: { color?: unknown; background?: unknown },
) => {
  // d: default className
  // x: props.className ( custom by developer )
  // c: class for module
  // t: colorTheme for module
  let response = d ? d : '';
  if (c) {
    for (const [key, value] of Object.entries(c)) {
      switch (typeof value.val) {
        case 'boolean':
          if (value.val) response = response + ' ' + value.el;
          break;
        case 'string':
        case 'number':
          response = response + ' ' + value.el + '-' + value.val;
          break;
      }
    }
  }
  if (t) {
    const color = typeof t?.color === 'string' ? t?.color : undefined;
    const background = typeof t?.background === 'string' ? t?.background : undefined;

    response = response + ' ' + getClassColor(color, background);
  }
  if (x) {
    response = response + ' ' + x;
  }
  return response.trim();
};

export const useStyle = (m?: object, x?: object, a?: object) => {
  // d: style for module
  // x: props.style ( custom by developer )
  // a: style with additional props
  let response = m ? m : {};
  if (x) response = Object.assign({}, response, x);
  if (a) response = Object.assign({}, response, a);
  return response;
};

export const useSize = (v?: number | string) => {
  // v: value
  const type = typeof v;
  switch (type) {
    case 'number':
      return v + 'px';
    case 'string':
      if (isNaN(v as never)) {
        return v;
      } else {
        if (v !== '' && v !== undefined) {
          const obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

          for (let e of obj) {
            if ((v as string)!.includes(e)) {
              return v + 'px';
            }
          }

          return v;
        } else {
          return '0px';
        }
      }
    default:
      return v === undefined ? undefined : '';
  }
};
