import { Link } from "react-router-dom";
import { logo } from "../assets/images";
import { links, social_icons } from "../utils/data";
import { IoClose } from "react-icons/io5";


export const NavBarMobile = ({ isOpen, setIsOpen }) => {
  return (
    <section className={`${isOpen ? '' : 'translate-x-full'} absolute top-0 w-full h-screen bg-nav/80 md:hidden duration-300`}>
      <nav className="absolute w-[82%] max-w-80 h-full bg-nav right-0">
        <div className="flex justify-between items-center pt-6 px-4">
          <div>
            <Link>
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <button onClick={() => setIsOpen(!isOpen)}>
            <IoClose size={33} color="#fff" />
          </button>
        </div>
        <div className="grid mt-9">
          {links.map((link, i) => (
            <div key={i} className="flex text-white border-t border-secundary">
              <a
                href={link.href}
                className="hover:text-primary w-full py-4 px-6 duration-700"
              >
                {link.name}
              </a>
            </div>
          ))}
        </div>
        <div className="flex justify-center gap-5 border-t border-secundary">
          {social_icons.map((link, i) => (
            <div key={i}>
              <a
                href={link.href}
                className="text-white hover:text-primary w-full px-4 duration-700"
              >
                {link.icon}
              </a>
            </div>
          ))}
        </div>
      </nav>
    </section>
  );
};
