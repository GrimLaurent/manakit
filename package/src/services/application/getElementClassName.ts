export function getElementClassName(el: string) {
  const list = document.getElementsByClassName(el);
  if (list) return list;
  else return undefined;
}
