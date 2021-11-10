import { Link } from "react-router-dom";
import "./navlink.css";

const NavLink = ({ path, name }) => {
  return (
    <ul className='link-container'>
      <li>
        <Link className='link-text' to={path}>{name}</Link>
      </li>
    </ul>
  );
};

export default NavLink;
