import "./Navbar.css";
import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav>
      <Link to="/">
        <h1>Pedidos</h1>
      </Link>
      <ul>
        <li>
          <NavLink to="/overview">Dashboard</NavLink>
        </li>
        <li>
          <NavLink to="/order">Pedidos</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
