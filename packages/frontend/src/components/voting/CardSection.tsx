import React, {useState, useRef} from 'react';
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";

function CardSection() {
    return(
        <>
        <div className="h-auto w-96 mb-20 overflow-hidden">
            <Swiper className="h-80 w-80 w-screen mt-20"
            spaceBetween={50}
            slidesPerView={3}
            onSlideChange={() => console.log('slide change')}
            onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={"/photo1.jpg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/photo2.jpg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/photo3.jpg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/photo4.jpg"}/>
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/photo5.jpg"}/>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
                <SwiperSlide>
                </SwiperSlide>
            </Swiper>
        </div>
        </>
    );
}

export default CardSection;