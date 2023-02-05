/**
 * getElementStorage
 * @param key
 * @returns
 */
export const getElementStorage = (key: string) => {
  const data = localStorage.getItem(key);
  if (data !== undefined && data !== null) {
    return JSON.parse(String(data));
  } else {
    return null;
  }
};

/**
 * isExistElementStorage
 * @param key
 * @returns
 */
export const isExistElementStorage = (key: string) => {
  return !!localStorage.getItem(key);
};

/**
 * setElementStorage
 * @param key
 * @param value
 */
export const setElementStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};
