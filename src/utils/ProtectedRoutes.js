import { useEffect,useState } from "react";
import {useNavigate,Outlet} from "react-router-dom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { addUser, removeUser } from "./userSlice";
import { useDispatch, useSelector } from "react-redux";

const ProtectedRoutes = ()=>{
    const navigate = useNavigate()
    const user = useSelector(store=>store.user)
    if (!user) {
        return navigate("/login");
      }
    
      // If user is authenticated, show the protected routes
      return <Outlet />;
    
}

export default ProtectedRoutes;