import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay, Pagination, Navigation } from "swiper";
import {motion} from 'framer-motion'
import { LineGradient } from "../components/LineGradient";
import { Journey } from "../components/Journey";
import SocialMediaIcons from "../components/SocialMediaIcons"

import Img1 from "../assets/efa.jpg";
import Img3 from "../assets/team.jpg";
import Img4 from "../assets/climathon.jpg";
import Img5 from "../assets/efa-trophy.jpg";
import Img6 from "../assets/tech-lead.jpg";
import Img7 from "../assets/photo-muhammad.jpg";
import Img8 from "../assets/social-gathering.jpeg";
import Img9 from "../assets/social-muhammad.jpg";
import Img10 from "../assets/fuchs.jpg";
import Img11 from "../assets/meeting-university.jpg";

import "./AboutMe.css";


export const About = () => {
  return (
    <section id="about" className="md:w-[80%] mx-auto text-center mt-5">
        <p className="font-playfair font-semibold text-4xl  dark:text-white text-black md:mt-0 mt-10">
          About<span className="dark:text-[#00FFB9] text-[#FF165D]">&nbsp;Me</span>
        </p>
      <Journey />
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
            My<span className="dark:text-[#00FFB9] text-[#FF165D]">&nbsp;ACHIEVEMENTS&nbsp;</span>& More!
          </p>
          <div className="flex justify-end mt-5">
            <LineGradient width="w-1/3" />
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
          <SwiperSlide className="flex flex-col ">
          <p className=" mb-[20px] font-light md:text-3xl  dark:text-[#BEE0D6] text-black text-center md:text-left">Tech lead for Renewbe , Co-founder and<span className="dark:text-[#00FFB9] text-[#C490E4]  font-medium">&nbsp; Developer &nbsp;</span>for Renewbe</p>
            <img className="swiper-first-slide" src={Img1} alt="" />
            
          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
          <p className=" mb-[50px] md:mb-[20px] font-light md:text-3xl  dark:text-white text-black">Experience in working with<span className="dark:text-[#00FFB9] text-[#C490E4] font-medium">&nbsp;Teams.</span></p>
            <img  src={Img3} alt="" />

          </SwiperSlide>
          <SwiperSlide className="flex flex-col">
          <p className=" mb-[20px] font-light md:text-3xl dark:text-white text-black">Participated in<span className="dark:text-[#00FFB9] text-[#C490E4]  font-medium">&nbsp; Climathon Zurich &nbsp;</span>with other team mates</p>
            <img src={Img4} alt="" />
          </SwiperSlide >
          <SwiperSlide className="flex flex-col">
          <p className=" mb-[20px] font-light md:text-3xl  dark:text-white text-black text-center">Renewbe compnay I<b className="dark:text-[#00FFB9] text-[#C490E4]  font-medium">&nbsp;Co-founded &nbsp;</b>won <b className="text-[#FFD700] font-medium">&nbsp;First Prize&nbsp;</b>in the European Forum Alpbach along with seed fund, Renewbe was the first prize winner during the European Forum Alpbach</p>
            <img src={Img5} alt="" />
           
          </SwiperSlide>
          <SwiperSlide className="flex flex-col"> 
          <p className=" mb-[20px] font-light md:text-3xl  dark:text-white text-black"><span className="dark:text-[#00FFB9] text-[#C490E4]  font-medium">&nbsp; Tech Lead &nbsp;</span> for Hult Prize Austria</p>
            <img src={Img6} alt="" />
          </SwiperSlide>

          <SwiperSlide className="flex flex-col"> 
            <img src={Img7} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col"> 
            <img src={Img8} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col"> 
            <img src={Img9} alt="" />
          </SwiperSlide>
          <SwiperSlide className="flex flex-col"> 
            <img src={Img10} alt="" />
            
          </SwiperSlide>
          <SwiperSlide className="flex flex-col"> 
            <img src={Img11} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
      </div>
        <div className="md:mt-10 mt-5">
          <p className="font-playfair font-semibold text-4xl  dark:text-white text-black md:mt-0 ">
          Discover More About<span className="dark:text-[#00FFB9] text-[#FF165D]">&nbsp;Me</span>
          </p>
        <div className="flex justify-center">
          <SocialMediaIcons />
        </div>
      </div>
      </section>
  );
};