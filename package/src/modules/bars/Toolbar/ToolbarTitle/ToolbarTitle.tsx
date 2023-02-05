/**
 * ToolbarTitle
 * @type Structural
 * @module ToolbarTitle
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ToolbarTitleClassType } from './ToolbarTitle.type';

// styles
import './ToolbarTitle.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../../../utils/dom';

const ToolbarTitle: FunctionComponent<ToolbarTitleClassType> = ({
  id,
  className,
  style,
  children,
  foregroundColor,
  backgroundColor,
}) => {
  return (
    <Fragment>
      <div
        id={id}
        className={useClassName(`k-toolbar-title`, className, undefined, {
          color: foregroundColor,
          background: backgroundColor,
        })}
        style={useStyle({}, style)}
      >
        <Fragment>{children}</Fragment>
      </div>
    </Fragment>
  );
};

export default ToolbarTitle;
