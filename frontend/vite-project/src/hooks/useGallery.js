import { useState, useCallback } from 'react';

export function useGallery(totalImages) {
  const [view, setView] = useState('listing'); // 'listing' | 'photo-tour' | 'lightbox'
  const [activeIndex, setActiveIndex] = useState(0);
  const [triggerElement, setTriggerElement] = useState(null);

  const openPhotoTour = useCallback((e) => {
    setTriggerElement(e?.currentTarget || document.activeElement);
    setActiveIndex(0);
    setView('photo-tour');
  }, []);

  const openLightbox = useCallback((index, e) => {
    setTriggerElement(e?.currentTarget || document.activeElement);
    setActiveIndex(index);
    setView('lightbox');
  }, []);

  const closeOverlay = useCallback(() => {
    setView('listing');
    // Restore focus to trigger element
    setTimeout(() => {
      if (triggerElement && typeof triggerElement.focus === 'function') {
        triggerElement.focus();
      }
    }, 50);
  }, [triggerElement]);

  const nextImage = useCallback(() => {
    setActiveIndex((prev) => Math.min(prev + 1, totalImages - 1));
  }, [totalImages]);

  const previousImage = useCallback(() => {
    setActiveIndex((prev) => Math.max(prev - 1, 0));
  }, []);

  return {
    view,
    activeIndex,
    openPhotoTour,
    openLightbox,
    closeOverlay,
    nextImage,
    previousImage,
  };
}
