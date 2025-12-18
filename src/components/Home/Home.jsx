import React from "react";
import {
  BsTelephone,
  BsWhatsapp,
  BsInstagram,
  BsFacebook,
} from "react-icons/bs";
import Logo from "../../assets/stadplus-EventLogo.png";
import phone from "../../assets/icons8-call-24.png";
import HomeImg2 from "../../assets/Img1.webp";
import HomeImg3 from "../../assets/Img2.webp";
import HomeBg from "../../assets/HomeHall.avif";
import HomeBgImg from "../../assets/HomeHall.jpg";
import HomeBgImg2 from "../../assets/Img1.jpg";
import HomeBgImg3 from "../../assets/Img2.jpg";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className="h-150 bg-gray-400 w-full">
        <picture>
          <source srcSet={HomeBg} type="image/avif" />
          <img className="object-cover h-150 w-full" src={HomeBgImg} alt="" />
        </picture>
      </div>
      <div className="text-center p-8">
        <p className="text-[15px] tracking-wider font-semibold text-[#C7A34B]">
          WELCOME TO STADPLUS EVENT CENTRE
        </p>
        <h1 className="text-[22px] font-serif tracking-widest pb-4">
          STEP INTO THE WORLD OF EXCLUSIVITY AND ENCHANCEMENT
        </h1>

        <h3 className="md:px-[30%] py-4 border-t border-[#C7A34B]">
          Welcome to stadplus, where luxury meet serenity, and every moment is a
          treasure waiting to be discovered
        </h3>
      </div>
      <div className="flex gap-16 p-8 ">
        <div className="w-300 h-150 bg-gray-500">
          <picture>
            <source srcSet={HomeImg2} type="image/webp" />
            <img
              src={HomeBgImg2}
              className="object-cover w-full h-200.5"
              alt=""
            />
          </picture>
        </div>
        <div className="mt-16 w-full h-200.5 bg-gray-500">
          <picture>
            <source srcSet={HomeImg3} type="image/webp" />
            <img
              src={HomeBgImg3}
              className="object-cover w-full h-200.5"
              alt=""
            />
          </picture>
        </div>
      </div>
      <div className="py-8 mt-16 bg-[#F6F6F6]">
        <div className="text-center p-8">
          <p className="text-[15px] tracking-wider font-semibold text-[#C7A34B]">
            GALLERY
          </p>
          <h1 className="text-[22px] font-serif tracking-widest pb-4">
            A VISUAL JOURNEY OF THE RETREAT
          </h1>
          <hr className="w-[20%] absolute left-[40%] right-[40%] text-[#c7a34b]" />
          <div className="flex justify-around gap-2 p-8">
            <img className="w-100 h-100 object-cover " src={HomeBg} alt="" />
            <img
              className="w-100 h-100 object-cover "
              src={HomeBgImg2}
              alt=""
            />
            <img
              className="w-100 h-100 object-cover "
              src={HomeBgImg3}
              alt=""
            />
          </div>
          <div>
            <button className="px-40 rounded-lg text-white py-3 cursor-pointer bg-[#c7a34b]">
              View Gallery
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
