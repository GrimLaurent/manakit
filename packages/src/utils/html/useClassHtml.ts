/**
 * useClassHtml
 * @param base
 * @param externalClass
 * @param className
 * @returns string
 */
import { CSSProperties } from 'react';

function useClassHtml(base?: string, externalClass?: string | CSSProperties, className?: object) {
  // base: default className
  // externalClass: props.className ( custom by developer )
  // className: class for module
  let response = base ? base : '';

  if (className) {
    for (const [key, value] of Object.entries(className)) {
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

  if (externalClass) {
    response = response + ' ' + externalClass;
  }

  return response;
}

export default useClassHtml;
