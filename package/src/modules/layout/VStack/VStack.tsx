/**
 * VStack
 *
 * @type Structural
 * @module VStack
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 Manastone and the ManaKit project authors
 */
import './VStack.scss';
import React, { Fragment, FunctionComponent, useEffect, useState, Children, cloneElement } from 'react';
import { VstackType } from './VStack.type';
import { useClassName, useId, useSize } from '../../../utils/dom';

const VStack: FunctionComponent<VstackType> = ({ id, className, children, height }) => {
  const arrayChildren = Children.toArray(children);
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

  // useEffect(() => {
  //   console.log('children type', typeof children);
  //   const rows = [];
  //   if (children && typeof children === 'object') {
  //     for (const [key, value] of Object.entries(children)) {
  //       console.log(`${key}: ${value}`);
  //       rows.push(`${value}`);
  //     }
  //   }

  //   // setRenderChild(rows as any);
  //   console.log('row after set', rows);
  //   //   const rows = [];
  //   // for (let i = 0; i < children.lenght; i++) {
  //   //     rows.push(ObjectRow());
  //   // }
  // }, [children]);
  return (
    <Fragment>
      <div className={'mk-v-stack--view'}>
        <ul
          id={useId(id)}
          className={useClassName('mk-v-stack--body', className)}
          style={{ height: height ? useSize(height) : '100vh' }}
        >
          {Children.map(arrayChildren, (child: any, index) => {
            console.log('child', child);
            // const isLast: any = index === arrayChildren.length - 1;

            // if (!isLast && !child.props.link) {
            //   throw new Error(
            //     `BreadcrumbItem child no. ${index + 1}
            // should be passed a 'link' prop`,
            //   );
            // }
            return (
              <Fragment>
                <li className={`child-${id}-${index}`}>{child}</li>
              </Fragment>
            );
          })}
        </ul>
      </div>
    </Fragment>
  );
};

export default VStack;
