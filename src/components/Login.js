import React, { useRef, useState } from 'react'
import Header from './Header'
import { formValidateData } from '../utilities/formValidate';
import { createUserWithEmailAndPassword,signInWithEmailAndPassword, updateProfile } from "firebase/auth";
import {auth} from "../utilities/firebase"
import { useDispatch } from 'react-redux';
import { addUser } from '../utilities/userSlice';

const Login = () => {
    const [isSignInForm,setIsSignInForm]=useState(true);

    const [errorMessage,setErrorMessage] = useState(null);
     const dispatch = useDispatch();

    const name =useRef(null);
    const email =useRef(null);
    const password =useRef(null);


    const handleClick = () => {
        // Validate form data
        const msg = formValidateData(email.current.value, password.current.value);
        setErrorMessage(msg);
      
        if (msg) return; // Stop execution if there's an error
      
        if (!isSignInForm) {
          // Sign-Up
          createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("User signed up:", user);
              updateProfile(user, {
                displayName: name.current.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                const {uid,email,displayName,photoURL} = auth.currentUser;
                        dispatch(addUser({uid:uid, email:email , displayName:displayName,photoURL:photoURL}));
                // ...
                
              }).catch((error) => {
                // An error occurred
                // ...
                setErrorMessage(error.message);
              });
              
            })
            .catch((error) => {
              setErrorMessage(error.code + ": " + error.message);
            });
        } else {
          // Sign-In
          signInWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
              const user = userCredential.user;
              console.log("User signed in:", user);
             
            })
            .catch((error) => {
              setErrorMessage(error.code + ": " + error.message);
            });
        }
      };
      

    const handleButton = ()=>{
        setIsSignInForm(!isSignInForm)

    }
  return (
    <div>
      <Header/>
      <div className='absolute'>
        <img src='https://assets.nflxext.com/ffe/siteui/vlv3/f268d374-734d-474f-ad13-af5ba87ef9fc/web/IN-en-20250210-TRIFECTA-perspective_92338d5d-6ccd-4b1a-8536-eb2b0240a55e_large.jpg' alt='bglogo' />
      </div>
      <form onSubmit={(e) => e.preventDefault()}className='absolute bg-black p-10 my-40 w-3/12 mx-auto right-0 left-0 text-white bg-opacity-70'>
        <h1 className='my-2 text-3xl font-bold'>{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (<input ref={name} type='text' placeholder='Full Name' className='p-4 my-4 w-full bg-gray-800' />)}
        <input ref={email} type='text' placeholder='Email Address' className='p-4 my-4 w-full bg-gray-800' />
        <input ref={password} type='password' placeholder='Enter Your Password' className='p-4 my-4 w-full bg-gray-800' />
       
       <p className='p-2 text-red-500'>{errorMessage}</p>

        <button onClick={handleClick} className='bg-red-700 p-4 my-6 w-full cursor-pointer'>{isSignInForm ? "Sign In" : "Sign Up"}</button>
        <p className='p-4 my-5 cursor-pointer' onClick={handleButton}>{isSignInForm ? "Are You New To Netflix? Sign Up" : "Already user? Sign In"}</p>
      </form>
    </div>
  )
}

export default Login
