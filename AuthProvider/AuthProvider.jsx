import { Children, createContext, useEffect, useState } from "react";
// import auth from "../../../firebase.config";
import {  createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import auth from "../firebase.config";
import { set } from "firebase/database";



export const AuthContext=createContext(null);

  const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null)
    const [loading,setLoading]=useState(true)


 const userRegister=(email,password)=>{
    console.log(email,password);
    setLoading(true)
return createUserWithEmailAndPassword (auth, email, password)
 }
 const userLogin =( email,password)=>{
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password)
 }
 const userLogout =( email,password)=>{
    setLoading(true)
    return signOut(auth)
 }


 
 useEffect(() => {

    const unSubscribe = onAuthStateChanged(auth, (currentUser) => {
        setUser(currentUser);
        setLoading(false)
    });

    return () => unSubscribe
}, [])

    const userInfo= {user,userRegister,userLogin, userLogout,loading}





    return (
        <AuthContext.Provider value={userInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;