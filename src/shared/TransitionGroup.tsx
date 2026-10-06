import { ReactNode, useEffect, useState } from 'react';
import { useLocation, Routes } from 'react-router-dom';

import styles from './TransitionGroup.module.css';

const TransitionGroup = ({ children }: { children: ReactNode }) => {
  const location = useLocation();

  const [displayLocation, setDisplayLocation] = useState(location);
  const [transitionStage, setTransistionStage] = useState(styles.fadeIn);

  useEffect(() => {
    if (location !== displayLocation) setTransistionStage(styles.fadeOut);
  }, [location, displayLocation]);

  return (
    <div
      className={`${transitionStage}`}
      onAnimationEnd={() => {
        if (transitionStage === styles.fadeOut) {
          setTransistionStage(styles.fadeIn);
          setDisplayLocation(location);
        }
      }}
    >
      <Routes location={displayLocation}>{children}</Routes>
    </div>
  );
};

export default TransitionGroup;
