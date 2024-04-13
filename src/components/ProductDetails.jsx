import React from "react";
import ProductBadge from "./ProductBadge";
import StarsContainer from "./StarsContainer";

const ProductDetails = ({ product, ratings }) => {
    return (
        <div className="mb-1">
            <div className="text-xl xl:text-2xl font-medium mb-1">
                {product.title}
            </div>
            <div className="text-sm xl:text-base mb-1">
                by <span className="text-blue-500">{product.brand}</span>
            </div>
            {ratings && (
                <div className="flex items-center gap-1 text-sm xl:text-base mb-1">
                    <StarsContainer stars={product.avgRating} /> 
                    <span className="text-blue-500">{product.ratings}</span>
                </div>
            )}
            <div className="text-xs xl:text-sm font-bold mb-1">
                {product.attribute}
            </div>
            <div>
                <ProductBadge badge={product.badge} />
            </div>
        </div>
    );
};
export default ProductDetails;
