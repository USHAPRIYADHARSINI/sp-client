import { useContext, createContext, useState, useEffect } from "react";
import { GoogleAuthProvider,signInWithPopup,signInWithRedirect,signOut,onAuthStateChanged } from "firebase/auth";
import { auth } from "../FireBase";

const AuthContext = createContext()

export const AuthContextProvider = ({children}) => {

    const[user,setUser] = useState({})

    const googleSignIn = () => {
        const provider = new GoogleAuthProvider();
        signInWithRedirect(auth, provider)
    }

    const googleLogout = () =>{
        signOut(auth)
    }

    useEffect(() => {
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