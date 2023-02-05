import { getElementClassName } from '../application/getElementClassName';

export function getSizeNavigation() {
  let response = [];
  const list: any = getElementClassName('k-navigation');
  console.log('MAIN LIST', list);

  if (list !== undefined) {
    for (const index of Object.keys(list) as any) {
      if (list[index]?.className && list[index]?.className?.includes('k-navigation--fixed')) {
        if (
          list[index]?.className?.includes('is-open') &&
          list[index]?.className?.includes('navigation-drawer--temporary') === false
        ) {
          response.push({ size: list[index]?.clientWidth, position: list[index]?.offsetLeft > 100 ? 'right' : 'left' });
        }
      }
    }
  }
  return response;
}
