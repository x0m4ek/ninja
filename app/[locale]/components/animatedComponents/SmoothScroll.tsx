'use client';
import { ReactNode } from 'react';
import { ReactLenis, useLenis } from 'lenis/react';

const SmoothScroll = ({ children }: { children: ReactNode }) => {
 
  const lenis = useLenis(({ scroll }) => {
   
    console.log('Current scroll position:', scroll); 
  });


  return (
    <ReactLenis
      root
      options={{
        duration: 2.5,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), 
        smoothWheel: true, 
   
      }}
    >
      {children}
    </ReactLenis>
  );
};

export default SmoothScroll;
