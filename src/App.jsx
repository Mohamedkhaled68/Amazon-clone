import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import SearchResults from "./components/SearchResults";
import Checkout from "./components/Checkout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import AuthProvider from "./contexts/AuthContext";
import Profile from "./components/Profile";
import ProtectedRoute from "./components/ProtectedRoute";

const App = () => {
    useEffect(() => {
        localStorage.setItem("users",'[]');
    }, []);
    return (
        <>
            <AuthProvider>
                <Header />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/product/:id" element={<ProductPage />} />
                    <Route path="/search" element={<SearchResults />} />
                    <Route path="/checkout" element={<Checkout />} />
                    <Route path="/login" element={<Login />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route
                        path="/profile"
                        element={
                            <ProtectedRoute>
                                <Profile />
                            </ProtectedRoute>
                        }
                    />
                    <Route path="*" element={<h1>Page not Found</h1>} />
                </Routes>
            </AuthProvider>
        </>
    );
};

export default App;
