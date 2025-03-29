import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItem = useSelector((store) => store.cart.items);
  console.log(cartItem);
  const handleClearCart = () => {
    dispatch(clearCart());
  };
  return (
    <div className="m-2 p-4">
      <h1 className="text-3xl font-semibold mb-4 border-b pb-4 border-gray-300">
        Shopping Cart
      </h1>
      {cartItem.map((item,i)=>(
        <div key={i} className="flex p-4 mx-auto mb-4 border-b pb-4 border-gray-300">
        <div className="w-1/2 pr-3">
        <img className="w-1/4 object-contain" src={item?.image} />
        </div>
        <div className="w-1/2 py-4">
        <div>
          <h1 className="text-2xl font-bold whitespace-normal break-words ">
            {item?.name}
          </h1>
          <div>
           <div className="flex justify-between  pt-4">
            <div>
            <span className="py-2 mr-2 font-semibold text-xl">Price:</span>
            <p className="py-2 font-semibold text-xl inline">${item?.price}</p>
            </div>
            <p className=" mr-2 font-semibold text-xl text-right">Subtotal ({item.quantity} item): ${(item.price * item.quantity).toFixed(2)}</p>
           </div>
          </div>
        </div>
        </div>
      </div>
      ))}
      <button
        className="border bg-black text-white m-2 p-2 rounded-lg"
        onClick={handleClearCart}
      >
        Clear Cart
      </button>
    </div>
  );
};

export default Cart;
