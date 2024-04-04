import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const ProductsCarousel = () => {
    return (
        <>
            <div className="bg-white rounded-md m-3 px-2">
                <div className="text-2xl font-semibold p-3">Best Sellers</div>
                <Swiper
                    slidesPerView={7}
                    spaceBetween={10}
                    navigation={true}
                    modules={[Navigation]}
                >
                    {Array.from({ length: 14 }, (_, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <img src={`./images/product_${i}_small.jpg`} />
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};

export default ProductsCarousel;
