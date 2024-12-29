import { motion } from "framer-motion";

import { useTranslation } from "react-i18next";
import { getLangDir } from "../helpers/getLang-service";
import { getLang } from "../helpers/localStorageService";
import { testimonials } from "../assets/data/testimonialData";
import { TestimonialCard } from "../components/TestimonialCard";

export const Testimonials = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <section
      id="testimonial"
      className=" pb-16"
      style={{ direction: getLangDir() }}
    >
      {/* HEADING */}
      <motion.div
        className={`text-center font-bold text-[50px] my-10  ${
          getLang() === "en" ? "md:text-left" : "md:text-right"
        }`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <h1>{staticData.heres_what}</h1>

        <h1 className="text-[#353334] ">{staticData.about_my_work}</h1>
      </motion.div>

      {/* TESTIMONIALS */}
      <div className="md:flex md:justify-between gap-2  py-3 ">
        {testimonials.map((testimonial) => (
          <TestimonialCard key={testimonial.imgSrc} data={testimonial} />
        ))}
      </div>
    </section>
  );
};
