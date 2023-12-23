import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { NavBarMobile } from "./NavBarMobile";
import { links } from "../utils/data";
import { FaBars, FaSearch } from "react-icons/fa";
import { RiGlobalLine } from "react-icons/ri";

export const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 0 ? setSticky(true) : setSticky(false);
    });
  }, []);

  return (
    <header
      className={`${sticky ? "bg-nav" : ""} fixed w-full z-10 duration-700`}
    >
      <nav
        className={`${
          sticky ? "h-20 md:h-28" : "h-24 md:h-32"
        } section  duration-700`}
      >
        <div>
          <Link>
            <img src={logo} alt="logo" />
          </Link>
        </div>
        <div className="flex gap-14">
          <ul className="text_links hidden lg:flex">
            {links.map((link, i) => (
              <li key={i} className="hover:text-primary uppercase">
                <Link to={link.href}>{link.name}</Link>
              </li>
            ))}
          </ul>
        <div className="flex items-center gap-4">
          <button className="hidden sm:flex border-r-2 h-fit border-secundary pr-3">
            <FaSearch size={18} color="#fff" />
          </button>
          <div className=" hidden sm:flex gap-1">
            <RiGlobalLine className="text-primary" size={25} />
            <select>
              <option value="en">EN</option>
              <option value="es">ES</option>
            </select>
          </div>
          <div>
            <button
              className="block lg:hidden pl-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <FaBars size={24} color="#fff" />
            </button>
          </div>
        </div>
        </div>
      </nav>
      <NavBarMobile isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
};
