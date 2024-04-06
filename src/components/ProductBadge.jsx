import React from "react";

const ProductBadge = ({ badge }) => {
    if (badge == "seller") {
        return (
            <div className="bg-orange-400 p-1 text-white text-sm w-max mb-3 mt-1">
                #1 Best Seller
            </div>
        );
    }
    if (badge == "choice") {
        return (
            <div className="bg-amazonDefault p-1 text-white text-sm w-max mb-3 mt-1">
                Amazon's <span className="text-orange-400">Choice</span>
            </div>
        );
    }
    if (badge == "limited") {
        return (
            <div className="bg-red-600 p-1 text-white text-sm w-max mb-3 mt-1">
                Limited Time Deal
            </div>
        );
    }
    return <></>;
};

export default ProductBadge;
