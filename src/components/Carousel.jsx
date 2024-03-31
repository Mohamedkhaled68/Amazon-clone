import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const Carousel = () => {
    return (
        <>
            <div className="h-[600px] user-select-none relative">
                <Swiper
                    className=""
                    autoplay={{ delay: 4500 }}
                    loop={true}
                    spaceBetween={0}
                    navigation={true}
                    modules={[Navigation, Autoplay]}
                >
                    <SwiperSlide>
                        <img src="./images/carousel_1.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/carousel_2.jpg" />
                    </SwiperSlide>
                    <SwiperSlide>
                        <img src="./images/carousel_3.jpg" />
                    </SwiperSlide>
                </Swiper>
                <div className="absolute z-20 h-[50%] w-full bg-gradient-to-t from-slate-300 bottom-0" />
            </div>
        </>
    );
};

export default Carousel;
