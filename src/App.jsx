import React, { useEffect, Suspense } from 'react';
import Routing from './router/Routing';
import AOS from 'aos';
import 'aos/dist/aos.css';
import AnimatedCursor from 'react-animated-cursor';

const App = () => {
  // this for animation
  useEffect(() => {
    AOS.init({
      duration: 1200,
    });
  }, []);

  return (
    <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color='255 160, 1'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <Routing />
    </div>
  );
};

export default App;
