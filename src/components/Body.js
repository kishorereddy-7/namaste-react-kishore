import { useContext, useEffect, useState } from "react";
import RestaurantCard, { withPromtedLabel } from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import { RES_ENUM } from "./utils/contants.js";
import UserContext from "./utils/UserContext";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturent, setFilteredResturent] = useState([]);

  const userDetails = useContext(UserContext);

  const RestaurantCardPromoted = withPromtedLabel(RestaurantCard);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const rdata = await data.json();
    const resData = rdata?.data?.cards?.find(
      (item) => item?.card?.card?.id === RES_ENUM
    );
    setResData(resData?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    setFilteredResturent(
      resData?.card?.card?.gridElements?.infoWithStyle?.restaurants
    );
  };

  const onClickTopRatedFilter = () => {
    const filteredList = resData.filter((res) => res.data.avgRating > 4);
    setFilteredResturent(filteredList);
  };

  const onClickSearch = () => {
    const filteredList = resData.filter((res) =>
      res.data.name.toLowerCase().includes(searchText.toLowerCase())
    );
    setFilteredResturent(filteredList);
  };

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) {
    return <h1>Looks Like Your offline Please Check Your Internet</h1>;
  }

  const changeInput = (e) => {
    userDetails?.setUserInfo(e.target.value);
  };

  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="flex items-center">
        <div className="p-4 m-4">
          <input
            type="text"
            className="border border-solid border-black"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={onClickSearch}
          >
            Search
          </button>
        </div>
        <div className="p-4 m-4">
          <button
            className="px-4 py-2 bg-gray-100"
            onClick={onClickTopRatedFilter}
          >
            Top Rated Restaurants
          </button>
        </div>
        <label>User Name</label>
        <input className="border border-black p-2" onChange={changeInput} />
      </div>
      <div className="flex flex-wrap">
        {filteredResturent?.map((res) => {
          return (
            <Link
              className="disable-link-style"
              key={res?.info?.id}
              to={"/restaurants/" + res?.info?.id}
            >
              {res?.info?.promoted ? (
                <RestaurantCardPromoted details={res?.info} />
              ) : (
                <RestaurantCard details={res?.info} />
              )}
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Body;
