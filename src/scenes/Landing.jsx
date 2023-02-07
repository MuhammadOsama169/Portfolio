import { React } from 'react';
import useMediaQuery from '../hooks/useMediaQuery'
import {motion} from 'framer-motion'
import SocialMediaIcons from '../components/SocialMediaIcons'
import ProfileImg from '../assets/cover-image.jpg'
import Typewriter from 'typewriter-effect';

export const Landing = ({ setSelectedPage }) => {

    const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");

  return (
    
    <section
    id="home" 
    className="md:flex md:justify-between md:h-full py-10"
    >
        <div className="md:order-2 flex basis-1/2 md:mt-[200px] mt-16 z-10 ">
            {isAboveMediumScreens ? (
              <div >
                <div className="absolute" >
                  <img className=" rounded-lg w-[500px] top-0" alt="profile"
                    src={ProfileImg}
                    />
                </div>

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

          <span className="text-6xl font-playfair z-10 text-center md:text-start flex flex-col  dark:text-[#F3EFE0] text-black">
            Muhammad {""}
            <Typewriter
              className="text-4xl"
              options={{
              strings: ['< Osama /> '],
              autoStart: true,
              loop: true,
              }}
              />
          </span>
          <p className="mt-10 pt-5 mb-7 text-lg text-center md:text-start font-opensans dark:text-[#BEE0D6] text-[#30475E]">
          Self-Taught Frontend Developer with a passion for creating visually appealing and user-friendly websites. Enthusiastic problem solver who is always looking for new challenges to tackle and expand my skills. Bringing a unique blend of technical expertise and creative thinking to every project. <span className="font-semibold text-2xl"> Let's work together to bring your next website to life!.</span>
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

          <a  href="mailto:m.osama169@gmail.com" className="hover:opacity-[0.98] transition duration-500 hover:scale-[1.1]">
            <button
                className="dark:bg-[#00FFB9] bg-redhot dark:text-black text-white rounded-sm py-5 px-7 font-semibold
                 shadow-[10px_20px_20px_rgba(48,30,103,100%)] dark:shadow-[10px_20px_20px_rgba(255,0,0,30%)]"
            >
              Get In Touch With Me
            </button>
          </a>

        </motion.div>





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
