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
        return value + 'px';
      }
    default:
      return '';
  }
}

export default useSizeHtml;
