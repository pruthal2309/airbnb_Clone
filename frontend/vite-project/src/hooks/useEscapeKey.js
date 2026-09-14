import { useEffect } from 'react';

export function useEscapeKey(callback, active = true) {
  useEffect(() => {
    if (!active) return;
    const handler = (e) => {
      if (e.key === 'Escape') callback();
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, [callback, active]);
}
