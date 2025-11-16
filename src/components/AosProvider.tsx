"use client"; 

import { useEffect } from 'react';
import AOS from 'aos';

import 'aos/dist/aos.css'; 

export const AosProvider = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    AOS.init({
      duration: 1600, 
      once: false,    
    });
  }, []); 
  return <>{children}</>;
};