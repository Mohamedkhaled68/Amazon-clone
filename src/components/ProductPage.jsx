import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getData } from "../utils/callApi";
import ProductBadge from "./ProductBadge";
import StarsContainer from "./StarsContainer";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState();

    useEffect(() => {
        getData("data/products.json").then((res) => setProduct(res[id]));
    }, []);

    if (!product?.title) return <div>...Loading</div>;
    return (
        <>
            <div className="bg-amazonBackground h-screen">
                <div className="min-w-[1000px] max-w-[1500px] m-auto p-2">
                    <div className="grid grid-cols-10 gap-5">
                        <div className="col-span-3 bg-white p-8 rounded m-auto">
                            <img src={product.image} />
                        </div>
                        <div className="col-span-5 bg-white rounded p-4">
                            <h1 className="text-2xl mb-2 font-semibold">
                                {product.title}
                            </h1>
                            <p>
                                by{" "}
                                <span className="text-blue-500">
                                    {product.brand}
                                </span>
                            </p>
                            <div className="flex gap-2">
                                <StarsContainer stars={product.avgRating} />
                                <div className="text-blue-500">
                                    {product.ratings} ratings
                                </div>
                            </div>
                            <p className="text-sm font-bold mt-2">
                                {product.attribute}
                            </p>
                            <ProductBadge badge={product.badge} />
                            <hr />
                            <div className="text-lg m-2">
                                {product.description}
                            </div>
                        </div>
                        <div className="col-span-2 bg-white p-3 rounded">
                            <div className="text-right">
                                <div className="text-3xl text-red-700 font-semibold">
                                    ${product.price}.00
                                </div>
                                <div className="text-slate-400 text-xl">
                                    RRP:{" "}
                                    <span className="line-through">
                                        ${product.oldPrice}.00
                                    </span>
                                </div>
                            </div>
                            <div className="flex flex-col text-blue-500 font-semibold">
                                <p>FREE Returns</p>
                                <p>FREE Delivery</p>
                                <p className="text-green-700 text-lg mt-2">
                                    In Stock
                                </p>
                                <div className="text-black text-lg">
                                    Quantity :{" "}
                                    <select className="p-2 border-2">
                                        <option value="1">1</option>
                                        <option value="2">2</option>
                                        <option value="3">3</option>
                                    </select>
                                </div>
                                <button className="text-black bg-yellow-400 p-2 rounded-md font-normal mt-4">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default ProductPage;
