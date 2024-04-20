import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyCStkosNzkXA5-CQTWB0DYeGo4UvMYtthA",
    authDomain: "e-clone-f697a.firebaseapp.com",
    projectId: "e-clone-f697a",
    storageBucket: "e-clone-f697a.appspot.com",
    messagingSenderId: "538969018346",
    appId: "1:538969018346:web:493dcd36ebbe7ea5262c93",
    measurementId: "G-NRCMEXPNKV",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export { auth };
