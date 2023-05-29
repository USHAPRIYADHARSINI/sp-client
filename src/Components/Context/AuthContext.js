import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase";

// creating a context to set the user info and token

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const[user,setUser] = useState({});

    // google signin using firebase
    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }
    // google signout using firebase
    const googleLogout = () =>{
        signOut(auth)
    }

    useEffect(() => {
        // setting the user
        const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
        });
        return () => {
            unSubscribe()
        };
    }, [])
 
    return (
        <AuthContext.Provider value={{ googleSignIn, googleLogout, user }}>
        {children}
        </AuthContext.Provider>
    )
}

export const UserAuth = () => {
    return useContext(AuthContext)
}