/**
 * SystemBar
 *
 * @type Structural
 * @module SystemBar
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './SystemBar.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { SystemBarType } from './types/SystemBar';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

const SystemBar: FunctionComponent<SystemBarType> = ({
  id,
  className,
  style,
  children,
  absolute,
  fixed,
  height,
  app,
}) => {
  const classList = [
    { el: 'system-bar--absolute', val: absolute },
    { el: 'system-bar--fixed', val: fixed },
    { el: 'system-bar--fixed', val: app },
  ];

  const styleList = {
    height: useSizeHtml(height),
  };

  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml('mk-system-bar', className, classList)}
        style={useStyleHtml(styleList, style)}
      >
        {children}
      </div>
    </Fragment>
  );
};

export default SystemBar;
