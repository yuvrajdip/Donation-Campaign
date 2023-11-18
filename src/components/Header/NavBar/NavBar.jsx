import { NavLink } from "react-router-dom";
import Logo from "../../Logo/Logo";

const NavBar = () => {
  return (
    <div>
      <nav className="md:flex md:justify-between md:items-center py-7">
        <Logo></Logo>
        <ul className="flex justify-center items-center">
          <li className="mr-8  text-xl">
            <NavLink
              to="/"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Home
            </NavLink>
          </li>
          <li className="mr-8 text-xl">
            <NavLink
              to="/donation"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Donation
            </NavLink>
          </li>
          <li className="mr-8 text-xl">
            <NavLink
              to="/statistics"
              className={({ isActive, isPending }) =>
                isPending ? "pending" : isActive ? "text-[#FF444A] underline" : ""
              }
            >
              Statistics
            </NavLink>
          </li>
        </ul>

      </nav>
    </div>
  );
};

export default NavBar;