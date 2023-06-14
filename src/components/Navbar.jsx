import { NavLink } from "react-router-dom";
import { navBarIcons, navBarLinks } from "../data/navBarData";
import logo from "../assets/nav-logo.png";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-[20] spacing-x bg-color-primary-dark text-color-white flex justify-between items-center">
      <div className="w-[15%]">
        <img className="h-12" src={logo} alt="logo" />
      </div>
      <ul className="hidden lg:flex items-center h-[10vh] w-[65%] gap-4 uppercase">
        {navBarLinks.map((item) => (
          <li key={item.title}>
            <NavLink to={item.href}>{item.title}</NavLink>
          </li>
        ))}

        <button className="blueGradient py-[1%] px-[4%] rounded-md">
          Add Property
        </button>
      </ul>
      <ul className="flex items-center gap-8 w-[20%] text-[1.3rem]">
        {navBarIcons.map((item, index) => (
          <li key={index}>
            <item.Icon />
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
