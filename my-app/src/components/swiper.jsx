import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
// import "/src/App.css";

// import required modules
import { Pagination, Navigation } from "swiper";
import { jsxDEV as _jsxDEV } from "react";
export default function Slider() {
  return (
    //     <>
    <div className="boxesofOffer">
      <h1 className="Todayoffer">TODAY'S TOP OFFERS</h1>
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        slidesPerGroup={4}
        loop={true}
        loopFillGroupWithBlank={false}
        pagination={{
          clickable: true,
        }}
        style={{ width: "85%" }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className="pro_box">
          <h3 className="Pro_title">BODY MIST</h3>

          <h3 className="pro_price">
            <a href="https://www.bathandbodyworks.in/c/body-care/">
              Select @1099
            </a>
          </h3>

          <button className="Shop_Button">SHOP</button>
        </SwiperSlide>
        <SwiperSlide className="pro_box">
          <h3 className="Pro_title">BODY CARE</h3>

          <h3 className="pro_price">
            <a href="https://www.bathandbodyworks.in/c/home-fragrance/candles/3-wick-candles/">
              BUY 3 Get 1
            </a>
          </h3>

          <button className="Shop_Button">SHOP</button>
        </SwiperSlide>
        <SwiperSlide className="pro_box">
          <h3 className="Pro_title">3-WICK CAND..</h3>

          <h3 className="pro_price">
            <Link to={"/products"}>All @800 Off</Link>
          </h3>

          <button className="Shop_Button">SHOP</button>
        </SwiperSlide>
        <SwiperSlide className="pro_box">
          <h3 className="Pro_title">SINGLE WICK...</h3>

          <h3 className="pro_price">
            <a href="#">All @600 Off</a>
          </h3>

          <button className="Shop_Button">SHOP</button>
        </SwiperSlide>
        <SwiperSlide className="pro_box">
          <h3 className="Pro_title">ALL WALLFLO...</h3>

          <h3 className="pro_price">
            <a href="#">BUY 2 GET 1</a>
          </h3>

          <button className="Shop_Button">SHOP</button>
        </SwiperSlide>
        <SwiperSlide className="pro_box">
          <h3 className="Pro_title">TRAVEL SIZE</h3>

          <h3 className="pro_price">
            <a href="#">BUY 2 GET 1</a>
          </h3>

          <button className="Shop_Button">SHOP</button>
        </SwiperSlide>
        <SwiperSlide className="pro_box">
          <h3 className="Pro_title">CLEANING H.....</h3>

          <h3 className="pro_price">
            <a href="#">BUY 2 GET 1</a>
          </h3>

          <button className="Shop_Button">SHOP</button>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
