import { useContext, useState } from "react";
import { CDN_URL } from "./utils/contants";
import { Link } from "react-router-dom";
import useOnlineStatus from "./utils/useOnlineStatus";
import UserContext from "./utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");

  const onClickLogin = () => {
    btnName === "Login" ? setBtnName("Logout") : setBtnName("Login");
  };

  const onlineStatus = useOnlineStatus();

  const userDetails = useContext(UserContext);

  const cartDetails = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between items-center bg-pink-600 shadow-lg mb-2">
      <div className="">
        <img className="w-56" src={CDN_URL} />
      </div>
      <div>
        <ul className="flex p-4 m-4">
          <li className="px-4">Online Status: {onlineStatus ? "✔" : "⚠"}</li>
          <li className="px-4">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4">
            <Link to="/about">About us</Link>
          </li>
          <li className="px-4">
            <Link to="/contact">Contact us</Link>
          </li>
          <li className="px-4">
            <Link to="/grocery">Grocery</Link>
          </li>
          <li className="px-4 font-bold text-xl">
            <Link to="/cart">Cart ({cartDetails?.length} items) </Link>
          </li>
          <button className="login px-4" onClick={onClickLogin}>
            {btnName}
          </button>
          <li className="px-4 font-bold">{userDetails?.loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
