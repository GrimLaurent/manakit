/**
 * isExistElementStorage
 * @param key
 * @returns
 */
const isExistElementStorage = (key: string) => {
  return !!localStorage.getItem(key);
};

export default isExistElementStorage;
