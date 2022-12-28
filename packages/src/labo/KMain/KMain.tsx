/**
 * KMain
 * @type Structural
 * @module KMain
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { MainClassType } from './KMain.type';

// styles
import './KMain.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';

const KMain: FunctionComponent<MainClassType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <main id={id} className={useClassName('k-main', className)} style={useStyle({}, style)} data-booted="true">
        <div className="k-main--wrap">{children}</div>
      </main>
    </Fragment>
  );
};

export default KMain;
