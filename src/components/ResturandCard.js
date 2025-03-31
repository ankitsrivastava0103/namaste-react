import { IMG_URL } from "../utils/constants";

const ResturantCard = ({ resturantData }) => {
  const { name, cuisine, avgRating, eta, costForTwo, sla, cloudinaryImageId } =
    resturantData;

  return (
    <div className="m-4 p-4 w-3xs bg-gray-100 hover:bg-gray-200">
      <img></img>
      <img
        className="rounded-2xl"
        alt="food"
        src={IMG_URL + cloudinaryImageId}
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{avgRating}</h4>
      <h4>{sla?.slaString}</h4>
      <h4>{costForTwo}</h4>
    </div>
  );
};

export const withPromotedLabel = (ResturantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white m-2 p-2 rounded-2xl">
          Promoted
        </label>
        <ResturantCard {...props} />
      </div>
    );
  };
};

export default ResturantCard;
