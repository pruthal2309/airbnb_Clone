import { useEffect } from 'react';

export function useScrollLock(active) {
  useEffect(() => {
    if (active) {
      document.body.classList.add('scroll-locked');
    } else {
      document.body.classList.remove('scroll-locked');
    }
    return () => {
      document.body.classList.remove('scroll-locked');
    };
  }, [active]);
}
