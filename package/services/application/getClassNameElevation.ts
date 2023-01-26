import { ElevationClass } from '../../types';

export function getClassNameElevation(d: ElevationClass, v?: ElevationClass) {
  // d: param default for component
  // v: value state for developer
  const valueType = typeof v;
  switch (valueType) {
    case 'boolean':
      return `elevation-${d}`;
    case 'string':
    case 'number':
      return `elevation-${v}`;
    default:
      return '';
  }
}
