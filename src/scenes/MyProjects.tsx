import React from 'react'

import { LineGradient } from '../components/LineGradient';
import { motion } from 'framer-motion';
import VideoComponent from './VideoComponent';
import superkickLogo from '../assets/logo-superkick.png';
import homerunLogo from '../assets/logo-homerun.png';
import renewbeLogo from '../assets/logo-renewbe.png';
import SeriesOnlineLogo from '../assets/Serieslogo.png';
import ImginifyLogo from '..//assets/imginifyLogo.png';
import githubLogo from '../assets/github-logo.png';
import travelLogo from '../assets/travelguide-logo.svg';
import CodeRacerLogo from '../assets/code-reacer-logo.png';
import HackathonLogo from '../assets/detective.jpg';
import SfbLogo from '../assets/sfb.png';
import { useTranslation } from "react-i18next";
import { getLangDir } from '../helpers/getLang-service';

const projectBox = `flex justify-center text-center items-center p-10 rounded-l-lg dark:bg-[#F3EFE0] bg-[#CDF0EA]
max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-[#30475E]`;

const buttons = `hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]`;
const demoButtons = `p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
hover:bg-blue hover:text-white transition duration-500`;

export const MyProjects = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <section id="projects" className="pt-20 pb-48"     style={{direction:getLangDir()}}>
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div className="mb-10">
          <p className="font-playfair font-semibold text-4xl  dark:text-[#F3EFE0] text-[#30475E]">
            <span className="dark:text-[#00FFB9] text-redhot">{staticData.projects}</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient />
          </div>
        </div>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          {/* ROW 1 */}
          <div className={projectBox}> {staticData.ux}</div>

          <div
            className="flex justify-center text-center items-center p-10 dark:bg-gradient-mint bg-gradient-purple
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-[#30475E]"
          >
             {staticData.smooth}
          </div>
          <div className={projectBox}> {staticData.dynamic}</div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-10 pt-20 ">
                {/* sfb */}
                <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className=" md:basis-[40%] md:order-2 lg:order-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://client-testing.sfb-app.com/workspace"
            >
              <VideoComponent
                className="w-full md:rounded-[40px] h-auto md:h-[300px] md:hover:scale-[1.5] duration-200"
                src={
                  'https://res.cloudinary.com/dwz4buven/video/upload/v1733494751/sfb_kkohp2.mp4'
                }
                type="video/mp4"
              />
            </a>
          </div>

          <div className="md:basis-[60%] px-10 md:mb-10">
            <div className=" md:basis-[40%] md:order-1 mb-3">
              <img
                className="pt-10 md:pt-0 w-[80px]"
                alt="sfb.png"
                src={SfbLogo}
              />
            </div>
            <p className="dark:text-[#BEE0D6] text-black text-xl">
            {staticData.sfb_desc}
            </p>
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://client-testing.sfb-app.com/workspace"
                className={buttons}
              >
                <button className={demoButtons}>
                {staticData.actions.website}
                </button>
              </a>

            </div>
          </div>
        </div>
        {/* travel_guide */}
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className=" md:basis-[40%] md:order-2 lg:order-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://travelguide1.netlify.app/"
            >
              <VideoComponent
                className="w-full md:rounded-[40px] h-auto md:h-[300px] md:hover:scale-[1.5] duration-200"
                src={
                  'https://res.cloudinary.com/dwz4buven/video/upload/v1698214506/travelguide_xfxigd.mp4'
                }
                type="video/mp4"
              />
            </a>
          </div>

          <div className="md:basis-[60%] px-10 md:mb-10">
            <div className=" md:basis-[40%] md:order-1 mb-3">
              <img
                className="pt-10 md:pt-0 w-[200px]"
                alt="SeriesOnlineLogo.png"
                src={travelLogo}
              />
            </div>
            <p className="dark:text-[#BEE0D6] text-black text-xl">
            {staticData.travel_desc}
            </p>
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://travelguide1.netlify.app/"
                className={buttons}
              >
                <button className={demoButtons}> {staticData.actions.demo}</button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MuhammadOsama169/travel_guide"
                className={buttons}
              >
                <button className="dark:bg-[#F3EFE0]  text-black bg-white w-full p-3 flex flex-row  hover:bg-blue  transition duration-500 text-center align-middle items-center justify-center">
                  <img
                    className="w-[30px] xs:w-[25px] xs:h-[27px] mr-2"
                    alt="github.png"
                    src={githubLogo}
                  />
                   {staticData.actions.view_code}
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* AI Murder Mystery */}
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className=" md:basis-[40%] md:order-2 lg:order-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://homerun-next.vercel.app/"
            >
              <VideoComponent
                className="w-full md:rounded-[40px] h-auto md:h-[300px] hover:scale-[1.5] duration-200"
                src={
                  'https://res.cloudinary.com/dwz4buven/video/upload/v1698250579/home_ci9brp.mp4'
                }
                type="video/mp4"
              />
            </a>
          </div>

          <div className="md:basis-[60%] px-10">
            <div className=" md:basis-[40%] md:order-1 mb-3">
              <img
                className="pt-10 md:pt-0"
                alt="HomeRunLogo.png"
                src={homerunLogo}
              />
            </div>
            <p className="dark:text-[#BEE0D6] text-black text-xl">
            {staticData.home_desc}
            </p>
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                href="https://homerun-next.vercel.app/"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button className={demoButtons}> {staticData.actions.demo}</button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MuhammadOsama169/HomeRun"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button className="dark:bg-[#F3EFE0]  text-black bg-white w-full p-3 flex flex-row  hover:bg-blue  transition duration-500 text-center align-middle items-center justify-center">
                  <img
                    className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2"
                    alt="github.png"
                    src={githubLogo}
                  />
                   {staticData.actions.view_code}
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className=" md:basis-[40%] md:order-2 lg:order-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://hackathon-pearl-theta.vercel.app/"
            >
              <VideoComponent
                className="w-full md:rounded-[40px] h-auto md:h-[300px] hover:scale-[1.5] duration-200"
                src={
                  'https://res.cloudinary.com/dwz4buven/video/upload/v1698251127/crime_rfyjho.mp4'
                }
                type="video/mp4"
              />
            </a>
          </div>

          <div className="md:basis-[60%] px-10">
            <div className=" md:basis-[40%] md:order-1 mb-3">
              <img
                className="pt-10 md:pt-0 md:max-w-[100px] max-w-[80px]"
                alt="HomeRunLogo.png"
                src={HackathonLogo}
              />
            </div>
            <p className="dark:text-[#BEE0D6] text-black text-xl">
            {staticData.game_desc}
            </p>
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                href="https://hackathon-pearl-theta.vercel.app/"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button className={demoButtons}> {staticData.actions.demo}</button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MuhammadOsama169/hackathon"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button className="dark:bg-[#F3EFE0]  text-black bg-white w-full p-3 flex flex-row  hover:bg-blue  transition duration-500 text-center align-middle items-center justify-center">
                  <img
                    className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2"
                    alt="github.png"
                    src={githubLogo}
                  />
                   {staticData.actions.view_code}
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* SeriesOnline */}
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className=" md:basis-[40%] md:order-2 lg:order-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://seriesonline.netlify.app/"
            >
              <VideoComponent
                className="w-full md:rounded-[40px] h-auto md:h-[300px] hover:scale-[1.5] duration-200"
                src={
                  'https://res.cloudinary.com/dwz4buven/video/upload/v1698214502/seies_qiempa.mp4'
                }
                type="video/mp4"
              />
            </a>
          </div>

          <div className="md:basis-[60%] px-10 md:mb-10">
            <div className=" md:basis-[40%] md:order-1 mb-3">
              <img
                className="pt-10 md:pt-0 w-[200px]"
                alt="SeriesOnlineLogo.png"
                src={SeriesOnlineLogo}
              />
            </div>
            <p className="dark:text-[#BEE0D6] text-black text-xl">
            {staticData.series_desc}
            </p>
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://seriesonline.netlify.app/"
                className={buttons}
              >
                <button className={demoButtons}> {staticData.actions.demo}</button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MuhammadOsama169/Series_Online"
                className={buttons}
              >
                <button className="dark:bg-[#F3EFE0]  text-black bg-white w-full p-3 flex flex-row  hover:bg-blue  transition duration-500 text-center align-middle items-center justify-center">
                  <img
                    className="w-[30px] xs:w-[25px] xs:h-[27px] mr-2"
                    alt="github.png"
                    src={githubLogo}
                  />
                   {staticData.actions.view_code}                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* CodeRacer */}
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className="md:basis-[40%] md:order-1 basis-0 flex-col">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://superkickbranding.netlify.app/"
            >
              <VideoComponent
                className="w-full md:rounded-[40px] h-auto md:h-[300px] hover:scale-[1.5] duration-200"
                src={
                  'https://res.cloudinary.com/dwz4buven/video/upload/v1698214501/code_tlk5p8.mp4'
                }
                type="video/mp4"
              />
            </a>
          </div>

          <div className="md:basis-[60%] px-10 ">
            <div className=" md:basis-[40%] md:order-1 mb-3 ">
              <img
                className="pt-10 md:pt-0 h-[80px]"
                alt="SuperKickLogo.png"
                src={CodeRacerLogo}
              />
            </div>
            <p className="dark:text-[#BEE0D6] text-black text-xl ">
            {staticData.code_desc}
            </p>

            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://code-racer-eight.vercel.app/"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button className={demoButtons}> {staticData.actions.demo}</button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MuhammadOsama169/code-racer"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button className="dark:bg-[#F3EFE0] bg-white w-full p-3 flex flex-row text-black hover:bg-blue  transition duration-500 text-center align-middle items-center justify-center">
                  <img
                    className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2"
                    alt="github.png"
                    src={githubLogo}
                  />
                   {staticData.actions.view_code}
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* Superkick */}
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className="md:basis-[40%] md:order-1 basis-0 flex-col">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://superkickbranding.netlify.app/"
            >
              <VideoComponent
                className="w-full md:rounded-[40px] h-auto md:h-[300px] hover:scale-[1.5] duration-200"
                src={
                  'https://res.cloudinary.com/dwz4buven/video/upload/v1698214503/superkick_siilnu.mp4'
                }
                type="video/mp4"
              />
            </a>
          </div>

          <div className="md:basis-[60%] px-10 ">
            <div className=" md:basis-[40%] md:order-1 mb-3 ">
              <img
                className="pt-10 md:pt-0"
                alt="SuperKickLogo.png"
                src={superkickLogo}
              />
            </div>
            <p className="dark:text-[#BEE0D6] text-black text-xl ">
            {staticData.superkick_desc}
            </p>

            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://superkickbranding.netlify.app/"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button className={demoButtons}> {staticData.actions.demo}</button>
              </a>

              <a
                target="_blank"
                rel="noreferrer"
                href="https://github.com/MuhammadOsama169/project-outlaw"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button className="dark:bg-[#F3EFE0] bg-white w-full p-3 flex flex-row text-black hover:bg-blue  transition duration-500 text-center align-middle items-center justify-center">
                  <img
                    className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2"
                    alt="github.png"
                    src={githubLogo}
                  />
                   {staticData.actions.view_code}
                </button>
              </a>
            </div>
          </div>
        </div>
        <div>
          {/* Open Ai */}
          <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
            <div className=" md:basis-[40%] md:order-2 lg:order-1">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://imaginify.netlify.app/"
              >
                <VideoComponent
                  className="w-full md:rounded-[40px] h-auto md:h-[300px] hover:scale-[1.5] duration-200"
                  src={
                    'https://res.cloudinary.com/dwz4buven/video/upload/v1698214502/ai_mv5qfj.mp4'
                  }
                  type="video/mp4"
                />
              </a>
            </div>

            <div className="md:basis-[60%] px-10 md:mb-10">
              <div className=" md:basis-[40%] md:order-1 mb-3">
                <img
                  className="pt-10 md:pt-0 w-[200px]"
                  alt="ImginifyLogo.png"
                  src={ImginifyLogo}
                />
              </div>
              <p className="dark:text-[#BEE0D6] text-black text-xl">
              {staticData.imaginify_desc}
              </p>
              <div className="flex flex-col xs:flex-row gap-2 pt-5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://imaginify.netlify.app/"
                  className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
                >
                  <button className={demoButtons}> {staticData.actions.demo}</button>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MuhammadOsama169/Imaginify"
                  className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
                >
                  <button className="dark:bg-[#F3EFE0]  text-black bg-white w-full p-3 flex flex-row  hover:bg-blue  transition duration-500 text-center align-middle items-center justify-center">
                    <img
                      className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2"
                      alt="github.png"
                      src={githubLogo}
                    />
                     {staticData.actions.view_code}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div>
          {/* renewbe*/}
          <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
            <div className=" md:basis-[40%] md:order-2">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://renewbe.netlify.app/"
              >
                <VideoComponent
                  className="w-full md:rounded-[40px] h-auto md:h-[300px] hover:scale-[1.5] duration-200"
                  src={
                    'https://res.cloudinary.com/dwz4buven/video/upload/v1698214502/renewbe_xgnvu0.mp4'
                  }
                  type="video/mp4"
                />
              </a>
            </div>

            <div className="md:basis-[60%] px-10">
              <div className="w-[250px] md:basis-[40%] md:order-1 mb-3">
                <img
                  className="w-[200px] xs:w-auto pt-10 md:pt-0"
                  alt="RenewbeLogo.png"
                  src={renewbeLogo}
                />
              </div>
              <p className="dark:text-[#BEE0D6] text-black text-xl">
              {staticData.renewbe_desc}
              </p>

              <div className="flex flex-col xs:flex-row gap-2 pt-5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://renewbe.netlify.app/"
                  className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
                >
                  <button className={demoButtons}> {staticData.actions.demo}</button>
                </a>

                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://github.com/MuhammadOsama169/Renewbe"
                  className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
                >
                  <button className="dark:bg-[#F3EFE0] text-black bg-white w-full p-3 flex flex-row  hover:bg-blue transition duration-500 text-center align-middle items-center justify-center">
                    <img
                      className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2"
                      alt="github.png"
                      src={githubLogo}
                    />
                     {staticData.actions.view_code}
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </section>
  );
};
