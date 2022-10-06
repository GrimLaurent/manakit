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
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
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
  close,
  fullscreen,
  width,
  height,
  minWidth,
  maxWidth,
  minHeight,
  maxHeight,
  permanent,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const classList = [{ el: 'mk-dialog--fullscreen', val: fullscreen }];

  const classListDialog = [
    { el: 'mk-dialog--active', val: isOpen },
    { el: 'mk-dialog--permanent', val: permanent },
  ];

  const styleList = {
    width: useSizeHtml(width),
    height: useSizeHtml(height),
    minWidth: useSizeHtml(minWidth),
    maxWidth: useSizeHtml(maxWidth),
    minHeight: useSizeHtml(minHeight),
    maxHeight: useSizeHtml(maxHeight),
  };

  const handleAction = () => {
    if (isOpen) {
      setIsOpen(false);
      if (close !== undefined) close(false);
    } else {
      setIsOpen(true);
    }
  };

  useEffect(() => {
    if (open !== undefined) setIsOpen(open);
  }, [open]);

  return (
    <Fragment>
      <div
        role="dialog"
        aria-modal="true"
        className={useClassHtml('mk-dialog--content', undefined, classListDialog)}
        style={{ zIndex: 202 }}
      >
        {open ? <Overlay value={isOpen} absolute={true} isClose={permanent ? undefined : handleAction} /> : ''}
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
