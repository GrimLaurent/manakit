/**
 * CardActions
 *
 * @type Structural
 * @module CardActions
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './CardActions.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { CardActionsType } from './types/CardActions';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../../utils';

const CardActions: FunctionComponent<CardActionsType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={useIdHtml(id)} className={useClassHtml('mk-card-actions', className)} style={useStyleHtml({}, style)}>
        {children}
      </div>
    </Fragment>
  );
};

export default CardActions;
