/**
 * useSizeHtml
 * @param value
 * @returns string
 */

function useSizeHtml(value?: number | string) {
  const type = typeof value;

  switch (type) {
    case 'number':
      return value + 'px';
    case 'string':
      if (isNaN(value as never)) {
        return value;
      } else {
        const obj = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

        for (let v of obj) {
          if ((value as string)!.includes(v)) {
            return value + 'px';
          }
        }

        return value;
      }
    default:
      return value === undefined ? undefined : '';
  }
}

export default useSizeHtml;
