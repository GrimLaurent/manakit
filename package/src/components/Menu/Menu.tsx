/**
 * Menu (alias Dropdown)
 *
 * Navigation menus reflect the underlying structure of websites. Application menus provide access to the essential functionality of an application. Thus menus are critical parts of web pages and applications and require particular attention during design and development.
 *
 * @name Menu
 * @type Module
 * @version 0.3
 * @author Laurent Grimaldi
 * @copyright Manastone
 */

import React, { Fragment, FunctionComponent, useEffect, useState } from 'react';
import { defaultClassMenu, defaultClassActivator, defaultClassContent } from './constant';
import { structureModel, positionMenuContent } from './helpers';
import { useComponentVisible, useRect } from './hook';
import { ElementChildrenType, ElementClassHTMLType, ElementIdHTMLType, ElementStyleHTMLType } from '../../types';
import { getClassNameRounded } from '../../services/application';
import { useClassName, useSize, useStyle } from '../../utils/dom';

// styles
import './Menu.scss';

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

const Menu: FunctionComponent<MenuType> = ({ ...props }) => {
  // Ref
  const { ref, isComponentVisible, setIsComponentVisible } = useComponentVisible(false);
  const [rect, setRect] = useState(getRect());

  const contextRect = useRect(ref);

  const [activatorWidth, setActivatorWidth] = useState(0);
  const [activatorHeight, setActivatorHeight] = useState(0);

  const classList = [{ el: 'menu--is-open', val: isComponentVisible }];

  const classListContent = [
    { el: 'is-open', val: isComponentVisible },
    { el: getClassNameRounded(true, props.rounded), val: props.rounded !== undefined },
  ];
  const [styleMenuContent, setStyleMenuContent] = useState({});

  const positionMenu = {
    top: props.top,
    left: props.left,
    right: props.right,
    bottom: props.bottom,
  };

  const positionNudge = {
    top: props.nudgeTop,
    left: props.nudgeLeft,
    right: props.nudgeRight,
    bottom: props.nudgeBottom,
  };

  useEffect(() => {
    window.addEventListener('resize', handleResize);
  });

  useEffect(() => {
    if (props.model) props.model(structureModel());
  }, []);

  useEffect(() => {
    if (props.model) props.model(structureModel('button', true, isComponentVisible, ref, isComponentVisible));
  }, [isComponentVisible]);

  const handleActivatorClick = (event: any) => {
    if (!props.disabled) {
      setIsComponentVisible(isComponentVisible ? false : true);

      console.log('handleActivatorClick', event);
      setActivatorWidth(event.target.clientWidth);
      setActivatorHeight(event.target.clientHeight);

      if (props.pointer) {
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
          props.pointer,
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
          props.pointer,
        );
        setStyleMenuContent(positionByScreen);
      }
    }
  };

  const handleContentClick = () => {
    if (!props.disabled) {
      if (props.closeOnContentClick) setIsComponentVisible(false);
    }
  };

  function handleResize() {
    if (props.pointer) {
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
        props.pointer,
      );
      setStyleMenuContent(position);
    }
    window.removeEventListener('resize', handleResize);
  }

  const styleList = {
    minWidth: useSize(ref.clientWidth),
  };

  useEffect(() => {
    console.log('activator', props.activator, ref, ref.clientWidth);
  }, [props.activator]);

  return (
    <Fragment>
      <div
        id={props.id}
        className={useClassName(defaultClassMenu, props.className, classList)}
        ref={ref}
        style={props.style}
      >
        <div className={useClassName(defaultClassActivator)} onClick={handleActivatorClick}>
          <Fragment>{props.activator}</Fragment>
        </div>
        <div
          role="menu"
          className={useClassName(defaultClassContent, props.contentClass, classListContent)}
          onClick={props.closeOnContentClick ? handleContentClick : undefined}
          style={useStyle(styleMenuContent, props.contentStyle)}
        >
          <div className="menu--content-wrapper">
            <Fragment>{props.children}</Fragment>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

interface MenuType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  onClick?: any;
  model?: any;
  open?: any;
  contentClass?: string;
  contentStyle?: ElementStyleHTMLType;
  disabled?: boolean;
  maxHeight?: number | string;
  maxWidth?: number | string;
  minWidth?: number | string;
  nudgeBottom?: number | string;
  nudgeLeft?: number | string;
  nudgeRight?: number | string;
  nudgeTop?: number | string;
  rounded?: 'none' | 'xs' | 'sm' | 'lg' | 'xl';
  top?: boolean;
  left?: boolean;
  right?: boolean;
  bottom?: boolean;
  zIndex?: number | string;
  closeOnContentClick?: boolean;
  activator?: React.ReactNode;
  pointer?: boolean;
}

export default Menu;
