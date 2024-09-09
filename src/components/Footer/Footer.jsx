import React from "react";
import { Facebook, Twitter, Instagram, Linkedin, Globe } from "lucide-react";
import logo from "../../../Assets/mile1-assets/logo.webp";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300  font-quattrocento">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-4">
            <img
              src={logo}
              alt="Teknolojik Lezzetler Logo"
              className="maxh-full w-40 object-cover"
            />
            <h3 className="text-xl font-semibold text-white font-satisfty">
              Teknolojik Lezzetler
            </h3>
            <p className="text-sm">
              Bringing innovation to your plate since 2024.
            </p>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Our Menu</h4>
            <ul className="space-y-2">
              {["Pizzas", "Burgers", "Salads", "Desserts", "Drinks"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-white mb-4">Company</h4>
            <ul className="space-y-2">
              {["About Us", "Careers", "Contact", "Blog", "Privacy Policy"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover:text-white transition-colors duration-200"
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold text-white mb-4 font-satisfty">
              Contact Us
            </h4>
            <form className="space-y-4 font-satisfty">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 bg-white rounded-md  "
              />
              <button
                type="submit"
                className="w-full bg-[#CE2829] text-white py-2 px-4 rounded-md "
              >
                Subscribe to Newsletter
              </button>
            </form>
            <p className="mt-4 text-sm font-satisfty">
              Phone:{" "}
              <a href="tel:+1234567890" className="hover:text-white">
                +1 (555) 555-555
              </a>
            </p>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm">
            &copy; 2024 Teknolojik Lezzetler. All rights reserved.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            {[
              { icon: Facebook, label: "Facebook" },
              { icon: Twitter, label: "Twitter" },
              { icon: Instagram, label: "Instagram" },
              { icon: Linkedin, label: "LinkedIn" },
              { icon: Globe, label: "Website" },
            ].map(({ icon: Icon, label }) => (
              <a
                key={label}
                href="#"
                className="text-gray-400 hover:text-white transition-colors duration-200"
                aria-label={label}
              >
                <Icon className="h-6 w-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
