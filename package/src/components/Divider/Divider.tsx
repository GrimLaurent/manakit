/**
 * Divider
 * @type Structural
 * @module Divider
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ElementIdHTMLType, ElementClassHTMLType, ElementStyleHTMLType } from '../../types';

// styles
import './Divider.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { getClassNameColorScheme } from '../../services/colorScheme';

const Divider: FunctionComponent<DividerClassType> = ({
  id,
  className,
  style,
  inset,
  thickness,
  color,
  dark,
  light,
  vertical,
}) => {
  const classList = [
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    { el: 'mkt-divider--inset', val: inset },
    { el: 'mkt-divider--vertical', val: vertical },
    {
      el: getClassNameColorScheme(color, dark, light, true),
      val: color !== undefined,
    },
  ];

  const styleList = {
    borderTopWidth: !vertical ? useSize(thickness) : undefined,
    borderRightWidth: vertical ? useSize(thickness) : undefined,
  };

  return (
    <Fragment>
      <hr
        id={id}
        className={useClassName('mkt-divider', className, classList)}
        style={useStyle(styleList, style)}
        aria-orientation={vertical ? 'vertical' : 'horizontal'}
        role="separator"
      />
    </Fragment>
  );
};

class DividerClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  inset?: boolean;
  thickness?: string | number;
  color?: string;
  dark?: boolean;
  light?: boolean;
  vertical?: boolean;
}

export default Divider;
