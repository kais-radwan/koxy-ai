import { openAlert } from "../components/Alert";
import authEvents from "./authEvents.ts";
import { initializeApp } from "firebase/app";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    User
} from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBp3A5vS6k1jvRQqH3vRwqOW0Bs3fiEF0Q",
    authDomain: "koxy-ai-656af.firebaseapp.com",
    databaseURL: "https://koxy-ai-656af-default-rtdb.firebaseio.com",
    projectId: "koxy-ai-656af",
    storageBucket: "koxy-ai-656af.appspot.com",
    messagingSenderId: "785371920025",
    appId: "1:785371920025:web:760756b1bc1ebfe079aa08",
    measurementId: "G-H8V3MYV2B2"
};

type CreateUserPassword = {
    type: "password",
    redirect?: string,
    email: string,
    password: string,
}

type CreateUserGoogle = {
    redirect?: string,
    type: "google",
}

type CreateUserOptions = CreateUserPassword | CreateUserGoogle;

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);
const googleProvider = new GoogleAuthProvider();

onAuthStateChanged(auth, (user) => {
    if (user) {
        authEvents.emit("authChange", user);
    }
})

export const currentUser = (): User | null => {
    return auth.currentUser;
}

export const createUser = (options: CreateUserOptions) => {

    if (options.type === "google") {
        signupWithGoogle(options);
    }

    else if (options.type === "password") {
        signupWithPassword(options);
    }

}

export const signinUser = (options: CreateUserOptions) => {

    if (options.type === "google") {
        signupWithGoogle(options);
    }

    else if (options.type === "password") {
        signinWithEmail(options);
    }

}

const signinWithEmail = (options: CreateUserPassword) => {

    signInWithEmailAndPassword(auth, options.email, options.password)
        .then ( () => {
            window.location.href = options.redirect || "/";
        })
        .catch( () => {})
    ;
}

const signupWithPassword = (options: CreateUserPassword): void => {

    createUserWithEmailAndPassword(auth, options.email, options.password)
        .then ( () => {
            localStorage.setItem("userEmail", options.email);
            window.location.href = options.redirect || "/";
        })
        .catch( (err) => {
            openAlert(err.message);
        })
    ;

}

const signupWithGoogle = (options): void => {

    signInWithPopup(auth, googleProvider)
        .then( () => {
            localStorage.setItem("userEmail", options.email);
            window.location.href = options.redirect || "/";
        })
        .catch( (err) => {})
    ;

}
