import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Signup = () => {
    const [inputs, setInputs] = useState({
        username: "",
        emailOrPhone: "",
        password: "",
        confirmPassword: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { signup } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (inputs.password === inputs.confirmPassword)
            try {
                setLoading(true);
                await signup(inputs.emailOrPhone, inputs.password).then(
                    (user) => {
                        const id = user.user.uid;
                        const data = JSON.parse(localStorage.getItem("users"));
                        const userL = {
                            username: inputs.username,
                            uid: id,
                        };
                        const usersData = [...data, userL];
                        localStorage.setItem(
                            "users",
                            JSON.stringify(usersData)
                        );
                    }
                );
                navigate("/");
            } catch (err) {
                setError(err.message);
                console.log(err);
            }
        setLoading(false);
    };

    return (
        <div className="max-w-[700px] m-auto flex flex-col items-center pb-10">
            <div className="w-full flex items-center justify-center my-10">
                <img
                    className="w-[120px] h-[35px] mt-4 object-fit"
                    src="./images/amazon-logo.png"
                    alt="/"
                />
            </div>
            <div className="max-w-[26rem] mx-auto bg-white p-8 rounded shadow-md border-[1px] border-gray-300">
                <h2 className="text-2xl font-semibold mb-4">Create account</h2>
                <form onSubmit={handleSubmit}>
                    {error && (
                        <div className="bg-red-600 p-3 text-sm font-thin text-white text-center my-3 rounded-lg">
                            {error}
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="username" className="block mb-2">
                            Your name
                        </label>
                        <input
                            id="username"
                            type="text"
                            value={inputs.username}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="emailOrPhone" className="block mb-2">
                            Email or mobile phone number
                        </label>
                        <input
                            id="emailOrPhone"
                            type="text"
                            value={inputs.emailOrPhone}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="password" className="block mb-2">
                            Password
                        </label>
                        <input
                            id="password"
                            type="password"
                            value={inputs.password}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block mb-2">
                            Re-enter password
                        </label>
                        <input
                            id="confirmPassword"
                            type="password"
                            value={inputs.confirmPassword}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <button disabled={loading} type="submit" className="btn">
                        Continue
                    </button>
                </form>
                <div className="mt-4 text-xs text-gray-600">
                    By continuing, you agree to Amazon's{" "}
                    <a
                        href="https://www.amazon.co.uk/gp/help/customer/display.html/ref=ap_signin_notification_condition_of_use?ie=UTF8&nodeId=1040616"
                        className="text-blue-500"
                    >
                        Conditions of Use & Sale
                    </a>
                    . Please see our{" "}
                    <a
                        href="https://www.amazon.co.uk/gp/help/customer/display.html/ref=ap_signin_notification_privacy_notice?ie=UTF8&nodeId=502584"
                        className="text-blue-500"
                    >
                        Privacy Notice
                    </a>
                    , our{" "}
                    <a
                        href="https://www.amazon.co.uk/gp/help/customer/display.html/ref=ap_signin_notification_cookies_notice?ie=UTF8&nodeId=202074220"
                        className="text-blue-500"
                    >
                        Cookies Notice
                    </a>
                    , and our{" "}
                    <a
                        href="https://www.amazon.co.uk/adprefs"
                        className="text-blue-500"
                    >
                        Interest-Based Ads Notice
                    </a>
                    .
                </div>

                <div className="w-full h-[0.1px] my-5 border-gray-300 border-[0.5px]" />
                <div className="text-sm text-gray-600">
                    <span className="font-semibold text-black">
                        Buying for work?
                    </span>{" "}
                    <br />{" "}
                    <span className="text-blue-500 text-sm">
                        Create a free business account
                    </span>
                </div>
                <div className="text-sm text-gray-600 mt-5">
                    <span className="font-semibold text-black">
                        Already have an account?
                    </span>
                    <Link to={"/login"} className="text-blue-500 text-sm">
                        {" "}
                        Sign in
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Signup;
