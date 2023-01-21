import { React, useState } from 'react';
import useMediaQuery from '../hooks/useMediaQuery'
import {motion} from 'framer-motion'
import { BasicModal } from '../components/BasicModal';
import SocialMediaIcons from '../components/SocialMediaIcons'
import CoverGif from '../assets/cover.gif'
import ProfileImg from '../assets/profile.png'
import Typewriter from 'typewriter-effect';

export const Landing = ({ setSelectedPage }) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

      const [isShown, setIsShown] = useState(false);
      const handleClick = (event) => {
        setIsShown((current) => !current);
      };
  return (
    
    <section
    id="home" 
    className="md:flex md:justify-between md:items-center gap-16 md:h-full py-10"
    >
        <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
            {isAboveMediumScreens ? (
                <div className=" z-0 ml-20 ">
                    <img alt="profile.gif"
                    src={CoverGif}
                    />
                </div>
            ) : (
                <div  className="z-10 w-full max-w-[400px] md:max-w-[500px]">
                    <img alt="profile"
                    src={ProfileImg}
                    />
                </div>
            )}
        </div>



{/* MAIN SECTION */}
        <div className="z-30 basis-2/5 mt-12 md:mt-32">
          {/* HEADING */}
          <motion.div           
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{ hidden: { opacity: 0, x: -50 },
                    visible: { opacity: 1, x: 0 },
          }}
          >

          <span className="text-6xl font-playfair z-10 text-center md:text-start flex flex-col  dark:text-white text-black">
            Muhammad {""}
            <Typewriter
              className="text-4xl"
              options={{
              strings: ['< Osama > '],
              autoStart: true,
              loop: true,
              }}
              />
          </span>
          <p className="mt-10 pt-5 mb-7 text-lg text-center md:text-start  dark:text-white text-black">
          Muhammad has 5 years+ of experience writing web apps in trave-related industries. She has extensive knowledge of JavaScript and browser APIs as well as significant experience with popular frameworks and libraries like React and Redux.
          </p>


        </motion.div>
        {/* CALL TO ACTIONS */}
          <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >


          <button
            className="bg-[#FF165D] text-white rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500 shadow-[10px_20px_20px_rgba(255,0,0,30%)]"
            onClick={handleClick}
          >
            Contact Me
          </button>

        </motion.div>
        {isShown && (
              <div>
                <BasicModal openModal={setIsShown} closeModal={handleClick} />
              </div>
            )}




{/* SOCIAL MEDIAL SECTION */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
        </div>
    </section>
  )
}
