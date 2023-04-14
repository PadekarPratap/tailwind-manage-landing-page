import { useState } from "react";
import Logo from "../assets/img/logo.svg";
import HamMenu from '../assets/img/icon-hamburger.svg'
import Cross from '../assets/img/icon-close.svg'

const Navbar = () => {
  const [openNav, setOpenNav] = useState(false);
  return (
    <>
      <div className="container mx-auto md:px-4 h-[80px] flex items-center justify-between px-[2rem]">
        {/* left section  */}
        <div>
          <img src={Logo} alt="logo" />
        </div>

        {/* middle */}
        <div className="hidden lg:block">
          <ul className="flex items-center gap-8">
            <li className="navlink">
              <a>Pricing</a>
            </li>
            <li className="navlink">
              <a>Product</a>
            </li>
            <li className="navlink">
              <a>About US</a>
            </li>
            <li className="navlink">
              <a>Careers</a>
            </li>
            <li className="navlink">
              <a>Community</a>
            </li>
          </ul>
        </div>

        {/* right section  */}
        <div className="hidden lg:block">
          <button className="text-white bg-brightOrange px-4 py-2 rounded-full font-semibold">
            Get Started
          </button>
        </div>

        {/* hamburger */}
        <div
          className="lg:hidden cursor-pointer"
          role="button"
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? <img src={Cross} alt="menu" /> : <img src={HamMenu} alt="close" />}
        </div>
      </div>

      {/* dropdown menu  */}
      <div
        className={
          openNav
            ? "opacity-100 fixed top-[6rem] left-[5rem] right-[5rem] shadow-2xl shadow-black/20 bg-white duration-500 ease-in-out"
            : "opacity-0 top-[5rem] pointer-events-none hidden"
        }
      >
        <ul className="text-center">
          <li className="p-4 navlink font-normal">
            <a href="#">Pricing</a>
          </li>
          <li className="p-4 navlink font-normal">
            <a href="#">Product</a>
          </li>
          <li className="p-4 navlink font-normal">
            <a href="#">About Us</a>
          </li>
          <li className="p-4 navlink font-normal">
            <a href="#">Careers</a>
          </li>
          <li className="p-4 navlink font-normal">
            <a href="#">Community</a>
          </li>
        </ul>
      </div>
    </>
  );
};
export default Navbar;
