

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="grid grid-cols-2 gap-10 sm:gap-25 sm:grid-cols-3 ml-80">
            {/* Resources Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-green-800 uppercase dark:text-white">
                Resources
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="https://www.nike.com/" className="hover:underline">
                    NIKE
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.adidas.com/us"
                    className="hover:underline"
                  >
                    ADIDAS
                  </a>
                </li>
              </ul>
            </div>

            {/* Follow us Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-green-800 uppercase dark:text-white">
                Follow us
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a
                    href="https://www.instagram.com/"
                    className="hover:underline"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/"
                    className="hover:underline"
                  >
                    Facebook
                  </a>
                </li>
              </ul>
            </div>

            {/* Legal Section */}
            <div>
              <h2 className="mb-6 text-sm font-semibold text-green-800 uppercase dark:text-white">
                Legal
              </h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Horizontal Line */}
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />

        {/* Copyright Section */}
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
            © 2023{" "}
            <a  className="hover:underline">
              BestTeam™
            </a>
            . All Rights Reserved.
          </span>

          {/* Social Media Icons */}
          <div className="flex mt-4 sm:justify-center sm:mt-0">
            {/* Add your social media links and icons here */}
          </div>
        </div>
      </div>
    </footer>

    
  );}
export default Footer;