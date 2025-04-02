import { useDispatch } from "react-redux";
import { IMG_URL } from "../utils/constants";
import { addItem } from "../utils/cartSlice";

const ItemList = ({ item }) => {
  const info = item?.card.info;

  const dispatch = useDispatch();

  const handleAddItems = () => {
    dispatch(addItem(item));
  };

  return (
    <div className="flex justify-between border-gray-200 border-b-2 p-2 m-4">
      <div className="w-9/12 text-left m-2 p-2">
        <div className="bold my-2">
          {info?.name} - ₹
          {info?.price ? info?.price / 100 : info?.defaultPrice / 100}
        </div>
        <div className="text-xs my-2">{info?.description}</div>
      </div>
      <div className="w-3/12 relative">
        <div>
          <button
            className="absolute bg-white p-2 top-2 right-2 cursor-pointer"
            onClick={() => handleAddItems(info)}
          >
            Add +
          </button>
        </div>
        <img
          className="h-[150px] w-full object-cover"
          src={IMG_URL + info.imageId}
        />
      </div>
    </div>
  );
};

export default ItemList;
