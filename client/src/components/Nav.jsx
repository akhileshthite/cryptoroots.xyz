import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Transition } from "@headlessui/react";
import Logo from "../images/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <nav className="bg-white shadow-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center ml-8">
              <span className="flex title-font font-medium items-center text-gray-900 md:mb-0">
                <img
                  src={Logo}
                  alt="Logo"
                  className="w-12 h-12 p-1 rounded-full"
                />
                <span className="ml-2 text-xl">CryptoRoots</span>
              </span>
              <div className="md:mr-auto md:ml-4 md:py-4 md:pl-4 md:border-l md:border-gray-400	flex flex-wrap items-center text-base justify-center" />
              <div className="hidden md:block">
                <div className="flex items-baseline space-x-4">
                  <Link to="/">
                    <button className="text-lg text-green-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
                      Home
                    </button>
                  </Link>
                  <a
                    href="#about"
                    className="text-lg text-green-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
                  >
                    About
                  </a>
                  <a
                    href="#faq"
                    className="text-lg text-green-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
                  >
                    FAQ
                  </a>
                  {/* <Link to="/support">
                    <button
                      className="text-lg text-green-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium"
                    >
                      Support us
                    </button>
                  </Link> */}
                  <Link to="/receipts">
                    <button className="text-lg text-green-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
                      Donation receipts
                    </button>
                  </Link>
                  <Link to="/mytreesscreen">
                    <button className="text-lg text-green-700 hover:bg-gray-100 px-3 py-2 rounded-md font-medium">
                      My trees
                    </button>
                  </Link>
                </div>
              </div>
            </div>
            <span className="md:ml-0 sm:ml-0 ml-14 inline-flex items-center animation-ping text-md text-purple-600 p-1 border border-purple-500 bg-purple-200 rounded-md">
              Beta (testnet)
            </span>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-gray-300 inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden ml-8" id="mobile-menu">
              <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <Link to="/">
                  <button className="text-green-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                    Home
                  </button>
                </Link>
                <a
                  href="#about"
                  className="text-green-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                >
                  About
                </a>
                <a
                  href="#faq"
                  className="text-green-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                >
                  FAQ
                </a>
                {/* <Link to="/support">
                <button className="text-green-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium"
                >
                  Support us
                </button>
              </Link> */}
                <Link to="/receipts">
                  <button className="text-green-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                    Donation receipts
                  </button>
                </Link>
                <Link to="/mytreesscreen">
                  <button className="text-green-700 hover:bg-gray-100 block px-3 py-2 rounded-md text-base font-medium">
                    My trees
                  </button>
                </Link>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}
export default Navbar;
