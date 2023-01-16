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
import { ImgClassType } from './Img.type';

// styles
import './Img.scss';

// utilities
import { useClassName, useSize, useStyle } from '../../utils/dom';

// dependencies
import Responsive from '../Responsive';

const Img: FunctionComponent<ImgClassType> = ({
  id,
  className,
  style,
  src,
  alt,
  frame,
  aspectRatio,
  contentClass,
  fillHeight,
  contain,
  position,
}) => {
  const [widthElement, setWidthElement] = useState('');
  const [aspectRatioElement, setAspectRatioElement] = useState('');

  const classList = [
    { el: 'k-image--contain', val: contain },
    { el: 'k-image--cover', val: !contain },
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
    width: useSize(frame?.width),
    height: useSize(frame?.height),
    minWidth: useSize(frame?.minWidth),
    maxWidth: useSize(frame?.maxWidth),
    minHeight: useSize(frame?.minHeight),
    maxHeight: useSize(frame?.maxHeight),
  };

  const styleWrapList = {
    backgroundImage: `url(${src})`,
    backgroundPosition: position ? position : `center center`,
  };

  return (
    <Fragment>
      <Responsive
        id={id}
        className={useClassName(`k-image`, className, classList)}
        style={useStyle(styleList, style)}
        aspectRatio={aspectRatio ? aspectRatio : aspectRatioElement}
        fillHeight={fillHeight}
        content={{
          width: widthElement,
          body: (
            <div
              className={useClassName(`k-image--wrap`, contentClass, classList)}
              style={useStyle(styleWrapList)}
              title={alt}
            ></div>
          ),
        }}
      />
    </Fragment>
  );
};

export default Img;
