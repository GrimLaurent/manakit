/**
 * Icon
 * @type Structural
 * @module Icon
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  SizeHTML,
} from '../../types';

// styles
import './Icon.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';
import { getClassNameColorScheme } from '../../services/colorScheme';
import MDI from './modules/mdi';

const Icon: FunctionComponent<IconClassType> = ({
  id,
  className,
  style,
  icon,
  dark,
  light,
  color,
  xSmall,
  small,
  large,
  xLarge,
  start,
  end,
}) => {
  const classList = [
    { el: 'mkt-icon--x-small', val: xSmall },
    { el: 'mkt-icon--small', val: small },
    { el: 'mkt-icon--large', val: large },
    { el: 'mkt-icon--x-large', val: xLarge },
    { el: 'mkt-icon--start', val: start },
    { el: 'mkt-icon--end', val: end },
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    {
      el: getClassNameColorScheme(color, dark, light, true),
      val: color !== undefined,
    },
  ];

  return (
    <Fragment>
      <i id={id} className={useClassName('mkt-icon mkt-mdi', className, classList)} style={useStyle({}, style)}>
        <Fragment>
          <MDI color={color} large={large} xLarge={xLarge}>
            {icon}
          </MDI>
        </Fragment>
      </i>
    </Fragment>
  );
};

class IconClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  icon?: any;
  color?: string;
  dark?: boolean;
  light?: boolean;
  xSmall?: boolean;
  small?: boolean;
  large?: boolean;
  xLarge?: boolean;
  start?: boolean;
  end?: boolean;
}

export default Icon;
