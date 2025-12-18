import React from "react";
import { useNavigate } from "react-router-dom";
import HomeBgImg3 from "../../assets/Img2.jpg";
import AboutBgImg from "../../assets/Img2.webp";
import smartphone from "../../assets/icons8-smartphone-50.png";
import email from "../../assets/icons8-email-64.png";
import location from "../../assets/icons8-location-50.png";
import Footer from "../Home/Footer";

const ContactUs = () => {
  return (
    <div>
      <div className="relative h-100 bg-black/50 w-full">
        <picture>
          <source srcSet={AboutBgImg} type="image/webp" />
          <img className="object-cover h-100 w-full" src={HomeBgImg3} alt="" />
        </picture>
        <div className="absolute inset-0 bg-linear-to-t pt-32 pb-8 from-black/90 to-black/30">
          <h1 className="text-white tracking-tight border-2 border-white text-[44px] font-normal max-w-100 mx-auto text-center">
            CONTACT US
          </h1>
        </div>
      </div>
      <div className="p-16">
        <h1 className="text-center mb-16 text-[#c7a34b] font-medium text-[24px] italic">
          Get in touch with us!
        </h1>
        <div className="flex justify-center gap-3">
          <div className="flex flex-col justify-center gap-2 py-4 px-8 border-r-2 border-[#c7a34b] max-w-75">
            <img className="w-12.5 mx-auto" src={smartphone} alt="" />
            <h1 className="text-center text-[#c7a34b] font-medium text-[18px]">
              PHONE
            </h1>
            <h1 className="text-[14px]">Tel: +234 905 222 2555</h1>
            <h1 className="text-[14px]">Tel: +234 905 222 2555</h1>
          </div>
          <div className="flex flex-col justify-center gap-2 py-4 px-8 border-r-2 border-[#c7a34b] max-w-75">
            <img
              className="w-12.5 align-middle items-center mx-auto"
              src={location}
              alt=""
            />
            <h1 className="text-center text-[#c7a34b] font-medium text-[18px] ">
              ADDRESS
            </h1>
            <h1 className="text-[14px] text-center">
              Ikeja hall- Xpress House, off Jobi Fele Way, Alausa- Ikeja
            </h1>
          </div>
          <div className="flex flex-col justify-center gap-2 py-4 px-8 max-w-75">
            <img className="w-12.5 mx-auto" src={email} alt="" />
            <h1 className="text-center text-[#c7a34b] font-medium text-[18px]">
              EMAIL
            </h1>
            <h1 className="text-[14px]">stadplusevents@gmail.com</h1>
          </div>
        </div>
        <div className="grid grid-cols-2 justify-center mt-16 mb-8 ">
          <form className="max-w-100" action="">
            <div className="flex flex-col gap-4 mt-16 max-w-500 mx-auto">
              <input
                className="p-3 border border-gray-400 rounded-lg"
                type="text"
                placeholder="Your Name"
              />
              <input
                className="p-3 border border-gray-400 rounded-lg"
                type="email"
                placeholder="Your Email"
              />
              <input
                className="p-3 border border-gray-400 rounded-lg"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="p-3 border border-gray-400 rounded-lg h-50"
                placeholder="Your Message"
              ></textarea>
              <button className="bg-[#c7a34b] text-white py-3 rounded-lg hover:bg-[#b5943f] transition-all duration-300">
                Book A Space
              </button>
            </div>
          </form>
          <div className="w-full h-120">
            <iframe
              className="w-full h-full mt-16"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3965.042263194257!2d3.3425292743106593!3d6.601006023956899!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b0f4f4f4f4f%3A0x4f4f4f4f4f4f4f4f!2sIkeja%20Hall%20-%20Xpress%20House!5e0!3m2!1sen!2sng!4v1616161616161!5m2!1sen!2sng"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
