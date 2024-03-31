import React from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ title, imgSrc, link }) => {
    return (
        <>
            <div className="h-[430px] m-3 bg-white z-30">
                <div className="font-bold text-xl mt-3 ml-3 w-[85%]">
                    {title}
                </div>
                <div className="h-[300px] m-4">
                    <img className="h-full w-full object-cover" src={imgSrc} />
                </div>
                <div>
                    <Link className="text-blue-700 text-sm ml-3 mt-3 ">
                        {link}
                    </Link>
                </div>
            </div>
        </>
    );
};

export default ProductCard;
