import { NavLink } from "react-router-dom";
import FilledButton from "../Button/FilledButton";

const Navbar = () => {
  const navLinkClasses = (isActive) => {
    if (isActive) {
      return "text-sm md:text-md lg:text-md xl:text-lg text-[#23BE0A] border border-[#23BE0A] rounded-lg font-semibold bg-transparent py-1 lg:py-2 xl:py-4 px-1  xl:px-4";
    }
    return "text-sm md:text-md lg:text-md xl:text-lg font-normal py-1 lg:py-2 xl:py-4 px-1  xl:px-4 border-transparent";
  };

  const tabsLinks = (
    <>
      <NavLink className={({ isActive }) => navLinkClasses(isActive)} to="/">
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) => navLinkClasses(isActive)}
        to="/listed-books"
      >
        Listed Books
      </NavLink>
      <NavLink
        className={({ isActive }) => navLinkClasses(isActive)}
        to="/pages-to-read"
      >
        Pages To Read
      </NavLink>
      <NavLink
        className={({ isActive }) => navLinkClasses(isActive)}
        to="/best-seller"
      >
        Best Seller
      </NavLink>
      <NavLink
        className={({ isActive }) => navLinkClasses(isActive)}
        to="/search"
      >
        Search
      </NavLink>
    </>
  );

  return (
    <>
      <nav className="w-11/12 lg:w-10/12 bg-base-100 mx-auto fixed z-10">
        <div className="navbar w-full m-0 p-0">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
              >
                {tabsLinks}
              </ul>
            </div>
            <a className="px-0 md:px-3 btn btn-ghost text-xl md:text-2xl lg:text-3xl font-bold">
              Book Vibe
            </a>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1 gap-2 xl:gap-4 items-center">
              {tabsLinks}
            </ul>
          </div>
          <div className="navbar-end">
            <div className="flex gap-4">
              <FilledButton label="Sign In" isPrimary={true} />
              <FilledButton label="Sign Up" isPrimary={false} isHidden={true} />
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
