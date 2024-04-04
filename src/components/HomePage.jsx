import React from "react";
import Carousel from "./Carousel";
import Products from "./Products";
import ProductsCarousel from "./ProductsCarousel";
import CategoryCarousel from "./CategoryCarousel";

const HomePage = () => {
    return (
        <>
            <div className="bg-amazonBackground">
                <div className="min-w-[1000px] max-w-[1500px] m-auto">
                    <Carousel />
                    <Products />
                    <ProductsCarousel />
                    <CategoryCarousel />
                </div>
                <div className="h-[20%]">
                    <img src="./images/banner_image.jpg" />
                </div>
            </div>
        </>
    );
};

export default HomePage;
