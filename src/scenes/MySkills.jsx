import React from 'react'
import { LineGradient } from '../components/LineGradient'
import {motion} from "framer-motion"
import { Slider } from './Slider'


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
                <p className="font-playfair font-semibold text-4xl mb-5">
                    MY <span className="text-red">SKILLS</span>
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
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Experienced
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-[-1]" />
          </div>

        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-[-1]" />
          </div>

        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
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
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-[-1]" />
          </div>

        </motion.div>
        </div>
        {/* TEXT */}
        <p className="font-nunitosans font-semibold text-center pt-20">
          I USE
        </p>
        <Slider/>
        <p className="font-nunitosans text-center p-4 py-20 font-medium flex flex-col md:flex-row justify-center">
          <span className="">
            TO CREATE &nbsp;
          </span>
          <span className=" text-red font-bold text-2xl">
          BEUTIFUL &nbsp; 
          </span>
          <span>
            &
          </span>
          <span className=" font-bold text-2xl text-teal-400 hover:underline underline-offset-1">
            &nbsp;RESPONSIVE WEBSITES
          </span>
        </p>
    </section>
    </>
  )
}
