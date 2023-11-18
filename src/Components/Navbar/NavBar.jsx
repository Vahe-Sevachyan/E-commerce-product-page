import storeLogo from "../../assets/images/logo.svg";
import cartIcon from "../../assets/images/icon-cart.svg";
import avatar from "../../assets/images/image-avatar.png";
import "./NavBar.css";
const NavBar = () => {
  return (
    <div className="navSection">
      <div className="navBarContainer ">
        <div className="nav-links-wrapper">
          <img src={storeLogo} alt="" />
          <ul className="navLinks">
            <li>Collections</li>
            <li>Men</li>
            <li>Women</li>
            <li>About</li>
            <li>Contact</li>
          </ul>
        </div>
        <div className="avatar-section">
          <img src={cartIcon} alt="" />
          <img src={avatar} alt="" width="35px" />
        </div>
      </div>
    </div>
  );
};
export default NavBar;
