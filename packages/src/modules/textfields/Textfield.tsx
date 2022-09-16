/**
 * Textfield
 *
 * @type Structural
 * @module Input
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Textfield.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { TextfieldType } from './types/Textfield';
import { useClassHtml, useStyleHtml } from '../../utils';

// dependencies
import InputEl from '../inputs';

const Textfield: FunctionComponent<TextfieldType> = ({ id, className, style }) => {
  //   const classList = [
  //     { el: 'is--inset', val: inset },
  //     { el: 'divider-vertical', val: vertical },
  //   ];

  return (
    <Fragment>
      <InputEl id={id} className={useClassHtml('mk-input', className)} style={useStyleHtml({}, style)} />
    </Fragment>
  );
};

export default Textfield;
