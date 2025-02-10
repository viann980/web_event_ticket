"use client";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="relative">
        <div className="bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Column 1: Logo */}
              <div className="md:w-1/4 flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <span className="text-xl sm:text-2xl font-bold">Unipi HMSE.</span>
                </Link>
              </div>

              {/* Column 2: Desktop Menu - Centered */}
              <div className="hidden md:flex flex-1 justify-center">
                <div className="flex items-center space-x-8">
                  <Link
                    href="/"
                    className={`transition-colors ${
                      isActive('/') 
                        ? 'text-orange-400 font-bold' 
                        : 'text-gray-800 hover:text-gray-900'
                    }`}
                  >
                    Home
                  </Link>
                  <Link
                    href="/events"
                    className={`transition-colors ${
                      isActive('/events')
                        ? 'text-orange-400 font-bold'
                        : 'text-gray-800 hover:text-gray-900'
                    }`}
                  >
                    Event
                  </Link>
                  <Link
                    href="/blog"
                    className={`transition-colors ${
                      isActive('/blog')
                        ? 'text-orange-400 font-bold'
                        : 'text-gray-800 hover:text-gray-900'
                    }`}
                  >
                    Blog
                  </Link>
                  <Link
                    href="/about"
                    className={`transition-colors ${
                      isActive('/about')
                        ? 'text-orange-400 font-bold'
                        : 'text-gray-800 hover:text-gray-900'
                    }`}
                  >
                    About Us
                  </Link>
                </div>
              </div>

              {/* Column 3: Register Button and Mobile Menu */}
              <div className="md:w-1/4 flex justify-end items-center space-x-4">
                <div className="hidden md:flex items-center space-x-4">
                  <Link
                    href="/login"
                    className="border-2 border-green-500 text-green-500 px-6 py-1.5 rounded-lg hover:bg-green-500 hover:text-white transition-colors"
                  >
                    Login
                  </Link>
                  <Link
                    href="/daftar"
                    className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Daftar
                  </Link>
                </div>
                {/* Mobile Menu Button */}
                <div className="flex md:hidden">
                  <button
                    className="text-gray-800 hover:text-gray-900 focus:outline-none p-2"
                    onClick={toggleMenu}
                    aria-label="Toggle menu"
                  >
                    <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'} text-xl`}></i>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="absolute w-full bg-white/80 backdrop-blur-sm shadow-lg md:hidden">
            <div className="container mx-auto px-4">
              <div className="py-4 space-y-3">
                <Link
                  href="/"
                  className={`block transition-colors px-4 py-2 hover:bg-white/50 rounded-lg ${
                    isActive('/')
                      ? 'text-orange-400 font-bold'
                      : 'text-gray-800 hover:text-gray-900'
                  }`}
                  onClick={toggleMenu}
                >
                  Home
                </Link>
                <Link
                  href="/events"
                  className={`block transition-colors px-4 py-2 hover:bg-white/50 rounded-lg ${
                    isActive('/events')
                      ? 'text-orange-400 font-bold'
                      : 'text-gray-800 hover:text-gray-900'
                  }`}
                  onClick={toggleMenu}
                >
                  Event
                </Link>
                <Link
                  href="/blog"
                  className={`block transition-colors px-4 py-2 hover:bg-white/50 rounded-lg ${
                    isActive('/blog')
                      ? 'text-orange-400 font-bold'
                      : 'text-gray-800 hover:text-gray-900'
                  }`}
                  onClick={toggleMenu}
                >
                  Blog
                </Link>
                <Link
                  href="/about"
                  className={`block transition-colors px-4 py-2 hover:bg-white/50 rounded-lg ${
                    isActive('/about')
                      ? 'text-orange-400 font-bold'
                      : 'text-gray-800 hover:text-gray-900'
                  }`}
                  onClick={toggleMenu}
                >
                  About Us
                </Link>
                <div className="px-4 py-2 space-y-3">
                  <Link
                    href="/login"
                    className="block border-2 border-green-500 text-green-500 px-6 py-1.5 rounded-lg hover:bg-green-500 hover:text-white transition-colors text-center"
                    onClick={toggleMenu}
                  >
                    Login
                  </Link>
                  <Link
                    href="/daftar"
                    className="block bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition-colors text-center"
                    onClick={toggleMenu}
                  >
                    Daftar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
