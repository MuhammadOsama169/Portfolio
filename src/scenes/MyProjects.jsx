import { LineGradient } from "../components/LineGradient";
import { motion } from "framer-motion";
import homerunProject from "../assets/homerun-website.png"
import renewbeProject from "../assets/renewbe-project.png"
import superkickProject from "../assets/superkick-branding.png"
import superkickLogo from "../assets/logo-superkick.png"
import homerunLogo from "../assets/logo-homerun.png"
import renewbeLogo from "../assets/logo-renewbe.png"
import githubLogo from "../assets/github-logo.png"




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
          <div
            className="flex justify-center text-center items-center p-10 rounded-l-lg dark:bg-[#F3EFE0] bg-[#CDF0EA]
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-[#30475E]"
          >
            BEAUTIFUL USER INTERFACES
          </div>
            
          <div
            className="flex justify-center text-center items-center p-10 dark:bg-gradient-mint bg-gradient-purple
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-[#30475E]"
          >
            SMOOTH USER EXPERIENCE
          </div>
          <div
            className="flex justify-center text-center items-center p-10 rounded-r-lg dark:bg-[#F3EFE0] bg-[#CDF0EA]
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold text-[#30475E]"
          >
            DYANAMIC & STATIC
          </div>
        </motion.div>

      </div>

      <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
      <div className="flex flex-col gap-10 pt-20 ">
          {/* PROJECT 1 */}
          <div className="flex flex-col md:flex-row gap-1 pb-5">
            
            <div className="md:basis-[40%] md:order-1"> 
              <img  alt="SuperKickProject.png" src={superkickProject} />
            </div>

            <div className="md:basis-[60%] px-10 ">

            <div className=" md:basis-[40%] md:order-1 mb-3 "> 
              <img className="pt-10 md:pt-0" alt="SuperKickLogo.png" src={superkickLogo} />
            </div>
              <p className="dark:text-[#BEE0D6] text-black text-xl "> SuperKick Branding designs clear brand messaging to help your business stand out. For a business to stand out today the brand has to be unique and impactful.</p> 
          
              <div className="flex flex-col xs:flex-row gap-2 pt-5">
                <a  href="https://superkickbranding.netlify.app/">
                  <button className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">Demo website</button> 
                </a>
                
                <a target="_blank" rel="noreferrer" href="https://github.com/MuhammadOsama169/project-outlaw">
                  <button className="dark:bg-[#F3EFE0] bg-white w-full p-3 flex flex-row text-black hover:bg-blue hover:text-white transition duration-500 text-center align-middle items-center justify-center">
                    <img className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2" alt="github.png" src={githubLogo}/>
                    View Code
                  </button> 
                </a>

              </div>
            </div>
          </div>
          <div>
            {/* SECOND PROJECT */}
            <div className="flex flex-col xs:flex-row gap-2 pt-5">
              <div className=" md:basis-[40%] md:order-2 lg:order-1"> 
                <img alt="HomerunProject.png" src={homerunProject} />
              </div>

              <div className="md:basis-[60%] px-10"> 
                <div className=" md:basis-[40%] md:order-1 mb-3"> 
                  <img  className="pt-10 md:pt-0" alt="HomeRunLogo.png" src={homerunLogo} />
                </div>
                <p className="dark:text-[#BEE0D6] text-black text-xl">HomeRun: Is a E-commerce website with custom backend entries and secure payemnt linked with STRIPE payment method. </p>
                <div className="flex flex-col xs:flex-row gap-2 pt-5">

                <a  href="https://superkickbranding.netlify.app/">
                  <button className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">Demo website</button> 
                </a>

                <a target="_blank" rel="noreferrer" href="https://github.com/MuhammadOsama169/HomeRun">
                  <button className="dark:bg-[#F3EFE0]  text-black bg-white w-full p-3 flex flex-row  hover:bg-blue hover:text-white transition duration-500 text-center align-middle items-center justify-center">
                      <img className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2" alt="github.png" src={githubLogo}/>
                      View Code
                    </button> 
                </a>

                </div>
              </div>
            </div>
          </div>
          <div>
            {/* THIRD PROJECT */}
          <div className="flex flex-col xs:flex-row gap-2 pt-5">
            <div className=" md:basis-[40%] md:order-2"> 
              <img  alt="RenewbeProject.png" src={renewbeProject} />
            </div>

            <div className="md:basis-[60%] px-10">
              <div className="w-[250px] md:basis-[40%] md:order-1 mb-3"> 
                <img  className="w-[200px] xs:w-auto pt-10 md:pt-0" alt="RenewbeLogo.png" src={renewbeLogo} />
              </div>
              <p className="dark:text-[#BEE0D6] text-black text-xl"> Renewbe: A community-driven platform to support local clean energy, save money and help environmental NGOs Subscribe to use or rent a solar panel in a remote location to support clean energy in your country and save money from your electricity bill.</p> 
          
              <div className="flex flex-col xs:flex-row gap-2 pt-5">

                <a target="_blank" rel="noreferrer" href="https://superkickbranding.netlify.app/">
                  <button className="p-3 w-full xs:p-3.5 dark:bg-[#00FFB9] bg-redhot dark:text-black text-white  rounded-sm py-5 px-7 font-semibold
              hover:bg-blue hover:text-white transition duration-500">Demo website</button> 
                </a>

                <a target="_blank" rel="noreferrer" href="https://github.com/MuhammadOsama169/Renewbe">
                  <button className="dark:bg-[#F3EFE0] text-black bg-white w-full p-3 flex flex-row  hover:bg-blue hover:text-white transition duration-500 text-center align-middle items-center justify-center">
                      <img className="w-[30px] xs:w-[30px] xs:h-[27px] mr-2" alt="github.png" src={githubLogo}/>
                      View Code
                    </button> 
                </a>

              </div>
            </div>
          </div>
          </div>
        </div>
        </motion.div>

    </section>
  );
};
