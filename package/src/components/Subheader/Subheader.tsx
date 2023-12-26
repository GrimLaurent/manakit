/**
 * SubHeader
 * @type Structural
 * @module SubHeader
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../types';

// styles
import './SubHeader.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';
import { getClassNameColorScheme } from '../../services/colorScheme';

const SubHeader: FunctionComponent<SubHeaderClassType> = ({
  id,
  className,
  style,
  children,
  inset,
  dark,
  light,
  color,
}) => {
  const classList = [
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    { el: 'mkt-subheader--inset', val: inset },
    {
      el: getClassNameColorScheme(color, dark, light, true),
      val: color !== undefined,
    },
  ];

  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-subheader', className, classList)} style={useStyle({}, style)}>
        <Fragment>{children}</Fragment>
      </div>
    </Fragment>
  );
};

class SubHeaderClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  dark?: boolean;
  light?: boolean;
  inset?: boolean;
  color?: string;
}

export default SubHeader;
