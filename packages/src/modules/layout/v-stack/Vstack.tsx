/**
 * Vstack
 *
 * @type Structural
 * @module Vstack
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Vstack.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { VstackType } from './types/Vstack';
import { useClassHtml, useIdHtml, useSizeHtml } from '../../../utils';

const Vstack: FunctionComponent<VstackType> = ({ id, className, children, height }) => {
  // Init
  const elId = 'mk-v-stack--' + id;
  let isDown = false;
  let startY: any;
  let scrollTop: any;

  // Effect
  useEffect(() => {
    const parent = document.getElementById(elId);

    parent?.addEventListener('mousedown', (e: any) => {
      isDown = true;
      parent.classList.add('is--active');
      startY = e.pageY - parent.offsetTop;
      scrollTop = parent.scrollTop;
    });

    parent?.addEventListener('mouseleave', () => {
      isDown = false;
      parent.classList.remove('is--active');
    });

    parent?.addEventListener('mouseup', () => {
      isDown = false;
      parent.classList.remove('is--active');
    });

    parent?.addEventListener('mousemove', (e: any) => {
      if (!isDown) return;
      e.preventDefault();
      const y = e.pageY - parent.offsetTop;
      const walk = (y - startY) * 3;
      parent.scrollTop = scrollTop - walk;
    });
  }, []);

  return (
    <Fragment>
      <div className={'mk-v-stack--view'}>
        <ul
          id={useIdHtml(id)}
          className={useClassHtml('mk-v-stack--body', className)}
          style={{ height: height ? useSizeHtml(height) : '100vh' }}
        >
          {(children as any)?.props?.children.map((child: any) => (
            <li>{child}</li>
          ))}
        </ul>
      </div>
    </Fragment>
  );
};

export default Vstack;
