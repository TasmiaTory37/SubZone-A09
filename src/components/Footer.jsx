import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
    <footer className="bg-gray-950 text-white py-10 px-4 md:px-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">

        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-purple-400">SubZone</h2>
          <p className="text-sm mt-2">All your subscriptions—Netflix, Prime Video, ChatGPT Plus & more—in one place.</p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Quick Links</h3>
          <ul className="text-sm space-y-1">
            <li><a href="/terms" className="hover:text-purple-300">Terms & Conditions</a></li>
            <li><a href="/privacy" className="hover:text-purple-300">Privacy Policy</a></li>
            <li><a href="/faq" className="hover:text-purple-300">FAQs</a></li>
            <li><a href="/contact" className="hover:text-purple-300">Contact</a></li>
          </ul>
        </div>

        {/* Social & Newsletter */}
        <div>
          <h3 className="text-lg font-semibold mb-3">Connect with Us</h3>
          <div className="flex justify-center md:justify-start gap-4 text-xl mb-3">
            <a href="#"><FaFacebook /></a>
            <a href="#"><FaTwitter /></a>
            <a href="#"><FaInstagram /></a>
            <a href="#"><FaYoutube /></a>
          </div>
          <p className="text-xs">Stay updated on new subscription offers and bundles.</p>
        </div>
      </div>

      <div className="mt-10 border-t border-gray-700 pt-4 text-center text-xs text-gray-400">
        © {new Date().getFullYear()} SubZone. All rights reserved.
      </div>
    </footer>
  






            
        </div>
    );
};

export default Footer;