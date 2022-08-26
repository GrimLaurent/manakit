/**
 * Main
 *
 * @type Structural
 * @module Content
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Main.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { ContentType } from '../content/types/Content';
import { useClassHtml } from '../../utils';

//dependencies
import Content from '../content';

const Main: FunctionComponent<ContentType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <Content id={id} className={useClassHtml(`mk-main`, className)} style={style} main>
        <div className="mk-main--wrap">{children}</div>
      </Content>
    </Fragment>
  );
};

export default Main;
