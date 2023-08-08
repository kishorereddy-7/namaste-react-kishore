import { useEffect, useState } from "react";
import { RES_DETAILS_BY_ID } from "./contants";

const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  useEffect(() => {
    fetchMenu(resId);
  }, []);

  const fetchMenu = async () => {
    const data = await fetch(RES_DETAILS_BY_ID + resId);
    const json = await data.json();
    setResInfo(json.data);
  };

  return resInfo;
};

export default useRestaurantMenu;
