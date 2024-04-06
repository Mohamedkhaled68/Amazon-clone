import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { Link } from "react-router-dom";

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
                    {Array.from({ length: 9 }, (_, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Link to={`/product/${i}`}>
                                    <img
                                        src={`./images/product_${i}_small.jpg`}
                                    />
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </div>
        </>
    );
};

export default ProductsCarousel;
