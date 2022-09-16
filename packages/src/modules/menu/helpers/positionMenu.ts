const positionMenuContent = (
  width: any,
  height: any,
  config: any,
  rect: any,
  positionNudge: any,
  pointer?: boolean,
) => {
  const nudgeTop = positionNudge.top;
  const nudgeBottom = positionNudge.bottom;
  const nudgeRight = positionNudge.right;
  const nudgeLeft = positionNudge.left;

  let response: any = {};
  if (nudgeTop) response.marginTop = nudgeTop;
  if (nudgeBottom) response.marginBottom = nudgeBottom + 'px';
  if (nudgeRight) response.marginRight = nudgeRight + 'px';
  if (nudgeLeft) response.marginLeft = nudgeLeft + 'px';

  if (pointer) {
    response.left = rect.left + 'px';
  } else {
    if (config.right) {
      response.right = rect.right - width + 'px';
    } else if (config.left) {
      response.left = rect.left + 'px';
    }
  }

  if (config.bottom) {
    console.log('config.bottom', height);
    response.marginTop = response.marginTop ? response.marginTop + height + 'px' : height + 'px';
  }

  // if (config.bottom) response.left = rect.left + 'px';
  // else if (config.left) response.left = rect.left + width + 'px';
  // else if (config.right) response.right = rect.right - width + 'px';
  // else response.left = rect.left + 'px';

  // if (config.bottom) return { left: rect.left + 'px', marginTop: height + 'px' };
  // else if (config.left) return { left: rect.left + width + 'px', marginTop: height + 'px' };
  // else if (config.right) return { right: rect.right - width + 'px', marginTop: height + 'px' };
  // else return { left: rect.left + 'px' };

  console.log('positionMenuContent', response);
  return response;
};

export default positionMenuContent;
