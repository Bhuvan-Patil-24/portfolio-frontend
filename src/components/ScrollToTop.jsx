import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/* this function is used to keep the view on top whenever you change to different page */
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

export default ScrollToTop; 