import React from "react";
import { useSelector } from "react-redux";
// import './d.css'
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaTumblr,
} from "react-icons/fa";
const Dashboard = () => {
  const images = [
    "https://i.ibb.co.com/vxFkdXfM/2-FB210-C1-C459-4257-8445-238-BF14-C08-B1-1-105-c.jpg", // top row
    "https://i.ibb.co.com/vxFkdXfM/2-FB210-C1-C459-4257-8445-238-BF14-C08-B1-1-105-c.jpg", // top row
    "https://i.ibb.co.com/vxFkdXfM/2-FB210-C1-C459-4257-8445-238-BF14-C08-B1-1-105-c.jpg", // top row
    "https://i.ibb.co.com/vxFkdXfM/2-FB210-C1-C459-4257-8445-238-BF14-C08-B1-1-105-c.jpg", // top row
    "https://i.ibb.co.com/vxFkdXfM/2-FB210-C1-C459-4257-8445-238-BF14-C08-B1-1-105-c.jpg", // top row
    "https://i.ibb.co.com/vxFkdXfM/2-FB210-C1-C459-4257-8445-238-BF14-C08-B1-1-105-c.jpg", // top row
    "https://i.ibb.co.com/vxFkdXfM/2-FB210-C1-C459-4257-8445-238-BF14-C08-B1-1-105-c.jpg", // top row
    "https://i.ibb.co.com/vxFkdXfM/2-FB210-C1-C459-4257-8445-238-BF14-C08-B1-1-105-c.jpg", // top row
  ];
  const user = useSelector((state) => state.auth.user);
  console.log(user);
  return (
    // <div className="grid grid-cols-4 gap-2.5 w-full max-w-7xl mx-auto bg-black p-2.5">
    //   <div className="bg-white border-2 border-white h-40"></div>
    //   <div className="bg-white border-2 border-white h-40"></div>
    //   <div className="bg-white border-2 border-white h-40"></div>
    //   <div className="bg-white border-2 border-white h-40"></div>
    //   <div className="bg-white border-2 border-white h-40 col-span-2"></div>
    //   <div className="bg-white border-2 border-white h-40"></div>
    //   <div className="bg-white border-2 border-white h-40"></div>
    //   <div className="bg-white border-2 border-white h-40"></div>
    // </div>
    // <div className="min-h-screen bg-white flex flex-col items-center justify-center p-4 space-y-3">
    //   {/* Top Row */}
    //   <div className="flex flex-wrap w-full max-w-7xl gap-2 md:gap-3">
    //     <div className="flex-[2] sm:flex-[2] md:flex-[2] lg:flex-[2.4]">
    //       <img
    //         src={images[0]}
    //         alt="pic1"
    //         className="w-full h-28 md:h-40 lg:h-56 object-cover rounded-lg"
    //       />
    //     </div>
    //     <div className="flex-[4] sm:flex-[4] md:flex-[4] lg:flex-[4] ">
    //       <img
    //         src={images[1]}
    //         alt="pic2"
    //         className="w-full h-28 md:h-40 lg:h-56 object-cover rounded-lg"
    //       />
    //     </div>
    //     <div className="flex-[4] sm:flex-[4] md:flex-[4] lg:flex-[4] ">
    //       <img
    //         src={images[2]}
    //         alt="pic3"
    //         className="w-full h-28 md:h-40 lg:h-56 object-cover rounded-lg"
    //       />
    //     </div>
    //     <div className="flex-[2] sm:flex-[2] md:flex-[2] lg:flex-[2.4] ">
    //       <img
    //         src={images[3]}
    //         alt="pic4"
    //         className="w-full h-28 md:h-40 lg:h-56 object-cover rounded-lg"
    //       />
    //     </div>
    //   </div>

    //   {/* Bottom Row */}
    //   <div className="flex flex-wrap w-full max-w-7xl  gap-2 md:gap-3">
    //     <div className="flex-[2.5] sm:flex-[3] md:flex-[2.5] lg:flex-[2.8] ">
    //       <img
    //         src={images[4]}
    //         alt="pic5"
    //         className="w-full h-28 md:h-40 lg:h-56 object-cover rounded-lg"
    //       />
    //     </div>
    //     <div className="flex-[4] sm:flex-[4] md:flex-[4] lg:flex-[3.8] ">
    //       <img
    //         src={images[5]}
    //         alt="pic6"
    //         className="w-full h-28 md:h-40 lg:h-56 object-cover rounded-lg"
    //       />
    //     </div>
    //     <div className="flex-[4] sm:flex-[4] md:flex-[4] lg:flex-[3.8] ">
    //       <img
    //         src={images[6]}
    //         alt="pic7"
    //         className="w-full h-28 md:h-40 lg:h-56 object-cover rounded-lg"
    //       />
    //     </div>
    //     <div className="flex-[1.5] sm:flex-[2] md:flex-[1.5] lg:flex-[2] ">
    //       <img
    //         src={images[7]}
    //         alt="pic8"
    //         className="w-full h-28 md:h-40 lg:h-56 object-cover rounded-lg"
    //       />
    //     </div>
    //   </div>
    // </div>
    <div className="bg-gray-50">
      {/* Call To Action */}
      <div className="max-w-[1240px] mx-auto px-6 py-12">
        <div className="bg-[#FF006A] text-white rounded-2xl flex flex-col items-center justify-center text-center p-12 h-[480px]">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Ready To Book Your Next <br /> Event Pro?
          </h2>
          <p className="mb-6 text-xl">
            Get a price in seconds and secure your perfect host today.
          </p>
          <button className="bg-white text-[#FF006A] font-medium px-6 py-2 rounded-full hover:bg-gray-100 transition">
            Get An Instant Quote
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-12 border-t border-gray-200 h-[711px]">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <h3 className="font-bold text-lg flex items-center gap-2 mb-3">
              <span role="img" aria-label="logo">
                🧑‍💼
              </span>
              Hunky Butler Service
            </h3>
            <p className="text-sm text-gray-600 mb-4">
              Our Platform Simplifies Event Staffing By Connecting Hosts With
              Verified Professionals and Seamless Tools For Unforgettable
              Experiences.
            </p>
            <p className="text-sm text-gray-800">
              📧 <span className="underline">info@hunkybutlerserv.com</span>
            </p>
            <p className="text-sm text-gray-800">📞 + (907) 555-0101</p>
            <div className="flex gap-4 mt-4 text-gray-600 text-lg">
              <FaFacebookF className="cursor-pointer hover:text-pink-500" />
              <FaTwitter className="cursor-pointer hover:text-pink-500" />
              <FaInstagram className="cursor-pointer hover:text-pink-500" />
              <FaYoutube className="cursor-pointer hover:text-pink-500" />
              <FaTumblr className="cursor-pointer hover:text-pink-500" />
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-3">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Blog</li>
              <li>About Us</li>
              <li>Contact</li>
              <li>Review</li>
              <li>Services</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3">Legal</h4>
            <ul className="space-y-2 text-sm text-gray-600">
              <li>Privacy Policy</li>
              <li>Terms Of Services</li>
              <li>Cancellation Policy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold mb-3">
              Keep Up With The Latest Update
            </h4>
            <p className="text-sm text-gray-600 mb-4">
              Join Our Newsletter To Stay Up-to-Date On Features And Releases.
            </p>
            <div className="flex items-center gap-2">
              <input
                type="email"
                placeholder="Enter Your Email"
                className="flex-1 px-4 py-2 rounded-full border border-gray-300 focus:outline-none text-sm"
              />
              <button className="bg-pink-500 text-white px-5 py-2 rounded-full text-sm hover:bg-pink-600 transition">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              By Subscribing You Agree To Our{" "}
              <span className="text-pink-500 cursor-pointer">
                Privacy Policy
              </span>
            </p>
          </div>
        </div>

        <div className="text-center mt-8 text-gray-500 text-sm">
          © 2025 Hunky butler serv. All Rights Reserved.
        </div>
      </footer>
    </div>
  );
};

export default Dashboard;
