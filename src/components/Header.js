import { useNavigate,Link } from "react-router-dom";
import cart from "../assets/Images/shopping-cart.png"
import search from "../assets/Images/searchIcon.png";
import Navbar from "./Navbar";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import {addUser,removeUser} from "../utils/userSlice";
import { useEffect, useState } from "react";

const Header = () => {
  const [searchValue,setSearchValue] = useState("")
  const user = useSelector((store)=> store.user)
  const navigate= useNavigate();
  const dispatch = useDispatch()
  const cartItems = useSelector(store => store.cart.items)
  const handleButtonClick = () =>{
    navigate('/login')
  }
  const handleSignOut = ()=>{
    signOut(auth)
      .then(() => {
      })
      .catch((error) => {
        // An error happened.
      });
  }
  useEffect(()=>{
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const {uid,email,displayName}= user;
        dispatch(addUser({uid:uid,email:email,displayName: displayName}))
        navigate("/");
      } else {
        // User is signed out
        dispatch(removeUser())
        navigate("/login")
      }
    });
  },[])
  useEff
  return (
  <div>
      <div className="flex items-center justify-between bg-black shadow-lg w-full">
      <div>
        <img
          className="h-14 rounded-md mx-4"
          src="https://tse2.mm.bing.net/th?id=OIP.cs6rsE5Ogsa4Hm_2Y6hiPwHaEK&pid=Api&P=0&h=180"
          alt="logo"
        />
      </div>
      <div className="flex flex-1 max-w-3xl">
        <div className="flex w-full">
          <input
            className="border border-gray-400 rounded-l-lg p-2 w-full"
            type="text"
            placeholder="search Amazon.in"
            value={searchValue}
            onChange={(e)=> {setSearchValue(e.target.value);
              console.log(e.target.value  )
            }}
          />
          
          <button className="border border-gray-400 rounded-r-lg px-4 py-2 bg-yellow-400">
            <img className="h-7" src={search} alt="search-icon" />
          </button>
        </div>
      </div>
      <div className="flex my-2">
        <div className="flex flex-col text-white mx-3 cursor-pointer" onClick={handleButtonClick}>
          <span className="text-xs">Hello,{user?.displayName || "signin"}</span>
          <span className="text-sm font-bold">Account & List</span>
        </div>
        <div className="flex flex-col text-white mx-3">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>
        <div className="flex flex-col text-orange-400" >
        {user && (<div>
          <span className="text-sm absolute top-4 right-24 px-2 font-bold">{cartItems.length}</span>
        <Link to="/cart"><img src={cart} className="w-12"/> </Link>
        </div>)}
        </div>
        {user && <button className="text-white cursor-pointer p-2 -mt-3" onClick={handleSignOut}>Sign Out</button>}
      </div>
    </div>
    <Navbar/>
  </div>
  );
};

export default Header;
