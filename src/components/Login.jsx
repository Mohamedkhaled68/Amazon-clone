import React, { useState } from "react";
import { IoMdArrowDropright } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const Login = () => {
    const [inputs, setInputs] = useState({
        email: "",
        password: "",
    });
    const [error, setError] = useState("");
    const [loading, setLoading] = useState(false);
    const { login } = useAuth();
    const navigate = useNavigate();

    const handleInputChange = (e) => {
        setInputs({ ...inputs, [e.target.id]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            await login(inputs.email, inputs.password);
            navigate("/");
        } catch (err) {
            setError(err.message);
            console.log(err);
        }
        setLoading(false);
    };

    return (
        <div className="max-w-[700px] m-auto flex flex-col items-center  pb-10">
            <div className="w-full flex items-center justify-center my-10">
                <img
                    className="w-[120px] h-[35px] mt-4 object-fit"
                    src="./images/amazon-logo.png"
                    alt="/"
                />
            </div>
            <div className="max-w-[26rem] mx-auto bg-white p-8 rounded shadow-md border-[1px] border-gray-300">
                <h2 className="text-2xl font-semibold mb-4">Sign in</h2>
                <form onSubmit={handleSubmit}>
                {error && (
                        <div className="bg-red-600 p-3 text-sm font-thin text-white text-center my-3 rounded-lg">
                            {error}
                        </div>
                    )}
                    <div className="mb-4">
                        <label htmlFor="emailOrPhone" className="block mb-2">
                            Email
                        </label>
                        <input
                            id="email"
                            type="text"
                            value={inputs.email}
                            onChange={handleInputChange}
                            className="w-full p-2 border border-gray-300 rounded"
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="emailOrPhone" className="block mb-2">
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
                <div className="mt-3 text-sm text-gray-600 flex items-center">
                    <IoMdArrowDropright className="inline" />
                    <span className="text-blue-500 text-xs">Need help?</span>
                </div>
                <div className="w-full h-[0.1px] my-5 border-gray-400 border-[0.5px]" />
                <div className="text-sm text-gray-600">
                    <span className="font-semibold text-black">
                        Buying for work?
                    </span>{" "}
                    <br />{" "}
                    <span className="text-blue-500 text-sm">
                        Shop on Amazon Business
                    </span>
                </div>
            </div>
            <div className="text-sm text-gray-600 mt-5">New to Amazon?</div>
            <button
                onClick={() => navigate("/signup")}
                className="bg-transparent p-1 text-xs xl:text-sm rounded-xl w-[50%] mt-3 border-[1px] border-gray-300"
            >
                Create your Amazon account
            </button>
        </div>
    );
};

export default Login;
