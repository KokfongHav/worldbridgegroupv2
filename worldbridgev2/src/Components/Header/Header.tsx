import { useState } from "react";
import { Link, NavLink } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";

const Header = () => {
  const [navState, setNavState] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false)

  return (
    <>
      {/* //Medium screen up */}
      <div className="hidden md:flex md:w-full md:h-20 md:justify-around md: items-center cursor-pointer ">
        <span onClick={() => setNavState(0)}>
          <Link to={"/"}>
            <img
              className="md:w-45"
              src="/Assets/Images/Elements/WBGroupOfCompanies.png"
            />
          </Link>
        </span>
        <div className="flex md:w-3/5 md:justify-around md:items-center md:text-[16px]">
          <span
            onClick={() => setNavState(1)}
            className={navState === 1 ? "font-semibold" : ""}
          >
            <NavLink to={"/whoweare"}>Who we are?</NavLink>
          </span>
          <span
            onClick={() => setNavState(2)}
            className={navState === 2 ? "font-semibold" : ""}
          >
            <NavLink to={"/ourbusiness"}>Our Business</NavLink>
          </span>
          <span
            onClick={() => setNavState(3)}
            className={navState === 3 ? "font-semibold" : ""}
          >
            <NavLink to={"/ourcontent"}>Our Content</NavLink>
          </span>
          <span className="bg-primary rounded-[50rem] text-white font-medium px-6 py-2">
            Contact Us
          </span>
        </div>
      </div>
      {/* Mobile screen */}
      <div className="flex justify-between items-center md:hidden">
        <span onClick={() => setNavState(0)}>
          <Link to={"/"}>
            <img
              className="w-45"
              src="/Assets/Images/Elements/WBGroupOfCompanies.png"
            />
          </Link>
        </span>
        <span className="mr-6" onClick={()=>{setMenuOpen(true)}}>
          <AiOutlineMenu size={25}/>
        </span>
        <div className="absolute top-1 flex-col flex-wrap w-full h-full">
          <span
            onClick={() => setNavState(1)}
            className={navState === 1 ? "font-semibold" : ""}
          >
            <NavLink to={"/whoweare"}>Who we are?</NavLink>
          </span>
          <span
            onClick={() => setNavState(2)}
            className={navState === 2 ? "font-semibold" : ""}
          >
            <NavLink to={"/ourbusiness"}>Our Business</NavLink>
          </span>
          <span
            onClick={() => setNavState(3)}
            className={navState === 3 ? "font-semibold" : ""}
          >
            <NavLink to={"/ourcontent"}>Our Content</NavLink>
          </span>
          <span className="bg-primary rounded-[50rem] text-white font-medium px-6 py-2">
            Contact Us
          </span>
        </div>
      </div>
    </>
  );
};

export default Header;
