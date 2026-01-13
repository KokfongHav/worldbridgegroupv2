import { useEffect, useState } from "react";
import { Link, NavLink } from "react-router";
import { AiOutlineMenu } from "react-icons/ai";
// import { RxCross2 } from "react-icons/rx";
import { FaRegCircleXmark } from "react-icons/fa6";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const mobileMenuSelection = ()=> {
    setMenuOpen(false);
  };

  return (
    <header className={`
        sticky top-0 z-50 transition-all duration-300
        ${scrolled ? "bg-white shadow-md" : "bg-transparent"}
      `}>
      {/* //Medium screen up */}
      <div className="hidden md:flex md:w-full md:h-20 md:justify-around md: items-center cursor-pointer ">
        <span>
          <Link to={"/"}>
            <img
              className="md:w-45"
              src="/Assets/Images/Elements/WBGroupOfCompanies.png"
            />
          </Link>
        </span>
        <div className="flex md:w-3/5 md:justify-around md:items-center md:text-[16px]">
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-normal"
              }
              to={"/whoweare"}
            >
              Who we are?
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-normal"
              }
              to={"/ourbusiness"}
            >
              Our Business
            </NavLink>
          </span>
          <span>
            <NavLink
              className={({ isActive }) =>
                isActive ? "font-semibold" : "font-normal"
              }
              to={"/ourcontent"}
            >
              Our Content
            </NavLink>
          </span>
          <span className="bg-primary rounded-[50rem] text-white font-medium px-6 py-2">
            Contact Now
          </span>
        </div>
      </div>
      {/* Mobile screen */}
      <div className="relative flex justify-between items-center md:hidden">
        <span>
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
          <div className="absolute z-10 top-[20%] left-[3%] flex flex-col w-[94%] h-155 rounded-2xl py-6 justify-around items-center bg-white shadow-xl/30">
            <div className="w-full">
              <span
                onClick={() => mobileMenuSelection()}
                className="relative w-30"
              >
                <Link to={"/"}>
                  <img
                    className="w-45 m-4"
                    src="/Assets/Images/Elements/WBGroupOfCompanies.png"
                  />
                </Link>
                <FaRegCircleXmark
                  onClick={() => {
                    setMenuOpen(false);
                  }}
                  className="absolute top-[50%] right-[10%]"
                  size={25}
                />
              </span>
            </div>
            <div
              onClick={() => mobileMenuSelection()}
              className={"border-b w-[80%]"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold" : "font-normal"
                }
                to={"/whoweare"}
              >
                Who we are?
              </NavLink>
            </div>
            <div
              onClick={() => mobileMenuSelection()}
              className={"border-b w-[80%]"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold" : "font-normal"
                }
                to={"/ourbusiness"}
              >
                Our Business
              </NavLink>
            </div>
            <div
              onClick={() => mobileMenuSelection()}
              className={"border-b w-[80%]"}
            >
              <NavLink
                className={({ isActive }) =>
                  isActive ? "font-semibold" : "font-normal"
                }
                to={"/ourcontent"}
              >
                Our Content
              </NavLink>
            </div>
            <div className="bg-primary rounded-[50rem] text-white font-medium px-6 py-2 ">
              Contact Us
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </header>
  );
};

export default Header;
