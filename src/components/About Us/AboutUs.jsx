import React from "react";
import HomeBgImg3 from "../../assets/img2.jpg";
import AboutBgImg from "../../assets/Img2.webp";
import HomeBg from "../../assets/HomeHall.avif";
import Footer from "../Home/Footer";

const AboutUs = () => {
    const facilities = [
        {
            id: 1,
            image: "",
            title: "Spacious Banquet Hall / Auditorium"
        },
        {
            id: 2,
            image: "",
            title: "Conference & Meeting Rooms"
        },
        {
            id: 3,
            image: "",
            title: "Parking Facilities"
        },
        {
            id: 4,
            image: "",
            title: "Catering & Kitchen Services"
        },
        {
            id: 5,
            image: "",
            title: "Audio/Visual Lightning Equipments"
        },
        {
            id: 6,
            image: "",
            title: "Accomodation/ Guest House"
        }
    ]
  return (
    <div>
      <div className="relative h-100 bg-black/50 w-full">
        <picture>
          <source srcSet={AboutBgImg} type="image/webp" />
          <img className="object-cover h-100 w-full" src={HomeBgImg3} alt="" />
        </picture>
        <div className="absolute inset-0 bg-linear-to-t pt-8 pb-8 from-black/80 to-transparent">
          <h1 className="text-white tracking-tight text-[58px] font-bold text-center">
            About Us
          </h1>
          <p className="text-[16px] leading-7 font-normal mx-auto text-center text-white max-w-180">
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
      <div className="bg-white">
        <div className="mt-8">
          <h1 className="text-black tracking-tight text-[48px] pt-8 font-bold text-center >Our Facilities">
            Our Facilities
          </h1>
          <div className="grid grid-cols-2 gap-8 p-16">
            {facilities.map((item, index) => (
              <div key={index} className="flex flex-col">
                <div className="bg-gray-400 shadow-lg rounded-2xl h-80 w-full ">
                    <img src={item.image} alt="" />
                </div>
                
                <p className="text-center font-medium text-[24px] mt-4">{item.title}</p>
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
