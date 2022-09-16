/**
 * Hook for close without click in menu
 * @link https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
 */

import { useEffect, useRef, useState } from 'react';

function useComponentVisible(initialIsVisible: any) {
  const [isComponentVisible, setIsComponentVisible] = useState(initialIsVisible);
  const ref: any = useRef(null);

  const handleHideDropdown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsComponentVisible(false);
    }
  };

  const handleClickOutside = (event: any) => {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsComponentVisible(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleHideDropdown, true);
    document.addEventListener('click', handleClickOutside, true);
    return () => {
      document.removeEventListener('keydown', handleHideDropdown, true);
      document.removeEventListener('click', handleClickOutside, true);
    };
  });

  return { ref, isComponentVisible, setIsComponentVisible };
}

export default useComponentVisible;
