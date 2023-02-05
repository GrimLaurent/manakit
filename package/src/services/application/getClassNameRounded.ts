import { RoundedClass_Extended } from '../../types';

export function getClassNameRounded(d: RoundedClass_Extended, v?: RoundedClass_Extended) {
  // d: param default for component
  // v: value state for developer
  const defaultType = typeof d;
  const valueType = typeof v;
  switch (valueType) {
    case 'boolean':
      if (defaultType === 'boolean') {
        return `rounded`;
      } else {
        return `rounded-${d}`;
      }
    case 'string':
    case 'number':
      return `rounded-${v}`;
    default:
      return '';
  }
}
