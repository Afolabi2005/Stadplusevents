import React from "react";
import Navbar from "../Home/Navbar";
import Footer from "../Home/Footer";

const Gallery = () => {
    const galleries = [
        {
            id: 1,
            image: "",
            title: ""
        },
        {
            id: 2,
            image: "",
            title: ""
        },
        {
            id: 3,
            image: "",
            title: ""
        },
        {
            id: 4,
            image: "",
            title: ""
        },
        {
            id: 5,
            image: "",
            title: ""
        },
        {
            id: 6,
            image: "",
            title: ""
        },
        {
            id: 7,
            image: "",
            title: ""
        },
        {
            id: 8,
            image: "",
            title: ""
        },
        {
            id: 9,
            image: "",
            title: ""
        }
    ]
  return (
    <div>
      <div className="text-center p-8">
        <p className="text-[15px] tracking-wider font-semibold text-[#C7A34B]">
          EXPLORE THE PHOTOS AND VIDEOS OF STADPLUS
        </p>
        <h1 className="text-[22px] font-serif tracking-widest pb-4">
          A VISUAL JOURNEY
        </h1>
        <hr className="w-[20%] absolute left-[40%] right-[40%] text-[#c7a34b]" />
        <div className="grid grid-cols-1 md:grid-cols-3 justify-around gap-4 px md: py-8 md:p-8">
          {galleries.map((gallery) => (
            <div className="w-full h-80 bg-gray-400" key={gallery.id}>
              <img src={gallery.image} alt={gallery.title} />
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Gallery;
