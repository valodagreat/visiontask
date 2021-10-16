import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyBmMRzCwOtbBovC18hn2g4XTjVJJDnBCfs",
    authDomain: "vision-cc48b.firebaseapp.com",
    projectId: "vision-cc48b",
    storageBucket: "vision-cc48b.appspot.com",
    messagingSenderId: "800602554993",
    appId: "1:800602554993:web:ac8770d3ca2fc4cfdfd1d0",
    measurementId: "G-M37H5RRBQG"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;