import React from "react";

const Footer = () => {
  return (
    <footer style={{ backgroundColor: "#111111", color: "white" }} className="py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-between items-center mb-6">
          <div className="mb-4 md:mb-0">
            <h1 className="text-2xl font-bold">BrandLogo</h1>
            <p className="text-sm text-gray-400">
              Creating a better experience, one step at a time.
            </p>
          </div>

          <div className="flex space-x-4">
            <a
              href="#"
              style={{ color: "#C61F1F" }}
              className="hover:opacity-80 transition"
            >
              <i className="fab fa-facebook-f text-2xl"></i>
            </a>
            <a
              href="#"
              style={{ color: "#C61F1F" }}
              className="hover:opacity-80 transition"
            >
              <i className="fab fa-twitter text-2xl"></i>
            </a>
            <a
              href="#"
              style={{ color: "#C61F1F" }}
              className="hover:opacity-80 transition"
            >
              <i className="fab fa-instagram text-2xl"></i>
            </a>
            <a
              href="#"
              style={{ color: "#C61F1F" }}
              className="hover:opacity-80 transition"
            >
              <i className="fab fa-linkedin-in text-2xl"></i>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-6">

          <div>
            <h3 className="text-lg font-bold mb-3">Quick Links</h3>
            <ul>
              <li className="mb-2">
                <a href="#" className="hover:opacity-80">
                  About Us
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-80">
                  Services
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-80">
                  Blog
                </a>
              </li>
              <li className="mb-2">
                <a href="#" className="hover:opacity-80">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-3">Contact Us</h3>
            <ul>
              <li className="mb-2">Email: support@brandlogo.com</li>
              <li className="mb-2">Phone: +123 456 7890</li>
              <li className="mb-2">Address: 123 Street, City, Country</li>
            </ul>
          </div>


          <div>
            <h3 className="text-lg font-bold mb-3">Stay Updated</h3>
            <form className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="p-2 flex-1 rounded-sm text-black"
              />
              <button
                style={{ backgroundColor: "#C61F1F", color: "white" }}
                className="px-4 py-2 rounded-sm hover:opacity-80 transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>


        <div className="border-t border-gray-700 pt-4 text-center text-sm">
          <p>&copy; {new Date().getFullYear()} BrandLogo. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
