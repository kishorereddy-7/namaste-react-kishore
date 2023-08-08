import { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";

const Body = () => {
  const [resData, setResData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [filteredResturent, setFilteredResturent] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&page_type=DESKTOP_WEB_LISTING"
    );
    const rdata = await data.json();
    setResData(rdata?.data?.cards[2]?.data?.data?.cards);
    setFilteredResturent(rdata?.data?.cards[2]?.data?.data?.cards);
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

  return resData?.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter">
        <div className="search">
          <input
            type="text"
            className="search-box"
            onChange={(e) => setSearchText(e.target.value)}
            value={searchText}
          />
          <button onClick={onClickSearch}>Search</button>
        </div>
        <button className="filter-btn" onClick={onClickTopRatedFilter}>
          Top Rated Restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredResturent?.map((res) => (
          <Link
            className="disable-link-style"
            key={res?.data?.id}
            to={"/restaurants/" + res?.data?.id}
          >
            <RestaurantCard details={res} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
