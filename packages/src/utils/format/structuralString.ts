/**
 * structuralString
 * @description transforme string with char Uppercase to Lowercase + '-' separator
 * @param string
 * @param obj2
 * @returns string ('helloWorld => hello-world)
 */
const structuralString = (string: string) => {
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

export default structuralString;
