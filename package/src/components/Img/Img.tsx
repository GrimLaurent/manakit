/**
 * Img
 * @type Structural
 * @module Img
 *
 * @company Manastone
 * @package ManaKit
 * @author Laurent Grimaldi
 * @repository https://github.com/manastone/manakit
 * @copyright (c)2023 Manastone and the ManaKit project authors
 */
import React, { FunctionComponent, Fragment, useEffect, useState } from 'react';

// styles
import './Img.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';

// dependencies
import Responsive from '../Responsive';
import {
  ElementChildrenType,
  ElementClassHTMLType,
  ElementIdHTMLType,
  ElementStyleHTMLType,
  SizeType,
} from '../../types';

const Img: FunctionComponent<ImgClassType> = ({
  id,
  className,
  style,
  src,
  alt,
  aspectRatio,
  contentClass,
  fillHeight,
  contain,
  position,
  width,
  height,
  minWidth,
  minHeight,
  maxWidth,
  maxHeight,
}) => {
  const [widthElement, setWidthElement] = useState('');
  const [aspectRatioElement, setAspectRatioElement] = useState('');

  const classList = [
    { el: 'mkt-image--contain', val: contain },
    { el: 'mkt-image--cover', val: !contain },
  ];

  useEffect(() => {
    if (src) {
      const img = new Image();
      img.src = src;

      img.onload = function () {
        setWidthElement((this as any).width);
        setAspectRatioElement((this as any).width + '/' + (this as any).height);
      };
    }
  }, [src]);

  const styleList = {
    width: useSize(width),
    height: useSize(height),
    minWidth: useSize(minWidth),
    maxWidth: useSize(maxWidth),
    minHeight: useSize(minHeight),
    maxHeight: useSize(maxHeight),
  };

  const styleWrapList = {
    backgroundImage: `url(${src})`,
    backgroundPosition: position ? position : `center center`,
  };

  return (
    <Fragment>
      <Responsive
        id={id}
        className={useClassName(`mkt-image`, className, classList)}
        style={useStyle(styleList, style)}
        aspectRatio={aspectRatio ? aspectRatio : aspectRatioElement}
        fillHeight={fillHeight}
        contentWidth={widthElement}
        content={
          <div
            className={useClassName(`mkt-image--wrap`, contentClass, classList)}
            style={useStyle(styleWrapList)}
            title={alt}
          ></div>
        }
      />
    </Fragment>
  );
};

class ImgClassType {
  id?: ElementIdHTMLType;
  className?: ElementClassHTMLType;
  style?: ElementStyleHTMLType;
  children?: ElementChildrenType;
  src?: string;
  alt?: string;
  aspectRatio?: string | number;
  contentClass?: string;
  fillHeight?: boolean;
  contain?: boolean;
  position?: string;
  width?: SizeType;
  height?: SizeType;
  minWidth?: SizeType;
  minHeight?: SizeType;
  maxWidth?: SizeType;
  maxHeight?: SizeType;
}

export default Img;
