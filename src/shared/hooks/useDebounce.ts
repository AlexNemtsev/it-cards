import { useEffect, useRef } from 'react';

export const useDebounce = <T extends any[]>(
  fn: (...args: T) => void,
  delay = 0
): ((...args: T) => void) => {
  const timerId = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    return () => {
      if (timerId.current !== undefined) {
        clearTimeout(timerId.current);
      }
    };
  }, []);

  const debounceFunction = (...args: T) => {
    if (timerId.current !== undefined) {
      clearTimeout(timerId.current);
    }

    const newTimerId = setTimeout(() => {
      fn(...args);
    }, delay);

    timerId.current = newTimerId;
  };

  return debounceFunction;
};
