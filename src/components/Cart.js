import { useDispatch, useSelector } from "react-redux";
import ItemList from "./ItemList";
import { clearCart } from "../utils/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();

  const cartItems = useSelector((store) => store.cart.items);

  const handleCartClear = () => {
    dispatch(clearCart());
  };

  return (
    <div className="text-center m-4 p-4">
      <div className="flex justify-center">
        <h1 className="text-2xl font-bold p-2 m-2">Cart</h1>
        <button
          className="p-4 m-2 bg-gray-600 text-white rounded-2xl cursor-pointer"
          onClick={handleCartClear}
        >
          Clear Cart
        </button>
      </div>
      <div className="w-6/12 m-auto">
        {cartItems.length === 0 && (
          <h2 className="m-2 p-2 text-3xl">
            Your Cart is Empty add few dishes
          </h2>
        )}
        {cartItems.map((item, index) => {
          return <ItemList key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default Cart;
