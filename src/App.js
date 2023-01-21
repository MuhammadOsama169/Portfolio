import React from 'react';
import { useEffect, useState } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import { Navbar } from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import { Landing } from './scenes/Landing';
import { LineGradient } from './components/LineGradient';
import { MySkills } from './scenes/MySkills';
import { MyProjects } from './scenes/MyProjects';
import { Testimonials } from './scenes/Testimonials';
import { SliderAboutMe } from './scenes/SliderAboutMe';
import { motion } from 'framer-motion';
import { RiMoonClearFill, RiSunFill } from 'react-icons/ri';
import './App.css';

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
    <div className={`dark:bg-deep-blue bg-[#e8eef1]`}>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        IsTopOfPage={IsTopOfPage}
      />

      {/* CURSOR */}
      <motion.div
        className="bg-[#fcba03] rounded-full h-[32px] w-[32px] fixed top-0 left-0 z-auto border-solid shadow-[0_0_4px_#fcba03] animate-pulse"
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
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('home')}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />
      <div className=" w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('skills')}
        >
          <MySkills setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />

      <div className=" w-5/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('projects')}
        >
          <MyProjects setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />

      <div className=" w-5/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('testimonials')}
        >
          <Testimonials setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      <LineGradient />

      <div className=" w-5/6 mx-auto ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage('about')}
        >
          <SliderAboutMe setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
