import React from 'react';

// Helper function to check if an element is in viewport
export const isInViewport = (element: HTMLElement, offset = 0): boolean => {
  const rect = element.getBoundingClientRect();
  return (
    rect.top <= (window.innerHeight || document.documentElement.clientHeight) - offset &&
    rect.bottom >= 0
  );
};

// Hook for detecting when an element is in viewport
export const useInView = (ref: React.RefObject<HTMLElement>, options = { threshold: 0.1 }) => {
  const [inView, setInView] = React.useState(false);

  React.useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(([entry]) => {
      setInView(entry.isIntersecting);
    }, options);

    observer.observe(element);
    return () => observer.unobserve(element);
  }, [ref, options]);

  return inView;
};

// Helper class names for common animations
export const animations = {
  fadeIn: 'transition-opacity duration-1000 ease-in-out',
  fadeUp: 'transition-all duration-700 transform translate-y-10 opacity-0',
  fadeUpActive: 'transform translate-y-0 opacity-100',
  pulse: 'animate-pulse',
  bounce: 'animate-bounce',
  spin: 'animate-spin',
};