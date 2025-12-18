import React from "react";
import {
  BsTelephone,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import Logo from "../../assets/stadplus-EventLogo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = () => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Halls", path: "/our-halls" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact us", path: "/contact-us" },
  ];

  const navigate = useNavigate();
  const location = useLocation();

  const IconWrapper = ({ icon, href, color }) => (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`text-gray-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${color}`}
    >
      {icon}
    </a>
  );

  return (
    <div className="sticky top-0 z-50 w-full shadow-md">
      {/* LOGO HEADER */}
      <header className="bg-white py-2 flex justify-center border-b border-gray-100">
        <img className="w-24 md:w-30 object-contain" src={Logo} alt="Stadplus Logo" />
      </header>

      {/* NAVIGATION BAR */}
      <nav className="bg-[#393939] px-4 md:px-12 py-1 flex justify-between items-center">
        
        {/* MENU: Responsive List */}
        <ul className="flex items-center gap-2 md:gap-8 overflow-x-auto no-scrollbar py-2 md:py-0 w-full md:w-auto">
          {menu.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={index}
                onClick={() => navigate(item.path)}
                className={`transition-all duration-300 cursor-pointer text-[12px] md:text-[13px] py-2 px-3 md:px-4 whitespace-nowrap flex-shrink-0 ${
                  isActive
                    ? "bg-[#C7A34B] text-white font-medium"
                    : "text-white hover:bg-[#c7a44b93]"
                }`}
              >
                {item.name.toUpperCase()}
              </li>
            );
          })}
        </ul>

        {/* SOCIAL ICONS: Expertly hidden on mobile (hidden md:flex) */}
        <div className="hidden md:flex flex-row items-center gap-6 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full ml-4">
          <IconWrapper
            icon={<BsTelephone size={18} />}
            href="tel:+2349052222555"
            color="hover:text-white"
          />
          <IconWrapper
            icon={<BsWhatsapp size={18} />}
            href="https://wa.me/+2349052222555"
            color="hover:text-[#25D366]"
          />
          <IconWrapper
            icon={<BsInstagram size={18} />}
            href="https://instagram.com/stadplusevents"
            color="hover:text-[#E1306C]"
          />
          <IconWrapper
            icon={<BsFacebook size={18} />}
            href="https://facebook.com"
            color="hover:text-[#1877F2]"
          />
        </div>
      </nav>
    </div>
  );
};

export default Navbar;