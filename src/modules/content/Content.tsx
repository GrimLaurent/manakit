/**
 * Content
 *
 * @type Structural
 * @module Content
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Content.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { ContentType } from './types/Content';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const Content: FunctionComponent<ContentType> = ({ id, className, style, children, main }) => {
  return (
    <Fragment>
      {main ? (
        <main id={useIdHtml(id)} className={useClassHtml(`mk-content`, className)} style={useStyleHtml({}, style)}>
          {children}
        </main>
      ) : (
        <section id={useIdHtml(id)} className={useClassHtml(`mk-content`, className)} style={useStyleHtml({}, style)}>
          {children}
        </section>
      )}
    </Fragment>
  );
};

export default Content;
