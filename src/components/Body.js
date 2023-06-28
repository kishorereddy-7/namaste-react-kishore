import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";

const Body = () => {
  const [resData, setResData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const rdata = await data.json();
    setResData(rdata?.data?.cards[2]?.data?.data?.cards);
  };

  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="search">Search</div>
      <div className="res-container">
        {resData.map((res) => (
          <RestaurantCard details={res} key={res?.data?.id} />
        ))}
      </div>
    </div>
  );
};

export default Body;
