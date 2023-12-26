/**
 * CardText
 * @type Structural
 * @module CardText
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

const CardText: FunctionComponent<CardTextClassType> = ({ id, className, style, children }) => {
  return (
    <Fragment>
      <div id={id} className={useClassName('mkt-card--text', className)} style={useStyle({}, style)}>
        <Fragment>{children}</Fragment>
      </div>
    </Fragment>
  );
};

class CardTextClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
}

export default CardText;
