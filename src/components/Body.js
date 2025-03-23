import ResturantCard from "./ResturandCard";
import RES_DATA from "../utils/mockData";
import { useState } from "react";

const Body = () => {
  const [resData, setResData] = useState(RES_DATA);

  const handleFilterClick = () => {
    const filteredData = resData.filter((res) => {
      return res.rating >= 4.5;
    });
    setResData(filteredData);
  };

  return (
    <div className="body">
      <div className="filter">
        <button className="filtter-button" onClick={handleFilterClick}>
          Top Rated Resturants
        </button>
      </div>
      <div className="resturant-container">
        {resData?.map((resturant) => {
          return <ResturantCard key={resturant.id} resturantData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
