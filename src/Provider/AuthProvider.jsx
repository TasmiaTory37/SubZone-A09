import React, { createContext, useEffect, useState } from 'react';

import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import app from '../firebase/firebase.config';




const auth =getAuth(app)


export const AuthContext=createContext();

const AuthProvider =( {children}) => {
  const [user, setUser] = useState(null);
  const googleProvider=new GoogleAuthProvider

  const createNewUser = (email, password) => {
  return createUserWithEmailAndPassword(auth, email, password);
    };

  const handleGoogle=()=>{
   return signInWithPopup(auth,googleProvider)
  } 
  
useEffect(() => {
  const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
  });
  return () => {
    unsubscribe();
  };
}, []);
//logIn
const userLogin =(email,password)=>{
    return signInWithEmailAndPassword(auth, email,password);                        
}
 //logOut
 const logOut = () => {
  //setLoading(true)
  return signOut(auth);
};
  const updateUserProfile = (updatedData) => {
  return updateProfile(auth.currentUser, updatedData);
  };
  const info={
    user,
    setUser,
    logOut,
    userLogin,
    createNewUser,
    handleGoogle,
    updateUserProfile
  }
  return <AuthContext.Provider value={info}>
   {
    children                          
   }
  </AuthContext.Provider>
};

export default AuthProvider;