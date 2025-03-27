import RES_DATA from "../utils/mockData";
import Shimmer from "./Shimmer";
import ResturantCard from "./ResturandCard";
import { useEffect, useState } from "react";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    // setResData(json) Commented as using mock data
    setResData(RES_DATA);
    setFiltered(RES_DATA);
  };

  const handleFilterClick = () => {
    const filteredData = resData.filter((res) => {
      return res.rating >= 4.5;
    });
    setFiltered(filteredData);
  };

  const handleSearchClick = () => {
    const filteredData = resData.filter((res) => {
      const name = res.name.toLowerCase();
      if (name.includes(searchValue.toLowerCase())) {
        return res;
      }
    });
    setFiltered(filteredData);
  };

  const handleInputChange = () => {
    setSearchValue(event.target.value);
  };

  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={handleInputChange}
            value={searchValue}
          />
          <button onClick={handleSearchClick}>Search</button>
        </div>
        <button className="filtter-button" onClick={handleFilterClick}>
          Top Rated Resturants
        </button>
      </div>
      <div className="resturant-container">
        {filtered?.map((resturant) => {
          return <ResturantCard key={resturant.id} resturantData={resturant} />;
        })}
      </div>
    </div>
  );
};

export default Body;
