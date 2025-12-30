import { useState } from "react";
import { Link, NavLink } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";

const Header = () => {
  const [navState, setNavState] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  const mobileMenuSelection = (selected:number) => {
    setNavState(selected)
    setMenuOpen(false)
  }

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
      <div className="relative flex justify-between items-center md:hidden">
        <span onClick={() => setNavState(0)}>
          <Link to={"/"}>
            <img
              className="w-45"
              src="/Assets/Images/Elements/WBGroupOfCompanies.png"
            />
          </Link>
        </span>
        <span
          className="mr-6"
          onClick={() => {
            setMenuOpen(true);
          }}
        >
          <AiOutlineMenu size={25} />
        </span>

        {menuOpen ? (
          <div className="absolute top-[20%] left-[3%] flex flex-col w-[94%] h-155 rounded-2xl py-6 justify-around items-center bg-white shadow-xl/30">
            <div className="w-full">
              <span onClick={() => mobileMenuSelection(0)} className="relative w-30">
                <Link to={"/"}>
                  <img
                    className="w-45 m-4"
                    src="/Assets/Images/Elements/WBGroupOfCompanies.png"
                  />
                </Link>
                <RxCross2
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                  className="absolute top-[50%] right-[10%]"
                  size={25}
                />
              </span>
            </div>
            <div
              onClick={() => mobileMenuSelection(1)}
              className={
                navState === 1
                  ? "font-semibold border-b w-[80%]"
                  : "border-b w-[80%]"
              }
            >
              <NavLink to={"/whoweare"}>Who we are?</NavLink>
            </div>
            <div
              onClick={() => mobileMenuSelection(2)}
              className={
                navState === 2
                  ? "font-semibold border-b w-[80%]"
                  : "border-b w-[80%]"
              }
            >
              <NavLink to={"/ourbusiness"}>Our Business</NavLink>
            </div>
            <div
              onClick={()=>mobileMenuSelection(3)}
              className={
                navState === 3
                  ? "font-semibold border-b w-[80%]"
                  : "border-b w-[80%]"
              }
            >
              <NavLink to={"/ourcontent"}>Our Content</NavLink>
            </div>
            <div className="bg-primary rounded-[50rem] text-white font-medium px-6 py-2 ">
              Contact Us
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Header;
