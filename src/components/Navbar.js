import hamIcon from "../assets/Images/hamIcon.png"

const Navbar = () =>{
    return <div className="bg-gray-700 p-1 flex shadow-lg">
        <div>
            <img className="h-7 w-7 mx-3" src={hamIcon} alt="ham-icon"/>
        </div>

        <div className="flex">
            <ul className="flex text-slate-50">
                <li className="font-bold"> All</li>
                <li className="mx-4"> Fashion</li>
                <li  className="mx-4">Home Improvement</li>
                <li  className="mx-4">Health,Household & Personal Care</li>
                <li  className="mx-4">MX Player</li>
                <li  className="mx-4">Sell</li>
                <li  className="mx-4">Buy Again</li>
                <li  className="mx-4">Subscribe & Save</li>
            </ul>
        </div>
    </div>
}

export default Navbar