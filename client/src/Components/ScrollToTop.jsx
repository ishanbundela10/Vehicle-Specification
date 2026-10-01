// src/Components/ScrollToTop.jsx
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    // Automatically scroll to top whenever the URL path changes
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'instant' // Instant jump to top on page change
    });
  }, [pathname]);

  return null; // This component doesn't render any UI
};

export default ScrollToTop;