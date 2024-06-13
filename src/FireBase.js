import { initializeApp } from "firebase/app";
import { 
        createUserWithEmailAndPassword, 
        getAuth, 
        signInWithEmailAndPassword, 
        signOut
        } from 'firebase/auth';

import {
        addDoc, 
        collection, 
        getFirestore
       } from 'firebase/firestore';
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyCu2JuIajoAh7SuiGBqn5FS-7-Fh63rv_U",
  authDomain: "netflix-clone-f10d3.firebaseapp.com",
  projectId: "netflix-clone-f10d3",
  storageBucket: "netflix-clone-f10d3.appspot.com",
  messagingSenderId: "882024537764",
  appId: "1:882024537764:web:121735d99be6fc23505031"
};


const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

const signup = async (name , email , password)=>{

    try{

       const res = await createUserWithEmailAndPassword(auth,email,password)
       const user = res.user;
       await addDoc(collection(db , "user"),{

             uid:user.uid,
             name,
             authProvider:'local',
             email,
       })
    }catch(err){
        console.log("Error wile storing data in FireBase", err);
        toast.error(err.code.split('/')[1].split('-').join(' '));
    }
}

const login = async (email , password)=>{

    try{
      await signInWithEmailAndPassword(auth, email, password)
    }catch(err){
       console.log(err);
       toast.error(err.code.split('/')[1].split('-').join(' '));
    }

}

const logout = ()=>{
    signOut(auth);
}

export {auth , db , login, signup , logout }