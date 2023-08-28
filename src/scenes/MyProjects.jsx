import { LineGradient } from '../components/LineGradient';
import { motion } from 'framer-motion';
import homerunProject from '../assets/homerun-website.png';
import renewbeProject from '../assets/renewbe-project.png';
import superkickProject from '../assets/superkick-branding.png';
import superkickLogo from '../assets/logo-superkick.png';
import homerunLogo from '../assets/logo-homerun.png';
import renewbeLogo from '../assets/logo-renewbe.png';
import SeriesOnlineLogo from '../assets/Serieslogo.png';
import ImginifyLogo from '..//assets/imginifyLogo.png';
import githubLogo from '../assets/github-logo.png';
import ImaginifyProject from '../assets/imaginify.png';
import SeriesOnlineProject from '../assets/series.png';
import travelProject from '../assets/travel-guide-preview.png';
import travelLogo from '../assets/travelguide-logo.svg';
import CodeRacerLogo from '../assets/code-reacer-logo.png';
import CodeRacerProject from '../assets/code-reacer-project.png';

const projectBox = `flex justify-center text-center items-center p-10 rounded-l-lg dark:bg-[#F3EFE0] bg-[#CDF0EA]
max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-[#30475E]`;

const buttons = `hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]`;
export const MyProjects = () => {
  return (
    <section id="projects" className="pt-20 pb-48">
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
            <span className="dark:text-[#00FFB9] text-redhot">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
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
          <div className={projectBox}>BEAUTIFUL USER INTERFACES</div>

          <div
            className="flex justify-center text-center items-center p-10 dark:bg-gradient-mint bg-gradient-purple
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-[#30475E]"
          >
            SMOOTH USER EXPERIENCE
          </div>
          <div className={projectBox}>DYANAMIC & STATIC</div>
        </motion.div>
      </div>

      <div className="flex flex-col gap-10 pt-20 ">
        {/* travel_guide */}
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className=" md:basis-[40%] md:order-2 lg:order-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://travelguide1.netlify.app/"
            >
              <img alt="TravelProject.png" src={travelProject} />
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
              Discover a captivating travel website that showcases real-time
              posts from fellow travelers. This impressive full-stack app,
              powered by Next.js 13, TypeScript, Prisma, and MongoDB, enables
              users to store and explore a wide range of travel experiences
              shared by new members joining the platform.
            </p>
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://travelguide1.netlify.app/"
                className={buttons}
              >
                <button
                  className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
                  hover:bg-blue hover:text-white transition duration-500"
                >
                  Demo website
                </button>
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
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
        {/* HomeRun */}
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className=" md:basis-[40%] md:order-2 lg:order-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://homerun-next.vercel.app/"
            >
              <img alt="HomerunProject.png" src={homerunProject} />
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
              HomeRun: Is a E-commerce website with custom backend entries and
              secure payemnt linked with STRIPE payment method.It utilizes Redux
              toolkit as state managment tool, Prisma and Tailwind CSS
            </p>
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                href="https://homerun-next.vercel.app/"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button
                  className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                >
                  Demo website
                </button>
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
                  View Code
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div>
        {/* SeriesOnline */}
        <div className="flex flex-col xs:flex-col md:flex-row gap-1 pb-5 mt-10">
          <div className=" md:basis-[40%] md:order-2 lg:order-1">
            <a
              target="_blank"
              rel="noreferrer"
              href="https://seriesonline.netlify.app/"
            >
              <img alt="HomerunProject.png" src={SeriesOnlineProject} />
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
              A modern movie website that showcases upcoming movies, provides
              reviews and ratings and allows users to search. It utilizes Redux
              Toolkit for state management and OAuth with Firebase for
              authentication of users.
            </p>
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://seriesonline.netlify.app/"
                className={buttons}
              >
                <button
                  className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
                  hover:bg-blue hover:text-white transition duration-500"
                >
                  Demo website
                </button>
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
                  View Code
                </button>
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
              <img
                alt="Coderacer.png"
                src={CodeRacerProject}
                className=" md:w-auto"
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
              Contributed to an open source project. Code Racer, a community
              project built with Next.js, Tailwind CSS, and TypeScript. Code
              Racer is a multiplayer coding game where developers can compete
              against each other to solve programming challenges in real-time.
              Sharpen your coding skills, challenge your peers, and have fun
              while racing against the clock!
            </p>

            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://code-racer-eight.vercel.app/"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button
                  className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                >
                  Demo website
                </button>
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
                  View Code
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
              <img
                alt="SuperKickProject.png"
                src={superkickProject}
                className=" md:w-auto"
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
              As part of the Superkick Branding team, I contributed to the
              development of multiple modern websites that effectively rebranded
              companies and aligned them with their missions.
            </p>

            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://superkickbranding.netlify.app/"
                className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
              >
                <button
                  className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                >
                  Demo website
                </button>
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
                  View Code
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
                <img alt="ImaginifyProject.png" src={ImaginifyProject} />
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
                Imaginify: Is a web platform that utilizes OpenAI's DALL-E API
                to generate images based on prompts provided by the user.
                <br></br>In addition to the AI-generated images, the app also
                provides a library of high-definition, royalty-free images from
                Unsplash, allowing users to browse and download images to use in
                their projects.
              </p>
              <div className="flex flex-col xs:flex-row gap-2 pt-5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://imaginify.netlify.app/"
                  className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
                >
                  <button
                    className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                  >
                    Demo website
                  </button>
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
                    View Code
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
                <img alt="RenewbeProject.png" src={renewbeProject} />
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
                {' '}
                Renewbe: A community-driven platform to support local clean
                energy, save money and help environmental NGOs Subscribe to use
                or rent a solar panel in a remote location to support clean
                energy in your country and save money from your electricity
                bill.
              </p>

              <div className="flex flex-col xs:flex-row gap-2 pt-5">
                <a
                  target="_blank"
                  rel="noreferrer"
                  href="https://renewbe.netlify.app/"
                  className="hover:opacity-[0.8] transition duration-500 hover:scale-[1.1]"
                >
                  <button
                    className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500"
                  >
                    Demo website
                  </button>
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
                    View Code
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
