import { createContext, useContext, useEffect, useState } from "react";
import {
    createUserWithEmailAndPassword,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import { auth } from "../firebase/firebase";

const AuthContext = createContext({});

const AuthProvider = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const login = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password);
    };

    const signup = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    };
    const logout = () => {
        return signOut(auth);
    };

    useEffect(() => {
        const listener = onAuthStateChanged(auth, (user) => {
            setCurrentUser(user);
            setLoading(false);
        });

        return () => {
            listener();
        };
    }, []);
    const values = { login, signup, currentUser, logout };
    return (
        <AuthContext.Provider value={values}>
            {!loading && children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;

export const useAuth = () => {
    return useContext(AuthContext);
};
