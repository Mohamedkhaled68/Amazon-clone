import React from "react";
import { Link } from "react-router-dom";
import { CiLocationOn } from "react-icons/ci";
import { IoMdArrowDropdown } from "react-icons/io";
import { FiShoppingCart } from "react-icons/fi";
import Search from "./Search";
import { useSelector } from "react-redux";
import { useAuth } from "../contexts/AuthContext";

const Header = () => {
  const cart = useSelector((state) => state.cart.productsNumber);
  const { currentUser, name } = useAuth();

  return (
    <>
      <div className="header px-4 py-1 bg-slate-950 flex justify-between items-center gap-10 text-white">
        {/* left */}
        <div className="flex items-center gap-4">
          <Link to={"/"}>
            <img
              className="w-[100px] h-[35px] mt-4 object-fit"
              src="../images/amazon.png"
              alt="header-logo"
            />
          </Link>
          <div className="flex">
            <CiLocationOn className="self-end" size={25} />
            <div>
              <div className="text-xs text-slate-400">deliver to</div>
              <div className="text-sm font-bold">Egypt</div>
            </div>
          </div>
        </div>
        {/* Middle */}
        <Search />
        {/* Right */}
        <div className="flex items-center gap-5">
          <div>
            <div className="text-xs">
              Hello,{" "}
              {currentUser ? (
                <Link to={"/profile"}>{name}</Link>
              ) : (
                <Link to={"/login"}>sign in</Link>
              )}
            </div>
            <div className="text-sm font-bold cursor-pointer">
              Account & Lists <IoMdArrowDropdown className="inline" />
            </div>
          </div>
          <div>
            <div className="text-xs ">Returns</div>
            <div className="text-sm font-bold">& Orders</div>
          </div>
          <Link to={"/checkout"} className="flex gap-2 items-end">
            <div className="relative">
              <span className="absolute top-[-15px] right-2 text-amazonYellow font-semibold">
                {cart}
              </span>
              <FiShoppingCart size={30} />
            </div>
            <div className="text-base font-bold">basket</div>
          </Link>
        </div>
      </div>
      <div className="flex gap-3 items-center px-4 py-2 text-white text-sm bg-amazonLight_blue">
        <div>Today's Deals</div>
        <div>Customer Service</div>
        <div>Registry</div>
        <div>Sell</div>
        <div>Gift Cards</div>
      </div>
    </>
  );
};

export default Header;
