import { MarginSizeType } from '../../types';

export function generateClassNameMargin(
  ma?: MarginSizeType,
  mt?: MarginSizeType,
  mb?: MarginSizeType,
  ml?: MarginSizeType,
  mr?: MarginSizeType,
  mx?: MarginSizeType,
  my?: MarginSizeType,
  xs?: {
    ma?: MarginSizeType;
    mt?: MarginSizeType;
    mb?: MarginSizeType;
    ml?: MarginSizeType;
    mr?: MarginSizeType;
    mx?: MarginSizeType;
    my?: MarginSizeType;
  },
  sm?: {
    ma?: MarginSizeType;
    mt?: MarginSizeType;
    mb?: MarginSizeType;
    ml?: MarginSizeType;
    mr?: MarginSizeType;
    mx?: MarginSizeType;
    my?: MarginSizeType;
  },
  md?: {
    ma?: MarginSizeType;
    mt?: MarginSizeType;
    mb?: MarginSizeType;
    ml?: MarginSizeType;
    mr?: MarginSizeType;
    mx?: MarginSizeType;
    my?: MarginSizeType;
  },
  lg?: {
    ma?: MarginSizeType;
    mt?: MarginSizeType;
    mb?: MarginSizeType;
    ml?: MarginSizeType;
    mr?: MarginSizeType;
    mx?: MarginSizeType;
    my?: MarginSizeType;
  },
  xl?: {
    ma?: MarginSizeType;
    mt?: MarginSizeType;
    mb?: MarginSizeType;
    ml?: MarginSizeType;
    mr?: MarginSizeType;
    mx?: MarginSizeType;
    my?: MarginSizeType;
  },
) {
  let response = '';

  if (ma) response = response + ' ' + generateClass('ma', ma);
  if (mt) response = response + ' ' + generateClass('mt', mt);
  if (mb) response = response + ' ' + generateClass('mb', mb);
  if (ml) response = response + ' ' + generateClass('ml', ml);
  if (mr) response = response + ' ' + generateClass('mr', mr);
  if (mx) response = response + ' ' + generateClass('mx', mx);
  if (my) response = response + ' ' + generateClass('my', my);
  // XS
  if (xs) {
    if (xs?.ma) response = response + ' ' + generateClass('ma', xs?.ma, 'xs');
    if (xs?.mt) response = response + ' ' + generateClass('mt', xs?.mt, 'xs');
    if (xs?.mb) response = response + ' ' + generateClass('mb', xs?.mb, 'xs');
    if (xs?.ml) response = response + ' ' + generateClass('ml', xs?.ml, 'xs');
    if (xs?.mr) response = response + ' ' + generateClass('mr', xs?.mr, 'xs');
    if (xs?.mx) response = response + ' ' + generateClass('mx', xs?.mx, 'xs');
    if (xs?.my) response = response + ' ' + generateClass('my', xs?.my, 'xs');
  }
  if (sm) {
    if (sm?.ma) response = response + ' ' + generateClass('ma', sm?.ma, 'sm');
    if (sm?.mt) response = response + ' ' + generateClass('mt', sm?.mt, 'sm');
    if (sm?.mb) response = response + ' ' + generateClass('mb', sm?.mb, 'sm');
    if (sm?.ml) response = response + ' ' + generateClass('ml', sm?.ml, 'sm');
    if (sm?.mr) response = response + ' ' + generateClass('mr', sm?.mr, 'sm');
    if (sm?.mx) response = response + ' ' + generateClass('mx', sm?.mx, 'sm');
    if (sm?.my) response = response + ' ' + generateClass('my', sm?.my, 'sm');
  }
  if (md) {
    if (md?.ma) response = response + ' ' + generateClass('ma', md?.ma, 'md');
    if (md?.mt) response = response + ' ' + generateClass('mt', md?.mt, 'md');
    if (md?.mb) response = response + ' ' + generateClass('mb', md?.mb, 'md');
    if (md?.ml) response = response + ' ' + generateClass('ml', md?.ml, 'md');
    if (md?.mr) response = response + ' ' + generateClass('mr', md?.mr, 'md');
    if (md?.mx) response = response + ' ' + generateClass('mx', md?.mx, 'md');
    if (md?.my) response = response + ' ' + generateClass('my', md?.my, 'md');
  }
  if (lg) {
    if (lg?.ma) response = response + ' ' + generateClass('ma', lg?.ma, 'lg');
    if (lg?.mt) response = response + ' ' + generateClass('mt', lg?.mt, 'lg');
    if (lg?.mb) response = response + ' ' + generateClass('mb', lg?.mb, 'lg');
    if (lg?.ml) response = response + ' ' + generateClass('ml', lg?.ml, 'lg');
    if (lg?.mr) response = response + ' ' + generateClass('mr', lg?.mr, 'lg');
    if (lg?.mx) response = response + ' ' + generateClass('mx', lg?.mx, 'lg');
    if (lg?.my) response = response + ' ' + generateClass('my', lg?.my, 'lg');
  }
  if (xl) {
    if (xl?.ma) response = response + ' ' + generateClass('ma', xl?.ma, 'xl');
    if (xl?.mt) response = response + ' ' + generateClass('mt', xl?.mt, 'xl');
    if (xl?.mb) response = response + ' ' + generateClass('mb', xl?.mb, 'xl');
    if (xl?.ml) response = response + ' ' + generateClass('ml', xl?.ml, 'xl');
    if (xl?.mr) response = response + ' ' + generateClass('mr', xl?.mr, 'xl');
    if (xl?.mx) response = response + ' ' + generateClass('mx', xl?.mx, 'xl');
    if (xl?.my) response = response + ' ' + generateClass('my', xl?.my, 'xl');
  }
  return response;
}

function generateClass(key: string, value: any, size?: string) {
  const isNegative = controlIsNegativeValue(value);
  if (isNegative) value.slice(0, 1);
  return `${key} + '-' + (${size} ? ${size} + '-' : '') + (${isNegative} ? 'n' : '') + ${value}`;
}

function controlIsNegativeValue(value: string | number) {
  return String(value).includes('-');
}
