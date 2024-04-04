import React from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

const CategoryCarousel = () => {
    return (
        <>
            <div className="bg-white rounded-md m-3 px-2">
                <div className="text-2xl font-semibold p-3">Shop by Category</div>
                <Swiper
                    slidesPerView={5}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {Array.from({ length: 5 }, (_, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`./images/category_${i}.jpg`} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};

export default CategoryCarousel;
