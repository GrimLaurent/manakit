/**
 * CardSubTitle
 *
 * @type Structural
 * @module CardSubTitle
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './CardSubTitle.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { CardSubTitleType } from './types/CardSubTitle';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../../utils';

const CardSubTitle: FunctionComponent<CardSubTitleType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={useIdHtml(id)} className={useClassHtml('mk-card-subtitle', className)} style={useStyleHtml({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

export default CardSubTitle;
