"use client"; 
import { NextUIProvider } from '@nextui-org/react';
import { usePathname, } from 'next/navigation'; 
import { useEffect, useState } from 'react';
import gsap from 'gsap';
import Loader from '../loader/Loader';

export function Providers({ children }: { children: React.ReactNode }) {
  const [loading, setLoading] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const handleStart = () => {
      setLoading(true);
    };

    const handleComplete = () => {
      gsap.to('.loaderWrapper', {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setLoading(false);
        },
      });
    };


    handleStart();
    timeoutId = setTimeout(() => {
      handleComplete();
    }, 500);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [pathname]); 

  return (
    <NextUIProvider>
      {loading && <Loader />} 
      {children}
    </NextUIProvider>
  );
}
