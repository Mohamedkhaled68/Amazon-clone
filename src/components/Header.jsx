import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Search from "./Search";

const Header = () => {
    return (
        <>
            <div className="header px-4 py-1 bg-slate-950 flex justify-between items-center gap-10 text-white">
                {/* left */}
                <div className="flex items-center gap-4">
                    <Link>
                        <img
                            className="w-[100px] h-[35px] mt-4"
                            src="./images/amazon.png"
                            alt="header-logo"
                        />
                    </Link>
                    <div className="flex">
                        <CiLocationOn className="self-end" size={25} />
                        <div>
                            <div className="text-xs text-slate-400">
                                deliver to
                            </div>
                            <div className="text-sm font-bold">Egypt</div>
                        </div>
                    </div>
                </div>
                {/* Middle */}
                <Search />
                {/* Right */}
                <div className="flex items-center gap-5">
                    <div>
                        <div className="text-xs">Hello, sign in</div>
                        <div className="text-sm font-bold cursor-pointer">
                            Account & Lists{" "}
                            <IoMdArrowDropdown className="inline" />
                        </div>
                    </div>
                    <div>
                        <div className="text-xs ">Returns</div>
                        <div className="text-sm font-bold">& Orders</div>
                    </div>
                    <div className="flex gap-2 items-end">
                        <div className="relative">
                            <span className="absolute top-[-15px] right-2 text-amazonYellow font-semibold">
                                0
                            </span>
                            <FiShoppingCart size={30} />
                        </div>
                        <div className="text-base font-bold">basket</div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Header;
