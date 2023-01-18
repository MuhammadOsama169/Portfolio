import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Autoplay} from "swiper";

import Img1 from "../assets/java-logo.png";
import Img3 from "../assets/tailwind-logo.png";
import Img4 from "../assets/stripe-logo.png";
import Img5 from "../assets/nodejs-logo.png";
import Img6 from "../assets/rest-api-logo.jpg";
import Img7 from "../assets/styledcomponent-logo.png";
import Img8 from "../assets/redux-logo.png";
import Img9 from "../assets/css-logo.webp";
import Img10 from "../assets/html-logo.webp";
import Img11 from "../assets/figma-logo.png";
import Img12 from "../assets/github-logo-2.png";
import Img13 from "../assets/react-logo.png";
import Img14 from "../assets/pstgres-logo.png";
import Img15 from "../assets/MongoDB-Logo.jpg";


import "./skills.css";

export const Slider = () => {
  return (
    <>
      <div className="container">
        <Swiper modules={[Autoplay]} style={{width: '100vw', marginRight: '0px'}}
        slidesPerView={4}
          spaceBetween={0}
          loop={true}
          centeredSlides
          autoplay={{
            delay: 950,
            speed: 1000
          }}

        >
          <SwiperSlide>
            <img src={Img1} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img3} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img4} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img5} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img6} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img7} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img8} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img9} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img10} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img11} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img12} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img13} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img14} alt="" />
          </SwiperSlide>
          <SwiperSlide>
            <img src={Img15} alt="" />
          </SwiperSlide>
        </Swiper>
      </div>
    </>
  );
};