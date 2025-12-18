import React from "react";
import HomeBgImg3 from "../../assets/img2.jpg";
import AboutBgImg from "../../assets/img2.webp";
import Footer from "../Home/Footer";

const AboutUs = () => {
  const facilities = [
    { id: 1, image: "", title: "Spacious Banquet Hall / Auditorium" },
    { id: 2, image: "", title: "Conference & Meeting Rooms" },
    { id: 3, image: "", title: "Parking Facilities" },
    { id: 4, id: 4, image: "", title: "Catering & Kitchen Services" },
    { id: 5, image: "", title: "Audio/Visual Lightning Equipments" },
    { id: 6, image: "", title: "Accomodation/ Guest House" },
  ];

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION - Responsive Height */}
      <div className="relative min-h-[550px] md:h-[500px] w-full flex items-center justify-center">
        <picture className="absolute inset-0 z-0">
          <source srcSet={AboutBgImg} type="image/webp" />
          <img
            className="object-cover w-full h-full"
            src={HomeBgImg3}
            loading="lazy"
            alt="Stadplus Interior"
          />
        </picture>

        {/* Dark Overlay with Gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-black/40 z-10" />

        {/* Content Container */}
        <div className="relative z-20 px-6 py-12 text-center max-w-5xl mx-auto">
          <h1 className="text-white tracking-tight text-4xl md:text-[58px] font-bold mb-6">
            About Us
          </h1>
          <p className="text-sm md:text-[16px] leading-relaxed md:leading-7 font-normal text-gray-200">
            Stadplus Events Centre is an Event Centre within the heart of Lagos
            i.e Ikeja. The location is perfect as it connects with every part of
            the city metropolis with easy access to the mainland, Island and
            even outside the city. With the State-of-Art facilities, Stadplus
            Events Centre offers unique hall rental services for every function
            ranging from Weddings, Birthday Celebrations, Conferences, Annual
            General Meetings, Seminars, Retreats, Religious Programmes,
            Concerts, Exhibitions etc. With uninterrupted power supply, we
            guarantee you the best experience in a secured environment and great
            ambience for your various events.
          </p>
        </div>
      </div>

      {/* FACILITIES SECTION */}
      <div className="bg-white py-12 md:py-20">
        <div className="max-w-7xl mx-auto">
          <h1 className="text-black tracking-tight text-3xl md:text-[48px] font-bold text-center mb-4">
            Our Facilities
          </h1>

          {/* Responsive Grid: 1 col on mobile, 2 on tablet, 3 on desktop */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12 p-6 md:p-16">
            {facilities.map((item, index) => (
              <div key={index} className="flex flex-col group">
                <div className="bg-gray-400 shadow-lg rounded-2xl h-64 md:h-80 w-full overflow-hidden">
                  <img
                    src={item.image}
                    alt=""
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                <p className="text-center font-semibold text-lg md:text-[22px] mt-5 px-2 text-gray-800">
                  {item.title}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
