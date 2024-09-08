import React from "react";

const Footer = () => (
  <footer className="footer bg-gray-900 text-white p-8 mt-16">
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
      <div className="footer-section">
        <h2 className="text-lg font-semibold mb-4">Alish Store</h2>
        <p>© 2003 Alish Store. All rights reserved.</p>
      </div>
      <div className="footer-section">
        <h2 className="text-lg font-semibold mb-4">Contact Us</h2>
        <ul className="space-y-2">
          <li>
            Email:{" "}
            <a
              href="mailto:alishstore.np@gmail.com"
              className="hover:underline"
            >
              alishstore.np@gmail.com
            </a>
          </li>
          <li>
            Phone:{" "}
            <a href="tel:+9779807936169" className="hover:underline">
              +977 9807936169
            </a>
          </li>
          <li>Address: Pashupatinagar -4, Illam, Nepal</li>
        </ul>
      </div>
      <div className="footer-section">
        <h2 className="text-lg font-semibold mb-4">Follow Us</h2>
        <ul className="flex space-x-4">
          <li>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-facebook"></i> Facebook
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-instagram"></i> Instagram
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-400">
              <i className="fab fa-twitter"></i> Twitter
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div className="text-center mt-8 text-gray-400">
      <p>Powered by Alish Store Team. Designed with care.</p>
    </div>
  </footer>
);

export default Footer;
