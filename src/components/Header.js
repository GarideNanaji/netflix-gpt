import { onAuthStateChanged, signOut } from 'firebase/auth';
import React, { useEffect } from 'react'
import { auth } from '../utilities/firebase';
import { useNavigate } from 'react-router-dom';
import { addUser, removeUser } from '../utilities/userSlice';
import { useDispatch } from 'react-redux';
import { LOGO } from '../utilities/constants';

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSignOut =()=>{
    signOut(auth).then(() => {
      // Sign-out successful.
      navigate("/")
    }).catch((error) => {
      // An error happened.
    });
  }


  useEffect(()=>{
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid,email,displayName,photoURL} = user;
        dispatch(addUser({uid:uid, email:email , displayName:displayName,photoURL:photoURL}));
        navigate("/browse");
      } else {
        // User is signed out
        // ...
        dispatch(removeUser());
        navigate("/");
      }
    });
// it is unsubcribe when component unmounts
    return () => unsubscribe();

   },[]);
   

  return (
    <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-black to-transparent z-20 flex justify-between ">
      <div className='h-20 w-40 pl-8'>
      <img src={LOGO} alt='netflixLogo'/>
      </div>
      <div>
      <button onClick={handleSignOut} className='p-2 m-2 font-bold text-white'>SignOut</button>
      </div>
    </div>
  )
}

export default Header
