import React from "react";
import ProductCard from "./ProductCard";

const Products = () => {
    return (
        <>
            <div className="grid grid-cols-4 mt-[-19rem]">
                <ProductCard
                    title={"Amazon Basics"}
                    imgSrc={"./images/home_grid_1.jpg"}
                    link={"Discover now"}
                />
                <ProductCard
                    title={"More titles to explore than ever"}
                    imgSrc={"./images/home_grid_2.jpg"}
                    link={"Discover now"}
                />
                <ProductCard
                    title={"Explore home bedding"}
                    imgSrc={"./images/home_grid_3.jpg"}
                    link={"Browse now"}
                />
                <div className="z-30">
                    <div className="bg-white h-[150px] m-3 p-4">
                        <h1 className="text-xl font-bold">
                            Sign in for your best experience
                        </h1>
                        <button className="bg-yellow-500 text-center rounded-lg w-full p-2 mt-5 text-sm shadow-sm">
                            Sign in securely
                        </button>
                    </div>
                    <div className="h-[150px] m-3 p-2">
                        <img className="w-full" src="./images/grid_img.jpg" />
                    </div>
                </div>
                <ProductCard
                    title={"Explore home bedding"}
                    imgSrc={"./images/home_grid_3.jpg"}
                    link={"Browse now"}
                />
                <ProductCard
                    title={"Explore home bedding"}
                    imgSrc={"./images/home_grid_3.jpg"}
                    link={"Browse now"}
                />
                <ProductCard
                    title={"Explore home bedding"}
                    imgSrc={"./images/home_grid_3.jpg"}
                    link={"Browse now"}
                />
                <ProductCard
                    title={"Explore home bedding"}
                    imgSrc={"./images/home_grid_3.jpg"}
                    link={"Browse now"}
                />
            </div>
        </>
    );
};

export default Products;
