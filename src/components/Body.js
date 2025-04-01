import RES_DATA from "../utils/mockData";
import Shimmer from "./Shimmer";
import ResturantCard, { withPromotedLabel } from "./ResturandCard";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";

const ResturandCardPromoted = withPromotedLabel(ResturantCard);

const Body = () => {
  const [resData, setResData] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [searchValue, setSearchValue] = useState("");
  const { setUserName, loggedInUser } = useContext(UserContext);

  const onlineStatus = useOnlineStatus();

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.6314201&lng=88.4125157&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    const resData =
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle
        ?.restaurants;
    setResData(resData);
    setFiltered(resData);
  };

  const handleFilterClick = () => {
    const filteredData = resData.filter((res) => {
      return res?.info?.avgRating >= 4.5;
    });
    setFiltered(filteredData);
  };

  const handleSearchClick = () => {
    const filteredData = resData.filter((res) => {
      const name = res?.info?.name.toLowerCase();
      if (name.includes(searchValue.toLowerCase())) {
        return res;
      }
    });
    setFiltered(filteredData);
  };

  const handleInputChange = () => {
    setSearchValue(event.target.value);
  };

  if (!onlineStatus) {
    return (
      <h2 className="text-3xl font-bold underline">
        Youur internet is offline. Please check your internet connection!
      </h2>
    );
  }

  if (resData.length === 0) {
    return <Shimmer />;
  }

  return (
    <div className="body">
      <div className="flex">
        <div className="m-4 p-4">
          <input
            type="text"
            className="border  border-solid border-black"
            onChange={handleInputChange}
            value={searchValue}
          />
          <button
            className="p-1 bg-green-100 m-4 cursor-pointer rounded-lg"
            onClick={handleSearchClick}
          >
            Search
          </button>
        </div>
        <div className="m-4 p-4">
          <button
            className="p-1 bg-gray-100 m-4 cursor-pointer rounded-lg"
            onClick={handleFilterClick}
          >
            Top Rated Resturants
          </button>
        </div>
        <div className="m-4 p-4">
          <label>UserName : </label>
          <input
            className="p-1 m-1 border border-black"
            onChange={(event) => setUserName({ name: event.target.value })}
            value={loggedInUser}
          />
        </div>
      </div>
      <div className="flex flex-wrap m-4 p-4 rounded-lg">
        {filtered?.map((resturant) => {
          return (
            <Link
              key={resturant?.info?.id}
              to={"/resurant/" + resturant?.info?.id}
            >
              {resturant?.info?.promoted ? (
                <ResturandCardPromoted resturantData={resturant?.info} />
              ) : (
                <ResturantCard resturantData={resturant?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
