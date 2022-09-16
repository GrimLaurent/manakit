/**
 * useRatio
 * @param value
 * @returns
 */
const useRatio = (value?: string | number) => {
  let response = value;

  if (typeof value === 'string') {
    const str = value.split('/');
    if (typeof str === 'object') {
      response = (100 * Number(str[1])) / Number(str[0]);
    }
  }
  return String(response) + '%';
};

export default useRatio;
