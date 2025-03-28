import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResturantMenu from "../utils/useResturantMenu";

const ResturnatMenu = () => {
  const { resId } = useParams();
  console.log(resId);
  const resInfo = useResturantMenu(resId);

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
