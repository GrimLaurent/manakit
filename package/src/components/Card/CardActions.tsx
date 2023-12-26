/**
 * CardActions
 * @type Structural
 * @module CardActions
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment } from 'react';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../types';

// styles
import './Card.scss';

// utilities
import { useClassName, useStyle } from '../../utils/dom';

const CardActions: FunctionComponent<CardActionsClassType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-card--actions', className)} style={useStyle({}, style)}>
        <Fragment>{children}</Fragment>
      </div>
    </Fragment>
  );
};

class CardActionsClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
}

export default CardActions;
