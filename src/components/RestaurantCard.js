import { useContext } from "react";
import { RES_IMAGE_URL } from "./utils/contants";
import UserContext from "./utils/UserContext";

const RestaurantCard = (props) => {
  const data = props?.details;

  const userDetails = useContext(UserContext);

  return (
    <div
      data-testid="res-card"
      className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200"
    >
      <img
        className="rounded-md"
        alt="res-logo"
        src={RES_IMAGE_URL + data?.cloudinaryImageId}
      />
      <h3 className="font-bold py-4">{data?.name}</h3>
      <h4>{data?.cuisines?.join(",")}</h4>
      <h4>{data?.avgRating}</h4>
      <h4>{data?.deliveryTime} minutes</h4>
      <h4>{userDetails?.loggedInUser}</h4>
    </div>
  );
};

// Higher Order Component

export const withPromtedLabel = (RestaurantCard) => {
  return (props) => {
    return (
      <div>
        <label className="absolute bg-black text-white">Promoted</label>
        <RestaurantCard details={props.details} />
      </div>
    );
  };
};

export default RestaurantCard;
