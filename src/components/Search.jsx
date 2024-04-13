import React, { useEffect, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { getData } from "../utils/callApi";
import { createSearchParams, useNavigate } from "react-router-dom";

const Search = () => {
    const [search, setSearch] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [category, setCategory] = useState("All");
    const navigate = useNavigate();

    const handleSubmit = () => {
        navigate({
            pathname: "search",
            search: `${createSearchParams({
                category: `${category}`,
                searchTerm: `${search}`,
            })}`,
        });
        setSearch("");
        setCategory("All");
    };

    useEffect(() => {
        getData("data/suggestions.json").then((res) => setSuggestions(res));
    }, []);
    return (
        <>
            <div className="grow text-black relative">
                <div className="flex items-center rounded overflow-hidden h-10 bg-amazonYellow">
                    <select
                        value={category}
                        onChange={(e) => setCategory(e.target.value)}
                        className="p-2 bg-gray-300 text-black border text-xs xl:text-sm cursor-pointer"
                    >
                        <option>All</option>
                        <option>Deals</option>
                        <option>Amazon</option>
                        <option>Fashion</option>
                        <option>Computers</option>
                        <option>Home</option>
                        <option>Mobiles</option>
                    </select>
                    <input
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type="text"
                        className="flex grow h-[100%] p-2 outline-none"
                    />
                    <button
                        onClick={handleSubmit}
                        className="m-auto p-2 text-lg"
                    >
                        <CiSearch />
                    </button>
                </div>
                {suggestions && (
                    <div className="bg-white absolute w-full rounded">
                        {suggestions
                            .filter((suggestion) => {
                                const currSearch = search.toLowerCase();
                                const title = suggestion.title.toLowerCase();
                                return (
                                    currSearch &&
                                    title.startsWith(currSearch) &&
                                    title !== currSearch
                                );
                            })
                            .slice(0, 10)
                            .map((sugg) => {
                                return (
                                    <div
                                        onClick={() => setSearch(sugg.title)}
                                        key={sugg.id}
                                        className="cursor-pointer hover:bg-slate-200 transition-all p-2"
                                    >
                                        {sugg.title}
                                    </div>
                                );
                            })}
                    </div>
                )}
            </div>
        </>
    );
};

export default Search;
