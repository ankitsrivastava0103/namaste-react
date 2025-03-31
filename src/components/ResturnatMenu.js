import { useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";
import ResturandCategory from "./ResturantCategory";

const ResturnatMenu = () => {
  const [expandIndex, setExpandIndex] = useState(null);
  const { resId } = useParams();
  const resInfo = useResturantMenu(resId);

  const handleExpandIndex = (index) => {
    if (index === expandIndex) {
      setExpandIndex(null);
    } else {
      setExpandIndex(index);
    }
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  const resData = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR;
  const resDetails = resInfo?.cards[2]?.card?.card?.info;

  const itemCategory = resData?.cards?.filter(
    (item) =>
      item?.card?.card?.["@type"] ===
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );

  return (
    <div className="text-center p-2 m-2">
      <h1 className="text-2xl font-bold">{resDetails.name}</h1>
      <p className="font-bold text-lg">
        {resDetails.cuisines.join(", ")}
        <span>- {resDetails.costForTwoMessage}</span>
      </p>
      <div>
        {itemCategory.map((category, index) => {
          return (
            <ResturandCategory
              key={index}
              index={index}
              data={category}
              showItems={index === expandIndex ? true : false}
              handleExpandIndex={handleExpandIndex}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ResturnatMenu;
