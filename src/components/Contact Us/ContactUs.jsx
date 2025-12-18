import React, { useState, useRef } from "react"; // Added useState and useRef
import emailjs from "@emailjs/browser"; // Added EmailJS
import HomeBgImg3 from "../../assets/img2.jpg";
import AboutBgImg from "../../assets/img2.webp";
import smartphone from "../../assets/icons8-smartphone-50.png";
import emailIcon from "../../assets/icons8-email-64.png";
import locationIcon from "../../assets/icons8-location-50.png";
import Footer from "../Home/Footer";

const ContactUs = () => {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    // REPLACE THESE WITH YOUR ACTUAL EMAILJS CREDENTIALS
    const SERVICE_ID = "service_fdc3o6f";
    const TEMPLATE_ID = "template_91dcma4";
    const PUBLIC_KEY = "nswnc5vvN8iBEvAyN";

    emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, form.current, PUBLIC_KEY).then(
      (result) => {
        alert("Message sent successfully! We will get back to you soon.");
        form.current.reset();
        setLoading(false);
      },
      (error) => {
        alert("Something went wrong. Please try again.");
        setLoading(false);
      }
    );
  };

  return (
    <div className="overflow-x-hidden">
      {/* HERO SECTION - Keep your existing code */}
      <div className="relative h-[40vh] md:h-100 bg-black/50 w-full">
        <picture>
          <source srcSet={AboutBgImg} type="image/webp" />
          <img
            className="object-cover h-full w-full"
            src={HomeBgImg3}
            alt="Contact Hero"
          />
        </picture>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 to-black/30 flex items-center justify-center">
          <h1 className="text-white tracking-tight border-2 border-white text-3xl md:text-[44px] font-normal px-8 py-4 md:max-w-100 mx-auto text-center">
            CONTACT US
          </h1>
        </div>
      </div>

      <div className="px-6 py-12 md:p-16">
        {/* ... Contact Cards stay the same ... */}

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mt-16 md:mt-24 mb-8">
          {/* FORM SECTION */}
          <div className="w-full">
            <h2 className="text-2xl font-serif mb-6 text-gray-800">
              Send us a message
            </h2>

            {/* 1. Added ref and onSubmit */}
            <form
              ref={form}
              onSubmit={sendEmail}
              className="flex flex-col gap-4"
            >
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-[#c7a34b]"
                type="text"
                name="user_name" // 2. Ensure name matches your EmailJS template
                placeholder="Your Name"
                required
              />
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-[#c7a34b]"
                type="email"
                name="user_email" // 2. Matches EmailJS template
                placeholder="Your Email"
                required
              />
              <input
                className="p-3 border border-gray-300 rounded-lg focus:outline-[#c7a34b]"
                type="text"
                name="subject"
                placeholder="Subject"
              />
              <textarea
                className="p-3 border border-gray-300 rounded-lg h-40 focus:outline-[#c7a34b] resize-none"
                name="message" // 2. Matches EmailJS template
                placeholder="Your Message"
                required
              ></textarea>

              <button
                type="submit"
                disabled={loading}
                className={`bg-[#c7a34b] text-white py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg ${
                  loading
                    ? "opacity-50 cursor-not-allowed"
                    : "hover:bg-[#b5943f]"
                }`}
              >
                {loading ? "Sending..." : "Book A Space"}
              </button>
            </form>
          </div>

          {/* MAP SECTION - Keep your existing code */}
          <div className="w-full h-[400px] lg:h-auto min-h-[400px] rounded-xl overflow-hidden shadow-inner">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.153034335495!2d3.3591864735050123!3d6.627906421944318!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b9348c834a9a7%3A0xfb2d0f4a292ec7d9!2sSTADPLUS%20EVENTS%20CENTRE!5e0!3m2!1sen!2sng!4v1766056735097!5m2!1sen!2sng"
              width="600"
              height="450"
              style="border:0;"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactUs;
