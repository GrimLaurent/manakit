/**
 * CardText
 *
 * @type Structural
 * @module CardText
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './CardText.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { CardTextType } from './types/CardText';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const CardText: FunctionComponent<CardTextType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={useIdHtml(id)} className={useClassHtml('mk-card-text', className)} style={useStyleHtml({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

export default CardText;
