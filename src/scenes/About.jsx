import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {motion} from 'framer-motion'
import { LineGradient } from "../components/LineGradient";

import Img4 from "../assets/climathon.jpg";
import Img3 from "../assets/team.jpg";
import Img1 from "../assets/efa.jpg";
import Img5 from "../assets/efa-trophy.jpg";
import Img6 from "../assets/tech-lead.jpg";
import "./AboutMe.css";

export const SliderAboutMe = () => {
  return (
      <section id="about" className="margin-gap">
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
          <p className="font-playfair font-semibold text-4xl">
          My<span className="text-[#FFD700]">&nbsp;ACHIEVEMENTS</span>
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>

      </motion.div>
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
          className="mySwiper"
        >
          <SwiperSlide className="flex flex-col">
          <p className=" mb-[20px] font-light md:text-3xl flex flex-row">Tech lead for Renewbe , Co-founder and <p className="text-redhot font-medium">&nbsp; Developer &nbsp;</p> for Renewbe</p>
            <img src={Img1} alt="" />
            
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
          <p className=" mb-[20px] font-light md:text-3xl flex flex-row">Experience in working with <p className="text-blue font-medium">&nbsp; Teams.</p></p>
            <img src={Img3} alt="" />

          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
          <p className=" mb-[20px] font-light md:text-3xl flex flex-row">Participated in <p className="text-blue font-medium">&nbsp; Climathon Zurich &nbsp;</p> with other team mates</p>
            <img src={Img4} alt="" />
          </SwiperSlide >
          <SwiperSlide className="flex flex-col">
          <p className=" mb-[20px] font-light md:text-3xl">Renewbe compnay I<b className="text-redhot font-medium">&nbsp;Co-founded &nbsp;</b>won <b className="text-[#FFD700] font-medium">&nbsp;First Prize&nbsp;</b>in the European Forum Alpbach along with seed fund, Renewbe was the first prize winner during the European Forum Alpbach</p>
            <img src={Img5} alt="" />
           
          </SwiperSlide>
          <SwiperSlide className="flex flex-col"> 
          <p className=" mb-[20px] font-light md:text-3xl flex flex-row"><p className="text-redhot font-medium">&nbsp; Tech Lead &nbsp;</p> for Hult Prize Austria</p>
            <img src={Img6} alt="" />
            
          </SwiperSlide>
        </Swiper>
      </section>
  );
};