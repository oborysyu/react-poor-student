import { NavLink, useNavigate } from "react-router-dom";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { logOut } from "../../store/userSlice";
import Logo from "../../assets/loan.png";


const Navbar = () => {

  const navigate = useNavigate();
  const handleExit = () => {
    dispatch(logOut());
    navigate("/");
  };
  const dispatch = useDispatch();
  return (
    <div className="nav-bar">
      <img src={Logo} className="logo"/>
      <div className="nav-bar-links">
        <li>
          <NavLink
            to="/settings"
            className="nav-link"
            activeclassname="active"
            exact="true"
          >
            Settings
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/result"
            exact="true"
            className="nav-link"
            activeclassname="active"
          >
            Result
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/instructions"
            exact="true"
            className="nav-link"
            activeclassname="active"
          >
            Instructions
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/dev"
            exact="true"
            className="nav-link"
            activeclassname="active"
          >
            Developer
          </NavLink>
        </li>
      </div>
      <li className="exit-btn" onClick={handleExit}>Exit</li>
    </div>
  );
};
export default Navbar;
