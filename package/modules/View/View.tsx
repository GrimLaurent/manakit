/**
 * View
 * @type Structural
 * @module View
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ViewClassType } from './View.type';

// styles
import './View.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';

const View: FunctionComponent<ViewClassType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <main id={id} className={useClassName('k-view', className)} style={useStyle({}, style)} data-booted="true">
        <div className="k-view--wrap">{children}</div>
      </main>
    </Fragment>
  );
};

export default View;
