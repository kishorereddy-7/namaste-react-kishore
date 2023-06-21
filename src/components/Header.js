import { CDN_URL } from "./utils/contants";

const Header = () => (
  <div className="header">
    <div className="logo-container">
      <img className="logo" src={CDN_URL} />
    </div>
    <div className="nav-items">
      <ul>
        <li>Home</li>
        <li>About us</li>
        <li>Contact us</li>
        <li>Cart</li>
      </ul>
    </div>
  </div>
);

export default Header;
