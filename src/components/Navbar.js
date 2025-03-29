import { Link } from "react-router-dom";
import hamLogo from "../assets/Images/ham-menu.png";

const Navbar = () => {
  return (
    <div className="bg-gray-700 p-1 flex shadow-lg">
      <div className="flex">
        <ul className="flex text-slate-50 cursor-pointer ">
          <li className="font-bold hover:border white px-2 ">
            <img className="h-7 w-7 inline" src={hamLogo} alt="ham-icon" /> All
          </li>
          <li className="mx-4 hover:border white px-2"> <Link to="/">Home</Link></li>
          <li className="mx-4 hover:border white px-2"> Fashion</li>
          <li className="mx-4 hover:border white px-2">Home Improvement</li>
          <li className="mx-4 hover:border white px-2">
            Health,Household & Personal Care
          </li>
          <li className="mx-4 hover:border white px-2">MX Player</li>
          <li className="mx-4 hover:border white px-2">Sell</li>
          <li className="mx-4 hover:border white px-2">Buy Again</li>
          <li className="mx-4 hover:border white px-2">Subscribe & Save</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
