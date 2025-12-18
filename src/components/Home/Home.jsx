import React from "react";
import { useNavigate } from "react-router-dom";
import HomeImg2 from "../../assets/Img1.webp";
import HomeBg from "../../assets/HomeHall.avif";
import HomeBgImg from "../../assets/HomeHall.jpg";
import HomeBgImg2 from "../../assets/Img1.jpg";
import HomeBgImg3 from "../../assets/img2.jpg";
import Footer from "./Footer";
import { Link } from "react-router-dom"; // Added for the button

const Home = () => {
  const navigate = useNavigate();
  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION - Responsive Height */}
      <div className="h-[60vh] md:h-150 bg-gray-400 w-full">
        <picture>
          <source srcSet={HomeBg} type="image/avif" />
          <img 
            className="object-cover h-full w-full" 
            src={HomeBgImg} 
            loading="lazy" 
            alt="Hero Background" 
          />
        </picture>
      </div>

      {/* WELCOME TEXT - Responsive Padding */}
      <div className="text-center p-6 md:p-12">
        <p className="text-[13px] md:text-[15px] tracking-wider font-semibold text-[#C7A34B]">
          WELCOME TO STADPLUS EVENT CENTRE
        </p>
        <h1 className="text-xl md:text-[22px] font-serif tracking-widest pb-4 leading-tight">
          STEP INTO THE WORLD OF EXCLUSIVITY AND ENCHANTMENT
        </h1>

        <h3 className="px-4 md:px-[30%] py-6 border-t border-[#C7A34B] text-sm md:text-base text-gray-700">
          Welcome to Stadplus, where luxury meets serenity, and every moment is a
          treasure waiting to be discovered.
        </h3>
      </div>

      {/* STAGGERED IMAGES - Column on Mobile, Row on Desktop */}
      <div className="flex flex-col md:flex-row gap-8 md:gap-16 p-6 md:p-8">
        <div className="w-full md:w-1/2 h-[400px] md:h-[600px] bg-gray-500 overflow-hidden rounded-sm">
          <picture>
            <source srcSet={HomeImg2} type="image/webp" />
            <img
              src={HomeBgImg2} 
              loading="lazy"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              alt="Interior"
            />
          </picture>
        </div>
        
        {/* Added md:mt-16 to maintain your "staggered" look only on desktop */}
        <div className="md:mt-16 w-full md:w-1/2 h-[400px] md:h-[600px] bg-gray-500 overflow-hidden rounded-sm">
          <picture>
            <img
              src={HomeBgImg3} 
              loading="lazy"
              className="object-cover w-full h-full hover:scale-105 transition-transform duration-700"
              alt="Event Setup"
            />
          </picture>
        </div>
      </div>

      {/* GALLERY PREVIEW SECTION */}
      <div className="py-12 mt-16 bg-[#F6F6F6]">
        <div className="text-center px-6">
          <p className="text-[14px] tracking-wider font-semibold text-[#C7A34B]">
            GALLERY
          </p>
          <h1 className="text-xl md:text-[22px] font-serif tracking-widest pb-4">
            A VISUAL JOURNEY OF THE RETREAT
          </h1>
          
          {/* Centered Line Fix */}
          <div className="flex justify-center mb-8">
            <hr className="w-24 border-[#c7a34b]" />
          </div>

          {/* Gallery Grid - Responsive Columns */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 p-4 md:p-8">
            <img className="w-full h-64 md:h-100 object-cover rounded-sm" src={HomeBg} alt="Gallery 1" />
            <img className="w-full h-64 md:h-100 object-cover rounded-sm" src={HomeBgImg2} alt="Gallery 2" />
            <img className="w-full h-64 md:h-100 object-cover rounded-sm" src={HomeBgImg3} alt="Gallery 3" />
          </div>

          <div className="mt-8">
            <Link to="/gallery">
              <button onClick={() => navigate("/gallery")} className="w-full md:w-auto md:px-40 rounded-lg text-white py-4 cursor-pointer bg-[#c7a34b] hover:bg-[#b08e3d] transition-colors font-medium">
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Home;