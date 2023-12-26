/**
 * Container
 * @type Structural
 * @module Container
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
} from '../../../types';

// styles
import './Container.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../utils/dom';
import { getClassNameColorScheme } from '../../../services/colorScheme';

const Container: FunctionComponent<ContainerClassType> = ({
  id,
  className,
  style,
  children,
  dark,
  light,
  color,
  fluid,
  fillHeight,
}) => {
  const classList = [
    { el: 'is--fluid', val: fluid },
    { el: 'fill-height', val: fillHeight },
    { el: 'theme--light', val: light },
    { el: 'theme--dark', val: dark },
    {
      el: getClassNameColorScheme(color, dark, light),
      val: color !== undefined,
    },
  ];

  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-container', className, classList)} style={useStyle({}, style)}>
        <Fragment>{children}</Fragment>
      </div>
    </Fragment>
  );
};

class ContainerClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  color?: string;
  dark?: boolean;
  light?: boolean;
  fluid?: boolean;
  fillHeight?: boolean;
}

export default Container;
