import { useState, useLayoutEffect, useRef, RefObject } from 'react';
import { throttle } from 'lodash';

type ComponentSize = {
  width: number;
  height: number;
};

const getSize = (el: HTMLElement): ComponentSize => {
  return {
    width: el.offsetWidth,
    height: el.offsetHeight
  };
};

export const useComponentSize = <T extends HTMLElement>(): [RefObject<T>, ComponentSize] => {
  const ref = useRef<T>(null);
  const [componentSize, setComponentSize] = useState<ComponentSize>({
    width: 0,
    height: 0
  });

  useLayoutEffect(() => {
    if (!ref.current) {
      return;
    }

    const handleResize = throttle(() => {
      if (ref.current) {
        setComponentSize(getSize(ref.current));
      }
    }, 500);

    handleResize();

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [ref.current]);

  return [ref, componentSize];
};
