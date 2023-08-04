import './App.css';
import React, { useState, useEffect } from 'react';
import useMediaQuery from './hooks/useMediaQuery';
import { Navbar } from './scenes/Navbar';
import DotGroup from './scenes/DotGroup';
import { Landing } from './scenes/Landing';
import { LineGradient } from './components/LineGradient';
import { MySkills } from './scenes/MySkills';
import { MyProjects } from './scenes/MyProjects';
import { Testimonials } from './scenes/Testimonials';
import { About } from './scenes/About';
import { motion } from 'framer-motion';

const App = () => {
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

  return (
    <div className={`dark:bg-[#27232C] bg-[#d3d8dc]`}>
      <Navbar
        selectedPage={selectedPage}
        setSelectedPage={setSelectedPage}
        IsTopOfPage={IsTopOfPage}
      />

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
          <About setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
    </div>
  );
};

export default App;
