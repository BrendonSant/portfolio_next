"use client";

import { useEffect, useState } from 'react';
import Image from 'next/image';

interface ScrollComponentProps {
  icons: string[];
  imageLists: string[][];
}

const Skills: React.FC<ScrollComponentProps> = ({ icons, imageLists }) => {
  const [scrollState, setScrollState] = useState(0);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const componentPosition = document.getElementById('scroll-component')?.offsetTop || 0;
    
    if (scrollY > componentPosition && scrollY < componentPosition + 1000) {
      const scrollStep = Math.floor((scrollY - componentPosition) / 300);
      setScrollState(Math.min(scrollStep, 3));
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="scroll-component" className="relative w-full h-[1000px]">
      {/* Ícones */}
      <div className="fixed top-20 left-10">
        {icons.map((icon, index) => (
          <div
            key={index}
            className={`transition-opacity duration-500 ${scrollState >= index ? 'opacity-100' : 'opacity-0'}`}
          >
            <Image src={icon} alt={`icon-${index}`} width={50} height={50} />
          </div>
        ))}
      </div>

      {/* Listas de imagens */}
      <div className="flex flex-col gap-8 mt-40">
        {imageLists.map((imageList, listIndex) => (
          <div
            key={listIndex}
            className={`transition-transform duration-500 ease-out ${
              scrollState > listIndex ? 'translate-x-0 opacity-100' : '-translate-x-full opacity-0'
            }`}
          >
            <div className="grid grid-cols-5 gap-4">
              {imageList.map((image, imgIndex) => (
                <div key={imgIndex} className="shadow-lg rounded-lg">
                  <Image src={image} alt={`image-${listIndex}-${imgIndex}`} width={150} height={150} />
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;