/**
 * concatObject
 * @description concat two object
 * @param obj1
 * @param obj2
 * @returns obj3 => concat obj1 & obj2
 */
const concatObject = (obj1: object, obj2: object) => {
  // obj1 => default source
  // obj2 => custom source
  return { ...obj1, ...obj2 };
};

export default concatObject;
