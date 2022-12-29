/**
 * structuralString
 * @description transforme string with char Uppercase to Lowercase + '-' separator
 * @param string
 * @param obj2
 * @returns string ('helloWorld => hello-world)
 */
export const structuralString = (string: string) => {
  let i = 0;
  let varKey = '';
  while (i < string.length) {
    const char = string.charAt(i);
    if (char !== '' && char == char.toUpperCase()) {
      varKey = `${varKey}-${char.toLowerCase()}`;
    } else {
      varKey = `${varKey}${char}`;
    }
    ++i;
  }
  return varKey;
};

/**
 * concatObject
 * @description concat two object
 * @param obj1
 * @param obj2
 * @returns obj3 => concat obj1 & obj2
 */
export const concatObject = (obj1: object, obj2: object) => {
  // obj1 => default source
  // obj2 => custom source
  return { ...obj1, ...obj2 };
};
