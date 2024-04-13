import React from "react";
import { FaStar } from "react-icons/fa";
import { CiStar } from "react-icons/ci";

const StarsContainer = ({ stars }) => {
    return (
        <>
            <div className="flex items-center gap-1">
                {Array.from({ length: stars }, (_, i) => {
                    return <FaStar key={i} color="gold" size={19} />;
                })}
                {Array.from({ length: 5 - stars }, (_, i) => {
                    return <CiStar key={i} color="gold" size={19} />;
                })}
            </div>
        </>
    );
};

export default StarsContainer;
