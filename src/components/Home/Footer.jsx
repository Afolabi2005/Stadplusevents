import React from "react";
import {
  BsTelephone,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import Logo from "../../assets/stadplus-EventLogo.png";

const Footer = () => {
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
    <footer className="pt-12 md:pt-16 bg-[#393939] text-white">
      {/* Main Footer Content */}
      <div className="flex flex-col md:flex-row justify-between items-center md:items-start px-6 md:px-16 gap-12 pb-12">
        {/* Logo & Socials Section */}
        <div className="flex flex-col items-center md:items-start gap-6">
          <img
            className="w-40 md:w-52 object-contain"
            src={Logo}
            alt="Stadplus Logo"
          />

          <div className="flex flex-row items-center gap-6">
            <IconWrapper
              icon={<BsTelephone size={20} />}
              href="tel:+2349052222555"
              color="hover:text-white"
            />
            <IconWrapper
              icon={<BsWhatsapp size={20} />}
              href="https://wa.me/+2349052222555"
              color="hover:text-[#25D366]"
            />
            <IconWrapper
              icon={<BsInstagram size={20} />}
              href="https://instagram.com/stadplusevents"
              color="hover:text-[#E1306C]"
            />
            <IconWrapper
              icon={<BsFacebook size={20} />}
              href="https://facebook.com"
              color="hover:text-[#1877F2]"
            />
          </div>
        </div>

        {/* Info Section: Address and Inquiries */}
        <div className="flex flex-col md:flex-row gap-10 md:gap-20 text-center md:text-left">
          {/* Address */}
          <div className="flex flex-col gap-3 max-w-xs">
            <h1 className="text-xl md:text-2xl text-[#C7A34B] font-semibold">
              Address
            </h1>
            <p className="text-sm md:text-base leading-relaxed text-gray-300">
              Ikeja hall - Xpress House, off Jobi Fele Way, Alausa-Ikeja, Lagos.
            </p>
            <a
              className="underline text-[#C7A34B] hover:text-white transition-colors text-sm"
              href="https://maps.app.goo.gl/Gomsx9kofKwR6Q3CA"
              target="_blank"
              rel="noopener noreferrer"
            >
              View on Maps
            </a>
          </div>

          {/* Inquiries */}
          <div className="flex flex-col gap-3">
            <h1 className="text-xl md:text-2xl text-[#C7A34B] font-semibold">
              Inquiries
            </h1>
            <div className="text-sm md:text-base text-gray-300 space-y-1">
              <p>+234 905 2222 555</p>
              <p>+234 905 2222 666</p>
              <p>+234 811 1002 999</p>
            </div>
            <p className="text-[#C7A34B] text-sm mt-2">
              stadplusevents@gmail.com
            </p>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="bg-[#c7a34b] py-4 text-center">
        <p className="text-white text-xs md:text-sm tracking-widest font-medium">
          © {new Date().getFullYear()} STADPLUS. ALL RIGHTS RESERVED
        </p>
      </div>
    </footer>
  );
};

export default Footer;
