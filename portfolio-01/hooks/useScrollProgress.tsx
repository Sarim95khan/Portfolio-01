'use client';

import { useEffect, useState } from 'react';

const useScrollProgressBar = () => {
  const [completion, setCompletion] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollable = document.body.scrollHeight - window.innerHeight;
      const scrolled = window.scrollY;
      //   const completionPercent = (scrolled / scrollable) * 100;

      if (scrollable) {
        setCompletion(Number(scrolled / scrollable) * 100);
        console.log(completion);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return completion;
};

export default useScrollProgressBar;
