import search from "../assets/Images/searchIcon.png";
const Header = () => {
  return (
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
          />
          <button className="border border-gray-400 rounded-r-lg px-4 py-2 bg-yellow-400">
            <img className="h-7" src={search} alt="search-icon" />
          </button>
        </div>
      </div>
      <div className="flex">
        <div class="flex flex-col text-white mx-3">
          <span class="text-xs">Hello, sign in</span>
          <span class="text-sm font-bold">Account & List</span>
        </div>
        <div className="flex flex-col text-white mx-3">
          <span className="text-xs">Returns</span>
          <span className="text-sm font-bold">& Orders</span>
        </div>
        <p className="text-white mx-3">Cart</p>
      </div>
    </div>
  );
};

export default Header;
