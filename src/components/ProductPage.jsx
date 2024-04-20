import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import ProductDetails from "./ProductDetails";
import { GB_CURRENCY } from "../utils/constants";
import { getData } from "../utils/callApi";
import { addToCart } from "../redux/cartSlice";
import { useAuth } from "../contexts/AuthContext";

const ProductPage = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const [quantity, setQuantity] = useState("1");
    const { currentUser } = useAuth();
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const getProduct = () => {
        getData(`data/products.json`).then((productResults) => {
            setProduct(productResults[id]);
        });
    };

    const addQuantityToProduct = () => {
        setProduct((product.quantity = quantity));
        console.log(product);
        return product;
    };

    useEffect(() => {
        getProduct();
    }, []);

    if (!product?.title) return <h1>Loading Product ...</h1>;

    return (
        product && (
            <div className="h-screen bg-amazonBackground">
                <div className="min-w-[1000px] max-w-[1500px] m-auto p-4">
                    <div className="grid grid-cols-10 gap-2">
                        {/* Left */}
                        <div className="col-span-3 p-8 rounded bg-white m-auto">
                            <img src={`${product.image}`} alt="Main product" />
                        </div>
                        {/* Middle */}
                        <div className="col-span-5 p-4 rounded bg-white divide-y divide-gray-400">
                            <div className="mb-3">
                                <ProductDetails
                                    product={product}
                                    ratings={true}
                                />
                            </div>
                            <div className="text-base xl:text-lg mt-3">
                                {product.description}
                            </div>
                        </div>
                        {/* Right */}
                        <div className="col-span-2 p-4 rounded bg-white">
                            <div className="text-xl xl:text-2xl text-red-700 text-right font-semibold">
                                {GB_CURRENCY.format(product.price)}
                            </div>
                            <div className="text-base xl:text-lg text-gray-500 text-right font-semibold">
                                RRP:{" "}
                                <span className="line-through">
                                    {GB_CURRENCY.format(product.oldPrice)}
                                </span>
                            </div>
                            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-3">
                                FREE Returns
                            </div>
                            <div className="text-sm xl:text-base text-blue-500 font-semibold mt-1">
                                FREE Delivery
                            </div>
                            <div className="text-base xl:text-lg text-green-700 font-semibold mt-1">
                                In Stock
                            </div>
                            <div className="text-base xl:text-lg mt-1">
                                Quantity:
                                <select
                                    onChange={(e) =>
                                        setQuantity(e.target.value)
                                    }
                                    className="p-2 bg-white border rounded-md focus:border-indigo-600"
                                >
                                    <option>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                </select>
                            </div>

                            <button
                                onClick={() => {
                                    if (currentUser) {
                                        dispatch(
                                            addToCart(addQuantityToProduct())
                                        );
                                        navigate('/checkout')
                                    } else {
                                        navigate("/login");
                                    }
                                }}
                                className="btn"
                            >
                                Add to Cart
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    );
};

export default ProductPage;
