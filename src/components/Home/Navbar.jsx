import React from "react";
import {
  BsTelephone,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import Logo from "../../assets/stadplus-EventLogo.png";
import { useNavigate, useLocation } from "react-router-dom";

const Navbar = ({ active, setActive }) => {
  const menu = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Our Halls", path: "/halls" },
    { name: "Gallery", path: "/gallery" },
    { name: "Contact us", path: "/contact-us" },
  ];
  const IconWrapper = ({ icon, href, color }) => (
    <a
      href={href}
      className={`text-gray-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${color}`}
    >
      {icon}
    </a>
  );

  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div>
      <header>
        <div className="bg-white flex justify-center">
          <img className="w-30" src={Logo} alt="" />
        </div>
      </header>
      <nav className="flex bg-[#393939] justify-between px-8 py-2">
        <ul className="flex gap-8 px-24">
          {menu.map((item, index) => {
            const isActive = location.pathname === item.path;
            return (
              <li
                key={index}
                onClick={() => navigate(item.path)}
                className={`transition-all duration-200 ${
                  isActive
                    ? "bg-[#C7A34B] cursor-pointer text-[13px] text-white py-2.25 px-4"
                    : "hover:bg-[#c7a44b93] cursor-pointer text-[13px] text-white py-2.25 px-4"
                }`}
              >
                {item.name.toUpperCase()}
              </li>
            );
          })}
        </ul>
        <div>
          <div className="flex flex-row items-center justify-center gap-8 p-2 bg-white/5 backdrop-blur-md border border-white/10 rounded-full shadow-2xl w-fit mx-auto">
            {/* Phone */}
            <IconWrapper
              icon={<BsTelephone size={19} />}
              href="tel:+2349052222555"
              color="hover:text-gray-900 dark:hover:text-white"
            />

            {/* WhatsApp */}
            <IconWrapper
              icon={<BsWhatsapp size={19} />}
              href="https://wa.me/+2349052222555"
              color="hover:text-[#25D366]"
            />

            {/* Instagram */}
            <IconWrapper
              icon={<BsInstagram size={19} />}
              href="https://instagram.com/stadplusevents"
              color="hover:text-[#E1306C]"
            />

            {/* Facebook */}
            <IconWrapper
              icon={<BsFacebook size={19} />}
              href="https://facebook.com"
              color="hover:text-[#1877F2]"
            />
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
