/**
 * Input
 *
 * @type Structural
 * @module Input
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Input.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { InputType } from './types/Input';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';

const InputEl: FunctionComponent<InputType> = ({ id, className, style }) => {
  //   const classList = [
  //     { el: 'is--inset', val: inset },
  //     { el: 'divider-vertical', val: vertical },
  //   ];

  return (
    <Fragment>
      <input id={useIdHtml(id)} className={useClassHtml('mk-input', className)} style={useStyleHtml({}, style)} />
    </Fragment>
  );
};

export default InputEl;
