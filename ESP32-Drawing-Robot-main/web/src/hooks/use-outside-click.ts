import { RefObject } from 'preact/compat';
import { useEffect } from 'preact/hooks';

export function useOutsideClick<T extends HTMLElement>(
  ref: RefObject<T>,
  callback: (event: MouseEvent | TouchEvent) => void,
): RefObject<T> {
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (ref.current && !ref.current.contains(event.target as Node)) {
        callback(event);
      }
    }

    document.addEventListener('click', handleClickOutside);

    return function cleanup() {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [callback]);

  return ref;
}
