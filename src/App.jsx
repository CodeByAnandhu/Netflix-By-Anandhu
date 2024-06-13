import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./Components/Home/Home";
import Login from "./Components/Login/Login";
import Player from "./Components/Player/Player";
import './App.css';
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./FireBase";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


function App() {

  const navigate = useNavigate()

  useEffect(()=>{
    onAuthStateChanged(auth , async(user)=>{
      if(user){
        console.log("Logged in")
        navigate('/');
      }else{
        console.log("Logged out")
        navigate('/login');
      }
    })
  },[])

  return (
    <div>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </div>
  );
}

export default App;
