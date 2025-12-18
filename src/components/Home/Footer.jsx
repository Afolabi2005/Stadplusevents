import React from "react";
import Logo from "../../assets/stadplus-EventLogo.png";
import {
  BsTelephone,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";

const Footer = () => {
  const IconWrapper = ({ icon, href, color }) => (
    <a
      href={href}
      className={`text-gray-400 transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 ${color}`}
    >
      {icon}
    </a>
  );
  return (
    <div className="pt-16 bg-[#393939]">
      <div className="flex justify-between px-8 pb-8 text-white">
        <div>
          <header>
            <div className="flex justify-start">
              <img className="w-50" src={Logo} alt="" />
            </div>
          </header>
          <div className="flex justify-start">
            <div className="flex flex-row items-center justify-center gap-4 px-12 p-2 border-white/10 rounded-full w-fit">
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
        </div>
        <div className="flex flex-row justify-between gap-8 px-16">
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-[#C7A34B]">Address</h1>
                <p>Ikeja hall- Xpress House, off Jobi Fele Way, Alausa- Ikeja</p>
                <a className="underline text-white" href="https://google.com/maps/stadplus-events">View on Maps</a>
            </div>
            <div className="flex flex-col gap-4">
                <h1 className="text-2xl text-[#C7A34B]">Inquiries</h1>
                <p>Tel: +234905 2222 555, +234905 2222 666, +234811 1002 999</p>
                <p>stadplusevents@gmail.com</p>
            </div>
        </div>
      </div>

      <div></div>
      <div className="flex bg-[#c7a34b] p-3 justify-center mt-4">
        <p className="text-white">© 2023 STADPLUS. ALL RIGHTS RESERVED</p>
      </div>
    </div>
  );
};

export default Footer;
