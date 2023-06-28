import { RES_IMAGE_URL } from "./utils/contants";

const RestaurantCard = (props) => {
  const { data } = props?.details;
  return (
    <div
      className="res-card"
      style={{
        backgroundColor: "#f0f0f0",
      }}
    >
      <img
        className="res-logo"
        alt="res-logo"
        src={RES_IMAGE_URL + data.cloudinaryImageId}
      />
      <h3>{data.name}</h3>
      <h4>{data.cuisines?.join(",")}</h4>
      <h4>{data.avgRating}</h4>
      <h4>{data.deliveryTime} minutes</h4>
    </div>
  );
};

export default RestaurantCard;
