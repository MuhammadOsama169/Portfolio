import { LineGradient } from "../components/LineGradient";
import { motion } from "framer-motion";
import marinPhoto from "../assets/marina-photo.png"
import juxhinaPhoto from "../assets/juxhina-photo.png"
import bernardPhoto from "../assets/bernard-photo.jfif"

export const Testimonials = () => {
  return (
    <section id="testimonials" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-1/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          TESTIMONIALS
        </p>
        <LineGradient width="mx-auto w-2/5" />
        <p className="mt-10 mb-14 text-l">
          Here's What People are Saying About My Work. 
        </p>
      </motion.div>




      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-8  py-3 ">

        {/* IMAGE CONTAINER */}
        <motion.a
          className="flex mx-auto flex-col justify-between max-w-xs mb-8 "
          whileHover={{ scale: 0.85 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
        <div className="flex flex-col border-solid rounded-3xl bg-red pb-10 ">
          <img className="max-w-sm h-auto rounded-b-lg " alt="" src={marinPhoto}/>
          <div className="flex flex-row">
            <p className="font-playfair text-6xl">“</p>

            <p className="text-center text-xl mt-5">
            Muhammad extraordinarily contributed to the successful results. I thus can recommend Muhammad as an enduring, focused, and creative team player that is essential for successful innovation challenges.
            </p>
          </div>
          <p className="text-center text-l italic mt-5">
          Copyeditor at CNN en Español
          </p>
        </div>
        </motion.a>

        <motion.a
          className="flex mx-auto flex-col justify-between max-w-xs mb-8"
          whileHover={{ scale: 0.85}}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}

          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
        <div className="flex flex-col border-solid rounded-3xl bg-red pb-10  ">
          <img className="max-w-sm h-auto rounded-b-lg " alt="" src={juxhinaPhoto}/>
          <div className="flex flex-row">
            <p className="font-playfair text-6xl pl-2">“</p>

            <p className="text-center text-xl mt-5 ">
            Muhammad is a very creative web developer. His passion for his profession translates into his enthusiasm to provide a great service and product, his diligence and his positivism toward larger goals.
            </p>
          </div>
          <p className="text-center text-l italic mt-5">
          Content Marketing Team Lead at Empact Partners
          </p>
        </div>
        </motion.a>

        <motion.a
          className="flex mx-auto flex-col justify-between max-w-xs mb-8"
          whileHover={{ scale: 0.85 }}
          onHoverStart={e => {}}
          onHoverEnd={e => {}}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.3 }}
          variants={{
            hidden: { opacity: 0, scale: 0.8 },
            visible: { opacity: 1, scale: 1 },
          }}
        >
        <div className="flex flex-col border-solid rounded-3xl bg-red pb-5 ">
          <img className="max-w-sm h-auto rounded-b-lg " alt="" src={bernardPhoto}/>
          <div className="flex flex-row">
            <p className="font-playfair text-6xl pl-2">“</p>

            <p className="text-center text-xl mt-5 ">
            Muhammad extraordinarily contributed to the successful results. I thus can recommend Muhammad as an enduring, focused, and creative team player that is essential for successful innovation challenges.
            </p>
          </div>
          <p className="text-center text-l italic mt-5 ">
          R&D - Fachexperte Produktdigitalisierung bei Lindner Recyclingtech
          </p>
        </div>
        </motion.a>
      </div>
    </section>
  );
};
