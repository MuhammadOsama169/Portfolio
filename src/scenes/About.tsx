import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import { motion } from "framer-motion";
import { LineGradient } from "../components/LineGradient";
import SocialMediaIcons from "../components/SocialMediaIcons";

import Img1 from "../assets/efa.jpg";
import Img3 from "../assets/team.jpg";
import Img4 from "../assets/climathon.jpg";
import Img5 from "../assets/efa-trophy.jpg";
import Img6 from "../assets/tech-lead.jpg";
import Img7 from "../assets/mena.png";
import Img8 from "../assets/leap.jpg";

import "./AboutMe.css";
import { useTranslation } from "react-i18next";
import { getLangDir } from "../helpers/getLang-service";
import { getLang } from "../helpers/localStorageService";

export const About = () => {
  const { t } = useTranslation();
  const staticData: any = t("lists");

  return (
    <section
      id="about"
      className="md:w-[80%] mx-auto text-center mt-5"
      style={{ direction: getLangDir() }}
    >
      {/* <p className="font-playfair font-semibold text-4xl  dark:text-white text-black md:mt-0 mt-10">
        About
        <span className="dark:text-[#00FFB9] text-[#FF165D]">&nbsp;Me</span>
      </p> */}
      {/* <Journey /> */}
      <div className="margin-gap">
        <motion.div
          className="md:w-[60%] mx-auto text-center"
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
            <p className="font-playfair font-semibold text-4xl  dark:text-white text-black text-start md:mt-0 mt-10 break-words">
              {staticData.my}
              <span className="dark:text-[#00FFB9] text-[#FF165D]">
                &nbsp;{staticData.my_achivements}&nbsp;
              </span>
            </p>
            <div className="flex  mt-5">
              <LineGradient
                width={`${getLang() === "en" ? "w-[80%]" : "w-[60%]"}`}
              />
            </div>
          </div>
        </motion.div>
        <div className="container-1">
          <Swiper
            spaceBetween={30}
            centeredSlides
            autoplay={{
              delay: 5500,
              disableOnInteraction: false,
            }}
            pagination={{
              clickable: true,
            }}
            navigation
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper "
          >
            <SwiperSlide className="flex flex-col">
              <p className=" mb-[50px] md:mb-[20px] font-light md:text-3xl  dark:text-white text-black">
                {staticData.present_sfb}
                <span className="dark:text-[#00FFB9] text-[#C490E4] font-medium">
                  &nbsp; MENA 2024
                </span>
              </p>
              <img src={Img7} alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col">
              <p className=" mb-[50px] md:mb-[20px] font-light md:text-3xl  dark:text-white text-black">
                {staticData.present_sfb}
                <span className="dark:text-[#00FFB9] text-[#C490E4] font-medium">
                  &nbsp; LEAP 2024
                </span>
              </p>
              <img src={Img8} alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col">
              <p className=" mb-[50px] md:mb-[20px] font-light md:text-3xl  dark:text-white text-black">
                {staticData.exp_working}
                <span className="dark:text-[#00FFB9] text-[#C490E4] font-medium">
                  &nbsp;{staticData.teams}
                </span>
              </p>
              <img src={Img3} alt="" />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col ">
              <p
                className={`mb-[20px] font-light md:text-3xl  dark:text-[#BEE0D6] text-black text-center `}
              >
                {staticData.tech_lead_renewbe}
                <span className="dark:text-[#00FFB9] text-[#C490E4]  font-medium">
                  &nbsp; {staticData.developer} &nbsp;
                </span>
                {staticData.for_renewbe}
              </p>
              <img className="swiper-first-slide" src={Img1} alt="" />
            </SwiperSlide>

            <SwiperSlide className="flex flex-col">
              <p className=" mb-[20px] font-light md:text-3xl dark:text-white text-black">
                {staticData.participated}
                <span className="dark:text-[#00FFB9] text-[#C490E4]  font-medium">
                  &nbsp; Climathon Zurich &nbsp;
                </span>
              </p>
              <img src={Img4} alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col">
              <p className=" mb-[20px] font-light md:text-3xl  dark:text-white text-black text-center">
                {staticData.renewbe_company_i}
                <b className="dark:text-[#00FFB9] text-[#C490E4]  font-medium">
                  &nbsp;{staticData.won} &nbsp;
                </b>
                <b className="text-[#FFD700] font-medium">
                  &nbsp;{staticData.first_prize}&nbsp;
                </b>
                {staticData.efa}
              </p>
              <img src={Img5} alt="" />
            </SwiperSlide>
            <SwiperSlide className="flex flex-col">
              <p className=" mb-[20px] font-light md:text-3xl  dark:text-white text-black">
                <span className="dark:text-[#00FFB9] text-[#C490E4]  font-medium">
                  &nbsp; {staticData.tech_lead}&nbsp;
                </span>
                {staticData.for_hult}
              </p>
              <img src={Img6} alt="" />
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
      <div className="md:mt-10 mt-5">
        <p className="font-playfair font-semibold text-4xl  dark:text-white text-black md:mt-0 ">
          {staticData.discover}
        </p>
        <div className="flex justify-center">
          <SocialMediaIcons />
        </div>
      </div>
    </section>
  );
};
