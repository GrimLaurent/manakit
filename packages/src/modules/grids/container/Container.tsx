/**
 * Container
 *
 * @type Structural
 * @module Content
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Container.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { ContainerType } from './types/Container';
import { useClassHtml } from '../../../utils';

//dependencies
import Content from '../../content';

const Container: FunctionComponent<ContainerType> = ({ id, className, style, children, fluid, fillHeight }) => {
  const classList = [
    { el: 'is--fluid', val: fluid },
    { el: 'fill-height ', val: fillHeight },
  ];

  return (
    <Fragment>
      <Content id={id} className={useClassHtml(`mk-container`, className, classList)} style={style}>
        {children}
      </Content>
    </Fragment>
  );
};

export default Container;
