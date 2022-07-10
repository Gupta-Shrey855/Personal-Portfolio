import React, { useContext } from "react";
import "./Portfolio.css";
import { Swiper, SwiperSlide } from "swiper/react"
import "swiper/css";
import stock from "../../img/stock.png";
import chess from "../../img/chess.png";
import brainteaser from "../../img/brainteaser.png";
import todo from "../../img/todo.png";
import chatapp from "../../img/chatapp.png";
import { themeContext } from "../../Context";
const Portfolio = () => {
  const theme = useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="portfolio" id="portfolio">
      <span style={{color: darkMode?'white': ''}}>Recent Projects</span>
      <span>Portfolio</span>

      {/* slider */}
      <Swiper
        spaceBetween={30}
        slidesPerView={3}
        grabCursor={true}
        className="portfolio-slider"
      >
        <SwiperSlide>
          <img src={todo} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={chess} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={stock} alt="" />
        </SwiperSlide>
         <SwiperSlide>
          <img src={brainteaser} alt="" />
        </SwiperSlide> 
        <SwiperSlide>
          <img src={chatapp} alt="" />
        </SwiperSlide> 
      </Swiper>
    </div>
  );
};

export default Portfolio;
