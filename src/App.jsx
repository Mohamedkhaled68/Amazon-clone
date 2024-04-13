import React from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import SearchResults from "./components/SearchResults";

const App = () => {
    return (
        <>
            <Header />
            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/product/:id" element={<ProductPage />} />
                <Route path="/search" element={<SearchResults />} />
                <Route path="*" element={<h1>Page not Found</h1>} />
            </Routes>
        </>
    );
};

export default App;
