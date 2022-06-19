import { useState, useEffect } from 'react';

function useWindowScroll() {
  const [windowScroll, setWindowScroll] = useState(window.scrollY);

  useEffect(() => {
    window.addEventListener(
      'scroll',
      () => setWindowScroll(window.scrollY),
    );

    return () => window.removeEventListener(
      'scroll',
      () => setWindowScroll(window.scrollY),
    );
  }, [windowScroll]);

  return {
    windowScroll,
  };
}

export default useWindowScroll;
