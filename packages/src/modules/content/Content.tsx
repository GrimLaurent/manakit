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
import React, { FunctionComponent } from 'react';
import { ContentType } from './types/Content';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const Content: FunctionComponent<ContentType> = ({ id, className, style, children }) => {
  return (
    <section id={useIdHtml(id)} className={useClassHtml(`mk-content`, className)} style={useStyleHtml({}, style)}>
      {children}
    </section>
  );
};

export default Content;
