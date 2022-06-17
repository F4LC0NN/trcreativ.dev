import { useState, useEffect } from 'react';

function useWindowWidth() {
  const [windowWidth, setWindowWidth] = useState(280);

  useEffect(() => {
    window.addEventListener(
      'resize',
      () => setWindowWidth(window.innerWidth),
    );

    return () => {
      window.removeEventListener(
        'resize',
        () => setWindowWidth(window.innerWidth),
      );
    };
  }, [windowWidth]);

  return {
    windowWidth,
  };
}

export default useWindowWidth;
