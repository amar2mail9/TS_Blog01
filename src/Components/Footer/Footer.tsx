import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white py-12 mt-16">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Logo Section */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-semibold text-indigo-500">
              POLY<span className="text-blue-500">TECHUB</span>
            </h2>
            <p className="text-gray-400 mt-2">
              Your technology hub for the future.
            </p>
          </div>

          {/* Navigation Links */}
          <div className="mb-8 md:mb-0">
            <ul className="flex flex-col md:flex-row gap-6 md:gap-12">
              <li>
                <a
                  href="/"
                  className="text-gray-400 hover:text-indigo-500 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/about-us"
                  className="text-gray-400 hover:text-indigo-500 transition duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/blogs"
                  className="text-gray-400 hover:text-indigo-500 transition duration-300"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/contact-us"
                  className="text-gray-400 hover:text-indigo-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Social Media Links */}
          <div className="flex gap-6">
            <a
              href="#"
              className="text-gray-400 hover:text-blue-600 transition duration-300"
            >
              <FaFacebookF size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-400 transition duration-300"
            >
              <FaTwitter size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-pink-600 transition duration-300"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-blue-700 transition duration-300"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-sm text-gray-400">
            &copy; {new Date().getFullYear()} POLYTECHUB. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
