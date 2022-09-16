/**
 * CardTitle
 *
 * @type Structural
 * @module CardTitle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './CardTitle.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { CardTitleType } from './types/CardTitle';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../../utils';

const CardTitle: FunctionComponent<CardTitleType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={useIdHtml(id)} className={useClassHtml('mk-card-title', className)} style={useStyleHtml({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

export default CardTitle;
