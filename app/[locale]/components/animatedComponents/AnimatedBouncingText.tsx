import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import SplitType from "split-type"; 

type AnimatedTextProps = {
  children: React.ReactNode;
};

const AnimatedBouncingText: React.FC<AnimatedTextProps> = ({ children }) => {
  const textRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (textRef.current) {
  
      const typeSplit = new SplitType(textRef.current, {
        types: 'lines,words,chars', 
        tagName: 'span',
      });

    
      gsap.from(textRef.current.querySelectorAll('.word'), {
        y: '110%',
        opacity: 0, 
        rotationZ: 10,
        duration: 0.55,
        ease: 'back.out',
        stagger: 0.1,
        delay: 0.5, 
      });
    }
  }, []);

  return <div ref={textRef}>{children}</div>; 
};

export default AnimatedBouncingText;
