/**
 * getElementStorage
 * @param key
 * @returns
 */
const getElementStorage = (key: string) => {
  const data = localStorage.getItem(key);
  console.log(key);
  if (data !== undefined && data !== null) {
    return JSON.parse(String(data));
  } else {
    return null;
  }
};

export default getElementStorage;
