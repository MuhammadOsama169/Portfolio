import "./App.css";
import React, { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { Navbar } from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import { Landing } from "./scenes/Landing";
import { LineGradient } from "./components/LineGradient";
import { MySkills } from "./scenes/MySkills";
import { Testimonials } from "./scenes/Testimonials";
import { About } from "./scenes/About";
import { motion } from "framer-motion";
import { MyProjects } from "./scenes/MyProjects";
import { ParallaxProvider } from "react-scroll-parallax";

export const App = () => {
  // Scroll
  const [selectedPage, setSelectedPage] = useState("home");
  const isAboveMediumScreens = useMediaQuery("(min-width:1080px)");

  const [IsTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY === 0) {
        setIsTopOfPage(true);
        setSelectedPage("home");
      }
      if (window.scrollY !== 0) setIsTopOfPage(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <ParallaxProvider>
      <div className={`dark:bg-[#151312] bg-[#d3d8dc]`}>
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
            viewport={{ once: true, amount: 1 }}
            onViewportEnter={() => setSelectedPage("home")}
          >
            <Landing />
          </motion.div>
        </div>
        {/* <LineGradient /> */}
        <div className=" w-5/6 mx-auto md:h-full">
          <motion.div
            viewport={{ once: true, amount: 1 }}
            onViewportEnter={() => setSelectedPage("skills")}
          >
            <MySkills />
          </motion.div>
        </div>
        {/* <LineGradient /> */}
        <div className=" w-5/6 mx-auto ">
          <motion.div
            viewport={{ once: true, amount: 1 }}
            onViewportEnter={() => setSelectedPage("project")}
          >
            <MyProjects />
          </motion.div>
        </div>
        <LineGradient />

        <div className=" w-5/6 mx-auto ">
          <motion.div
            viewport={{ once: true, amount: 1 }}
            onViewportEnter={() => setSelectedPage("testimonials")}
          >
            <Testimonials />
          </motion.div>
        </div>
        <LineGradient />

        <div className=" w-5/6 mx-auto ">
          <motion.div
            viewport={{ once: true, amount: 1 }}
            onViewportEnter={() => setSelectedPage("about")}
          >
            <About />
          </motion.div>
        </div>
      </div>
    </ParallaxProvider>
  );
};
