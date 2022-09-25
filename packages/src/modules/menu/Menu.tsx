/**
 * Menu
 *
 * @type Structural
 * @module Menu
 *
 * @company Manastone
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2022 ManaStone and the ManaKit project authors
 */

import './Menu.scss';
import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { MenuType } from './types/Menu';
import { useIdHtml, useClassHtml, useStyleHtml } from '../../utils';
import { structureModel, positionMenuContent } from './helpers';
import { useComponentVisible, useRect } from './hook';

type RectResult = {
  bottom: number;
  height: number;
  left: number;
  right: number;
  top: number;
  width: number;
};

// const contentRef = React.createRef<HTMLDivElement>();
function getRect<T extends HTMLElement>(element?: T): RectResult {
  let rect: RectResult = {
    bottom: 0,
    height: 0,
    left: 0,
    right: 0,
    top: 0,
    width: 0,
  };
  if (element) rect = element.getBoundingClientRect();
  return rect;
}

const Menu: FunctionComponent<MenuType> = ({
  id,
  className,
  contentClass,
  style,
  top,
  left,
  right,
  bottom,
  nudgeTop,
  nudgeBottom,
  nudgeLeft,
  nudgeRight,
  rounded,
  model,
  disabled,
  pointer,
  closeOnContentClick,
  children,
  activator,
}) => {
  // Ref
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [rect, setRect] = useState(getRect());

  const defaultClassMenu = 'a-menu';
  const defaultClassActivator = 'a-menu--activator';
  const defaultClassContent = 'a-menu--content';

  const contextRect = useRect(ref);

  const [activatorWidth, setActivatorWidth] = useState(0);
  const [activatorHeight, setActivatorHeight] = useState(0);

  const classList = [{ el: 'menu--is-open', val: isComponentVisible }];
  const classListContent = [
    { el: 'is-open', val: isComponentVisible },
    { el: 'rounded', val: rounded },
  ];
  const [styleMenuContent, setStyleMenuContent] = useState({});

  const positionMenu = {
    top: top,
    left: left,
    right: right,
    bottom: bottom,
  };

  const positionNudge = {
    top: nudgeTop,
    left: nudgeLeft,
    right: nudgeRight,
    bottom: nudgeBottom,
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    if (model) model(structureModel());
  }, []);

  useEffect(() => {
    if (model) model(structureModel('button', true, isComponentVisible, ref, isComponentVisible));
  }, [isComponentVisible]);

  const handleActivatorClick = (event: any) => {
    if (!disabled) {
      setIsComponentVisible(isComponentVisible ? false : true);

      console.log('handleActivatorClick', event);
      setActivatorWidth(event.target.clientWidth);
      setActivatorHeight(event.target.clientHeight);

      if (pointer) {
        const rectValueByEvent = {
          bottom: 0,
          height: 0,
          left: event.clientX,
          right: 0,
          top: event.clientY,
          width: 0,
        };
        const positionByPointer = positionMenuContent(
          event.target.clientWidth,
          event.target.clientHeight,
          positionMenu,
          rectValueByEvent,
          positionNudge,
          pointer,
        );
        setStyleMenuContent(positionByPointer);
      } else {
        const rectValue = ref && ref.current ? getRect(ref.current) : getRect();
        setRect(rectValue);
        console.log('rectValue', rectValue);
        const positionByScreen = positionMenuContent(
          event.target.clientWidth,
          event.target.clientHeight,
          positionMenu,
          rectValue,
          positionNudge,
          pointer,
        );
        setStyleMenuContent(positionByScreen);
      }
    }
  };

  const handleContentClick = () => {
    if (!disabled) {
      if (closeOnContentClick) setIsComponentVisible(false);
    }
  };

  function handleResize() {
    if (pointer) {
      setIsComponentVisible(false);
    } else {
      const rectValue = ref && ref.current ? getRect(ref.current) : getRect();
      setRect(rectValue);

      const position = positionMenuContent(
        activatorWidth,
        activatorHeight,
        positionMenu,
        rectValue,
        positionNudge,
        pointer,
      );
      setStyleMenuContent(position);
    }
    window.removeEventListener('resize', handleResize);
  }

  return (
    <Fragment>
      <div
        id={useIdHtml(id)}
        className={useClassHtml(defaultClassMenu, className, classList)}
        ref={ref}
        style={useStyleHtml({}, style)}
      >
        <div className={useClassHtml(defaultClassActivator)} onClick={handleActivatorClick}>
          {activator}
        </div>
        <div
          role="menu"
          className={useClassHtml(defaultClassContent, contentClass, classListContent)}
          onClick={() => (closeOnContentClick ? handleContentClick : null)}
          //   maxHeight={props.maxHeight}
          //   maxWidth={props.maxWidth}
          //   minWidth={props.minWidth}
          //   rounded={props.rounded}
          style={styleMenuContent}
        >
          <div className="menu--content-wrapper">{children}</div>
        </div>
      </div>
    </Fragment>
  );
};

export default Menu;
