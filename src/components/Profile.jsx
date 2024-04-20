import React from "react";
import { useAuth } from "../contexts/AuthContext";

const Profile = () => {
    const { currentUser, logout } = useAuth();
    const handleClick = async () => {
        try {
            await logout();
        } catch (err) {
            console.log(err);
        }
    };
    return (
        <>
            <div className="inline mr-5">Email : {currentUser?.email}</div>
            <button
                onClick={handleClick}
                className="w-[8rem] p-1 bg-amazonYellow text-amazonDefault text-sm rounded-lg"
            >
                Log out
            </button>
        </>
    );
};

export default Profile;
