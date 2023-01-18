import React from 'react';
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import { Navbar } from './scenes/Navbar';
import { DotGroup } from './scenes/DotGroup';
import { Landing } from './scenes/Landing';
import { LineGradient } from './components/LineGradient';
import { MySkills } from './scenes/MySkills';
import { MyProjects } from './scenes/MyProjects';
import { Testimonials } from './scenes/Testimonials';
import { SliderAboutMe } from './scenes/About';
import { motion } from 'framer-motion';

function App() {
  // Scroll
  const [selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery('(min-width:1080px)');

  const [IsTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage('home');
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // CURSOR
  const [mousePosition, SetMousePosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const mouseMove = (e) => {
      SetMousePosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener('mousemove', mouseMove);
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);

  const variants = {
    default: {
      x: mousePosition.x - 16,
      y: mousePosition.y - 16,
    },
  };

  return (
    <div className="app bg-deep-blue">
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        IsTopOfPage={IsTopOfPage}
      />
      {/* CURSOR */}
      <motion.div
        className="bg-[#fcba03] rounded-full h-[32px] w-[32px] fixed top-0 left-0 border-solid shadow-[inset_50_0_4px_#fae2a5] animate-pulse"
        variants={variants}
        animate="default"
      ></motion.div>

      <div className=" w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup
            selectedPage={selectedPage}
            setSelectedPage={setSelectedPage}
          />
        )}
        <Landing setSelectedPage={selectedPage} />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto md:h-full">
        <MySkills />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto ">
        <MyProjects />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto ">
        <Testimonials />
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto ">
        <SliderAboutMe />
      </div>
    </div>
  );
}

export default App;
