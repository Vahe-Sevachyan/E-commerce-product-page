import storeLogo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navBarContainer">
      <div>
        <img src={storeLogo} alt="" />
      </div>
      <ul className="navLinks">
        <li>Collections</li>
        <li>Men</li>
        <li>Women</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div>
        <img src={cartIcon} alt="" />
        <img src={avatar} alt="" width="40px" />
      </div>
    </div>
  );
};

export default NavBar;
