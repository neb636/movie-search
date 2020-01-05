import { useState, useEffect, useRef, SetStateAction } from 'react';

export const useSafeState = <T>(
  defaultState: T,
): [T, (s: SetStateAction<T>) => void] => {
  const [state, setState] = useState<T>(defaultState);
  const mountedRef = useRef(false);

  function setSafeState(nextState: SetStateAction<T>) {
    return mountedRef.current && setState(nextState);
  }

  useEffect(() => {
    mountedRef.current = true;

    return () => {
      mountedRef.current = false;
    };
  }, []);

  return [state, setSafeState];
};
