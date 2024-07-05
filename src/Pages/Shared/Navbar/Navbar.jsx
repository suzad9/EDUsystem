import "./Navbar.css";
import { Link } from "react-router-dom";
import logo from "../../../assets/Blue and Orange Flat Illustrative Education Center Logo 1.png";
const Navbar = () => {
  return (
    <div className="ml-[5%] mr-[5%]">
      <div className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" />
        </div>
        <div>
          <button className=" loginBtn ">
            <Link to="/login">Login</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
