import { getElementClassName } from '../application/getElementClassName';

export function getSizeSystemBar() {
  let response = [];
  const list: any = getElementClassName('mkt-system-bar');
  console.log('MAIN LIST', list);

  if (list !== undefined) {
    for (const index of Object.keys(list) as any) {
      if (list[index]?.className && list[index]?.className?.includes('is--app')) {
        response = list[index]?.clientHeight;
      }
    }
  }
  return response;
}
