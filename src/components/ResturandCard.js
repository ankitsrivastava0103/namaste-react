const ResturantCard = ({ resturantData }) => {
  const { name, cuisine, rating, eta } = resturantData;

  return (
    <div className="m-4 p-4 w-3xs bg-gray-100 hover:bg-gray-200">
      <img></img>
      <img
        className="rounded-2xl"
        alt="food"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
      />
      <h3 className="font-bold py-1 text-lg">{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{eta}</h4>
    </div>
  );
};

export default ResturantCard;
