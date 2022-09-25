/**
 * Hstack
 *
 * @type Structural
 * @module Hstack
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */
import './Hstack.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { HstackType, HstackButtonType } from './types/Hstack';
import { useClassHtml, useIdHtml } from '../../../utils';

const Hstack: FunctionComponent<HstackType> = ({ id, className, children, hiddenAction }) => {
  // State
  const [indexChild, setIndexChild] = useState(0);
  const [nbChild, setNbChild] = useState(0);
  const [nbChildDisplay, setNbChildDisplay] = useState(0);

  // Init
  const elId = 'mk-h-stack--' + id;
  let isDown = false;
  let startX: any;
  let scrollLeft: any;

  // Effect
  useEffect(() => {
    const parent = document.getElementById(elId);

    parent?.addEventListener('mousedown', (e: any) => {
      isDown = true;
      parent.classList.add('is--active');
      startX = e.pageX - parent.offsetLeft;
      scrollLeft = parent.scrollLeft;
    });

    parent?.addEventListener('mouseleave', () => {
      isDown = false;
      parent.classList.remove('is--active');
      parent?.parentElement?.classList.remove('display-action');
    });

    parent?.addEventListener('mouseup', () => {
      isDown = false;
      parent.classList.remove('is--active');
    });

    parent?.addEventListener('mousemove', (e: any) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - parent.offsetLeft;
      const walk = (x - startX) * 3;
      parent.scrollLeft = scrollLeft - walk;
    });

    parent?.parentElement?.addEventListener('mouseover', () => {
      parent?.parentElement?.classList.add('display-action');
    });

    // Sizing Children
    const childList = parent?.getElementsByTagName('li');
    let positionIndex = 0;

    for (const key in childList) {
      const index: number = Number(key);

      if (childList[index]) {
        const calc = positionIndex + childList[index].offsetWidth;
        if (parent && calc > parent?.clientWidth) {
          return setNbChildDisplay(index);
        } else {
          positionIndex = calc;
        }
      }
    }
  }, []);

  useEffect(() => {
    if (children) {
      if (children === null) return undefined;
      setNbChild((children as any)?.props?.children.length);
    }
  }, [children]);

  function handleScroll() {
    const parent = document.getElementById(elId);
    const childList = parent?.getElementsByTagName('li');

    const x = parent?.scrollLeft;
    const y = parent?.scrollTop;

    let positionIndex = 0;
    for (const key in childList) {
      const index: number = Number(key);

      if (childList[index]) {
        const calc = positionIndex + childList[index].offsetWidth;
        if (x && calc > x) {
          return setIndexChild(index);
        } else {
          positionIndex = calc;
        }
      }
    }
  }

  function handleAction(type: string) {
    const parent = document.getElementById(elId);
    const childList = parent?.getElementsByTagName('li');

    if (parent && childList) {
      if (type === 'next') {
        parent.scrollLeft = parent?.scrollLeft + childList[indexChild].offsetWidth;
        setIndexChild(indexChild + 1);
      }
      if (type === 'prev') {
        parent.scrollLeft = parent.scrollLeft - childList[indexChild].offsetWidth;
        setIndexChild(indexChild - 1);

        if (indexChild - 1 === 0) {
          parent.scrollLeft = 0;
        }
      }
    }
  }

  return (
    <Fragment>
      <div className={'mk-h-stack--view'}>
        {!hiddenAction && Number(indexChild) !== 0 ? (
          <HstackAction
            children={'prev'}
            id={id + '--prev'}
            className={'action--prev'}
            onClick={() => handleAction('prev')}
          />
        ) : null}

        <ul id={useIdHtml(id)} className={useClassHtml('mk-h-stack--body', className)} onScroll={() => handleScroll()}>
          {(children as any)?.props?.children.map((child: any) => (
            <li>{child}</li>
          ))}
        </ul>

        {!hiddenAction && Number(indexChild) <= nbChild - (1 + nbChildDisplay) ? (
          <HstackAction
            children={'next'}
            id={id + '--next'}
            className={'action--next'}
            onClick={() => handleAction('next')}
          />
        ) : null}
      </div>
    </Fragment>
  );
};

export default Hstack;

const HstackAction: FunctionComponent<HstackButtonType> = ({ id, className, onClick, children }) => {
  return (
    <Fragment>
      <button id={useIdHtml(id)} className={useClassHtml('mk-h-stack--action', className)} onClick={onClick}>
        {children}
      </button>
    </Fragment>
  );
};
