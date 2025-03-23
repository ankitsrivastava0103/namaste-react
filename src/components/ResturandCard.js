const ResturantCard = ({ resturantData }) => {
  const { name, cuisine, rating, eta } = resturantData;

  return (
    <div className="resturant-card" style={{ backgroundColor: "#f0f0f0" }}>
      <img></img>
      <img
        className="resturant-logo"
        alt="food"
        src="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/gp1ityra6utvzqn6ghnv"
      />
      <h3>{name}</h3>
      <h4>{cuisine}</h4>
      <h4>{rating}</h4>
      <h4>{eta}</h4>
    </div>
  );
};

export default ResturantCard;
