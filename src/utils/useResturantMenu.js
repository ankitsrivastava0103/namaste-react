import { useEffect, useState } from "react";
import { RES_ID_URL } from "./constants";

const useResturantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);

  useEffect(() => {
    fetchMenuData();
  }, []);

  const fetchMenuData = async () => {
    const URL = RES_ID_URL(resId);
    const data = await fetch(URL);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useResturantMenu;
