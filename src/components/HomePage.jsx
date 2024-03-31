import React from "react";
import Carousel from "./Carousel";
import Products from "./Products";

const HomePage = () => {
    return (
        <>
            <div className="bg-amazonBackground">
                <div className="min-w-[1000px] max-w-[1500px] m-auto">
                    <Carousel />
                    <div className="w-[99%] m-auto">
                        <Products />
                    </div>
                </div>
            </div>
        </>
    );
};

export default HomePage;
