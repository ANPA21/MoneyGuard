import React, { useState, useEffect } from 'react';
import { ScrollButton } from './ScrollToTopButton.styled';
import { AiOutlineArrowUp } from 'react-icons/ai';

export const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 100) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <ScrollButton isVisible={isVisible} onClick={scrollToTop}>
      <AiOutlineArrowUp />
    </ScrollButton>
  );
};
