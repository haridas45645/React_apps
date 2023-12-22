

import { initializeApp } from "firebase/app";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";


    const firebaseConfig = {
        apiKey: "AIzaSyB1GSHHUaBsfn9PtIiss8ihDb8N85hEzC4",
        authDomain: "ecomauth-d68fc.firebaseapp.com",
        projectId: "ecomauth-d68fc",
        storageBucket: "ecomauth-d68fc.appspot.com",
        messagingSenderId: "890678004532",
        appId: "1:890678004532:web:4a4100efde195de020b361",
        measurementId: "G-DPG875096K"
      };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth()

    function UserAuth(){
   const [user,setUser]=useState()

   useEffect(()=>{


   let a= onAuthStateChanged(auth,user=>setUser(user))
    return a


   },[])
return user
    }
    export default UserAuth;