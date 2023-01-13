import { LineGradient } from "../components/LineGradient";
import { motion } from "framer-motion";

import renewbeProject from "../assets/renewbe-project.png"
import superkickProject from "../assets/superkick-branding.png"
import githubLogo from "../assets/github-logo.png"



export const MyProjects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
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
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          Aliquam, amet dui feugiat facilisi dui. Aliquam aliquet integer ut
          fames odio in at. At magna ornare dictum lectus. Purus massa morbi
          purus nec eget eleifend ut elit.
        </p>
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
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
            
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            DYANAMIC & STATIC
          </div>
        </motion.div>

      </div>


      <div className="flex flex-col pt-20 ">
      {/* PROJECT 1 */}
          <div className="flex flex-col md:flex-row gap-1 pb-5">
            <div className=" md:basis-[40%] md:order-1"> 
              <img  alt="RenewbeLogo.png" src={superkickProject} />
            </div>
            <div className="md:basis-[60%] px-10"> 
            SuperKick Branding designs clear brand messaging to help your business stand out. For a business to stand out today the brand has to be unique and impactful.
              <div className="flex flex-row gap-2 pt-5">
                <a  href="https://superkickbranding.netlify.app/">
                  <button className="bg-red p-5">Demo website</button> 
                </a>
                
                <a target="_blank" href="https://github.com/MuhammadOsama169/project-outlaw">
                  <button className="bg-white p-2 flex flex-row text-black">
                    <img className="w-[40px] h-[40px]" alt="github.png" src={githubLogo}/>
                    <p className="px-5 flex text-center h-12 items-center justify-center" >View Code</p>
                  </button> 
                </a>

              </div>
            </div>
          </div>
          <div>
            {/* SECOND PROJECT */}
            <div className="flex flex-col md:flex-row gap-1">
              <div className=" md:basis-[40%] md:order-2 lg:order-1"> 
                <img alt="RenewbeLogo.png" src={renewbeProject} />
              </div>
              <div className="md:basis-[60%] px-10"> 
              HomeRun: Is a E-commerce website with custom backend entries and secure payemnt linked with STRIPE payment method.
                <div className="flex flex-row gap-2 pt-5">

                <a  href="https://superkickbranding.netlify.app/">
                  <button className="bg-red p-5">Demo website</button> 
                </a>

                <a target="_blank" href="https://github.com/MuhammadOsama169/Renewbe">
                  <button className="bg-white p-2 flex flex-row text-black">
                        <img className="w-[40px] h-[40px]" alt="github.png" src={githubLogo}/>
                        <p className="px-5 flex text-center h-12 items-center justify-center" >View Code</p>
                  </button> 
                </a>

                </div>
              </div>
            </div>
          </div>
          <div>
            {/* THIRD PROJECT */}
          <div className="flex flex-col md:flex-row gap-1 pt-5">
            <div className=" md:basis-[40%] md:order-1"> 
              <img alt="RenewbeLogo.png" src={renewbeProject} />
            </div>
            <div className="md:basis-[60%] px-10"> 
            Renewbe: A community-driven platform to support local clean energy, save money and help environmental NGOs Subscribe to use or rent a solar panel in a remote location to support clean energy in your country and save money from your electricity bill. Donate a fraction of your savings to an NGO of your choice, engage with their work and learn more about climate activism. Solarity will show you exactly how your donation and your use of renewable energy impacted the world. It will also help you live a more sustainable life and connect you with a community of fellow solar panel users.
              <div className="flex flex-row gap-2 pt-5">

                <a target="_blank" href="https://superkickbranding.netlify.app/">
                  <button className="bg-red p-5">Demo website</button> 
                </a>

                <a target="_blank" href="https://github.com/MuhammadOsama169/Renewbe">
                  <button className="bg-white p-2 flex flex-row text-black">
                      <img className="w-[40px] h-[40px]" alt="github.png" src={githubLogo}/>
                      <p className="px-5 flex text-center h-12 items-center justify-center" >View Code</p>
                  </button> 
                </a>

              </div>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};
