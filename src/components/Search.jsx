import React from "react";
import { CiSearch } from "react-icons/ci";

const Search = () => {
    return (
        <>
            <div className="bg-amazonYellow flex items-center grow text-black rounded-md overflow-hidden">
                <div className="bg-white flex grow">
                    <select className="bg-slate-300 p-2 cursor-pointer">
                        <option>All</option>
                        <option>Deals</option>
                        <option>Amazon</option>
                        <option>Fashion</option>
                        <option>Computers</option>
                        <option>Home</option>
                        <option>Mobiles</option>
                    </select>
                    <input
                        type="text"
                        className="px-2 grow outline-none"
                        placeholder="Search Amzone.co.uk"
                    />
                </div>
                <button className="mx-2">
                    <CiSearch className="stroke-black text-2xl" />
                </button>
            </div>
        </>
    );
};

export default Search;
