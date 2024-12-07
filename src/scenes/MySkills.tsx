import React from 'react'
import { LineGradient } from '../components/LineGradient'
import {motion} from "framer-motion"
import { Slider } from '../components/Slider'


export const MySkills = () => {

  return (
    <>
    <section id="skills" className="pt-0 pb-24">
        <div className="md:flex md:justify-between md:gap-16 mt-32">
            <motion.div
                className="md:w-1/3"          
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                transition={{ duration: 0.5 }}
                variants={{ hidden: { opacity: 0, x: -50 },visible: { opacity: 1, x: 0 },}}
            >
                <p className="font-playfair font-semibold text-4xl mb-5  dark:text-[#F3EFE0] text-black">
                    MY <span className="dark:text-[#00FFB9] text-redhot">SKILLS</span>
                </p>
                <LineGradient/>
            </motion.div>
        </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32  dark:text-white text-black">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-[#F8485E]  dark:text-white">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3 dark:text-[#F3EFE0] text-[#30475E]">
                Experienced
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 dark:bg-[#8a508f] bg-[#CDF0EA] absolute right-0 top-0 z-[-1]" />
          </div>

        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10  dark:text-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32 ">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-[#F8485E] dark:text-white">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3 dark:text-[#F3EFE0] text-[#30475E]">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 dark:bg-[#ff6361] bg-[#F6C6EA] absolute right-0 top-0 z-[-1]" />
          </div>

        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10  dark:text-white text-black"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl text-[#F8485E] dark:text-white">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3 dark:text-[#F3EFE0] text-[#30475E]">
                Imaginative
              </p> 
            </div>
            <div className="w-1/2 md:w-3/4 h-32 dark:bg-[#ff8531] bg-[#C490E4] absolute right-0 top-0 z-[-1]" />
          </div>

        </motion.div>
        </div>
        {/* TEXT */}
        <p className="font-opensans font-semibold text-center pt-20  dark:text-[#F3EFE0] text-black text-2xl mb-5">
          I USE
        </p>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
        <Slider/>
        </motion.div>
        <p className="font-opensans text-center text-lg p-4 py-20 font-medium flex flex-col md:flex-row justify-center  dark:text-[#F3EFE0] text-black">
          <span className="">
            TO CREATE &nbsp;
          </span>
          <span className=" text-[#30475E] font-bold text-2xl">
          BEAUTIFUL  &nbsp; 
          </span>
          <span className="dark:text-[#F3EFE0]">
            &
          </span>
          <span className=" font-bold text-2xl dark:text-[#00FFB9] text-redhot">
            &nbsp; RESPONSIVE WEBSITES
          </span>
        </p>
    </section>
    </>
  )
}
