import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";

const ResturnatMenu = () => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenu();
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResInfo({
      id: 1,
      name: "Spice Garden",
      cuisine: "Indian",
      rating: 4.5,
      eta: "30 mins",
      location: "Downtown",
      price_range: "$$",
    });
  };

  if (resInfo === null) {
    return <Shimmer />;
  }

  return (
    <div className="menu">
      <h1>{resInfo.name}</h1>
      <h2>Menu</h2>
      <ul>
        <li>Biryani</li>
        <li>Burger</li>
      </ul>
    </div>
  );
};

export default ResturnatMenu;
