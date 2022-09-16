/**
 * setElementStorage
 * @param key
 * @param value
 */
const setElementStorage = (key: string, value: unknown) => {
  localStorage.setItem(key, JSON.stringify(value));
};

export default setElementStorage;
