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
                <p className="font-playfair font-semibold text-4xl mb-5  dark:text-white text-black">
                    MY <span className="text-redhot">SKILLS</span>
                </p>
                <LineGradient width="w-1/3"/>
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
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experienced
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#8a508f] absolute right-0 top-0 z-[-1]" />
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
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#ff6361] absolute right-0 top-0 z-[-1]" />
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
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-[#ff8531] absolute right-0 top-0 z-[-1]" />
          </div>

        </motion.div>
        </div>
        {/* TEXT */}
        <p className="font-nunitosans font-semibold text-center pt-20  dark:text-white text-black">
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
        <p className="font-nunitosans text-center text-lg p-4 py-20 font-medium flex flex-col md:flex-row justify-center  dark:text-white text-black">
          <span className="">
            TO CREATE &nbsp;
          </span>
          <span className=" text-[#FF165D] font-bold text-2xl">
          BEUTIFUL &nbsp; 
          </span>
          <span>
            &
          </span>
          <span className=" font-bold text-2xl text-[#6FE7DD] hover:underline underline-offset-1">
            &nbsp; RESPONSIVE WEBSITES
          </span>
        </p>
    </section>
    </>
  )
}
