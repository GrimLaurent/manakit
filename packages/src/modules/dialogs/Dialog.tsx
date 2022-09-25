/**
 * Dialog
 *
 * @type Structural
 * @module Dialog
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Dialog.scss';
import React, { Fragment, FunctionComponent } from 'react';
import { DialogType } from './types/Dialog';
import { useIdHtml, useClassHtml, useStyleHtml, useSizeHtml } from '../../utils';

// dependencies
import Overlay from '../overlay';

const Dialog: FunctionComponent<DialogType> = ({
  id,
  className,
  style,
  children,
  open,
  fullscreen,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
}) => {
  const classList = [{ el: 'mk-dialog--fullscreen', val: fullscreen }];

  const classListDialog = [{ el: 'mk-dialog--active', val: open }];

  const styleList = {
    width: useSizeHtml(width),
    height: useSizeHtml(height),
    minWidth: useSizeHtml(minWidth),
    maxWidth: useSizeHtml(maxWidth),
    minHeight: useSizeHtml(minHeight),
    maxHeight: useSizeHtml(maxHeight),
  };

  return (
    <Fragment>
      <div
        role="dialog"
        aria-modal="true"
        className={useClassHtml('mk-dialog--content', undefined, classListDialog)}
        style={{ zIndex: 202 }}
      >
        {open ? <Overlay value={open} absolute={true} /> : ''}
        <div
          id={useIdHtml(id)}
          className={useClassHtml('mk-dialog', className, classList)}
          style={useStyleHtml(styleList, style)}
        >
          {children}
        </div>
      </div>
    </Fragment>
  );
};

export default Dialog;
