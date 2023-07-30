import React, { useEffect, useState } from 'react';
import Divider from '@mui/material/Divider';

c

function TimelineConnector({ children }) {
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const centerOfScreen = window.innerHeight / 2;
      const timelineTop = timelineRef.current.offsetTop;
      const timelineHeight = timelineRef.current.offsetHeight;
      const timelineBottom = timelineTop + timelineHeight;
      
      if (timelineTop <= centerOfScreen && timelineBottom >= centerOfScreen) {
        setIsActive(true);
      } else {
        setIsActive(false);
      }
    }

    const timelineRef = React.createRef();

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      {React.cloneElement(children, { ref: timelineRef })}
      <Divider className={`${classes.root} ${isActive ? classes.active : ''}`} />
    </>
  );
}

export default TimelineConnector;