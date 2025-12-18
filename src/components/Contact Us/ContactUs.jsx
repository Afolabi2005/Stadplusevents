import React from "react";
import HomeBgImg3 from "../../assets/img2.jpg";
import AboutBgImg from "../../assets/img2.webp";
import smartphone from "../../assets/icons8-smartphone-50.png";
import emailIcon from "../../assets/icons8-email-64.png";
import locationIcon from "../../assets/icons8-location-50.png";
import Footer from "../Home/Footer";

const ContactUs = () => {
  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION */}
      <div className="relative h-[40vh] md:h-100 bg-black/50 w-full">
        <picture>
          <source srcSet={AboutBgImg} type="image/webp" />
          <img className="object-cover h-full w-full" src={HomeBgImg3} alt="Contact Hero" />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30 flex items-center justify-center">
          <h1 className="text-white tracking-tight border-2 border-white text-3xl md:text-[44px] font-normal px-8 py-4 md:max-w-100 mx-auto text-center">
            CONTACT US
          </h1>
        </div>
      </div>

      <div className="px-6 py-12 md:p-16">
        <h1 className="text-center mb-10 md:mb-16 text-[#c7a34b] font-medium text-xl md:text-[24px] italic">
          Get in touch with us!
        </h1>

        {/* CONTACT INFO CARDS - Stacked on mobile, row on desktop */}
        <div className="flex flex-col md:flex-row justify-center items-center md:items-stretch gap-8 md:gap-0">
          {/* PHONE */}
          <div className="flex flex-col items-center gap-3 py-6 px-8 md:border-r-2 border-[#c7a34b] w-full md:max-w-xs">
            <img className="w-10 md:w-12.5" src={smartphone} alt="Phone" />
            <h2 className="text-[#c7a34b] font-semibold text-lg">PHONE</h2>
            <div className="text-center text-sm md:text-base">
              <p>+234 905 222 2555</p>
              <p>+234 905 222 2555</p>
            </div>
          </div>

          {/* ADDRESS */}
          <div className="flex flex-col items-center gap-3 py-6 px-8 md:border-r-2 border-[#c7a34b] w-full md:max-w-xs">
            <img className="w-10 md:w-12.5" src={locationIcon} alt="Location" />
            <h2 className="text-[#c7a34b] font-semibold text-lg">ADDRESS</h2>
            <p className="text-sm md:text-base text-center">
              Ikeja hall - Xpress House, off Jobi Fele Way, Alausa-Ikeja
            </p>
          </div>

          {/* EMAIL */}
          <div className="flex flex-col items-center gap-3 py-6 px-8 w-full md:max-w-xs">
            <img className="w-10 md:w-12.5" src={emailIcon} alt="Email" />
            <h2 className="text-[#c7a34b] font-semibold text-lg">EMAIL</h2>
            <p className="text-sm md:text-base">stadplusevents@gmail.com</p>
          </div>
        </div>

        {/* FORM & MAP GRID */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 md:mt-24 mb-8">
          {/* FORM */}
          <div className="w-full">
            <h2 className="text-2xl font-serif mb-6 text-gray-800">Send us a message</h2>
            <form className="flex flex-col gap-4">
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-[#c7a34b]"
                type="text"
                placeholder="Your Name"
                required
              />
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-[#c7a34b]"
                type="email"
                placeholder="Your Email"
                required
              />
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-[#c7a34b]"
                type="text"
                placeholder="Subject"
              />
              <textarea
                className="p-3 border border-gray-300 rounded-lg h-40 focus:outline-[#c7a34b] resize-none"
                placeholder="Your Message"
                required
              ></textarea>
              <button className="bg-[#c7a34b] text-white py-4 rounded-lg font-semibold hover:bg-[#b5943f] transition-all duration-300 shadow-lg">
                Book A Space
              </button>
            </form>
          </div>

          {/* MAP */}
          <div className="w-full h-[400px] lg:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-inner">
            <iframe
              className="w-full h-full border-0"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.2!2d3.3!3d6.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwMzYnMDAuMCJOIDPCsDE4JzAwLjAiRQ!5e0!3m2!1sen!2sng!4v1234567890"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;