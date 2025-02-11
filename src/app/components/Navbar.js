"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Cookies from "js-cookie";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [user, setUser] = useState(null);
  const pathname = usePathname();
  const router = useRouter();

  const isDashboard = pathname.startsWith('/dashboard');

  useEffect(() => {
    // Check authentication status from both localStorage and cookies
    const userStr = localStorage.getItem('user') || Cookies.get('user');
    if (userStr) {
      try {
        setUser(JSON.parse(userStr));
      } catch (error) {
        console.error('Error parsing user data:', error);
      }
    }
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isActive = (path) => {
    return pathname === path;
  };

  const handleLogout = () => {
    // Clear both localStorage and cookies
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    Cookies.remove('token');
    Cookies.remove('user');
    
    setUser(null);
    router.push('/');
  };

  // Public menu items - only visible when logged out
  const publicMenuItems = [
    { href: '/', label: 'Home' },
    { href: '/events', label: 'Events' },
    { href: '/blog', label: 'Blog' },
    { href: '/about', label: 'About Us' },
  ];

  // Private menu items - only visible when logged in
  const getPrivateMenuItems = () => {
    if (!user) return [];

    // Base items that are always shown
    const baseItems = [
      { href: '/', label: 'Home' },
      { href: '/events', label: 'Events' },
      { href: '/blog', label: 'Blog' },
      { href: '/about', label: 'About Us' },
    ];

    // Dashboard items based on role
    const dashboardItems = user.role === 'admin' ? [
      { href: '/dashboard/admin/reports', label: 'Reports' },
      { href: '/dashboard/events', label: 'Manage Events' },
      { href: '/dashboard/admin/payments', label: 'Payments' },
    ] : [
      { href: '/dashboard/events', label: 'My Events' },
      { href: '/dashboard/payments', label: 'My Payments' },
    ];

    // Return all items with a separator
    return [
      ...baseItems,
      { type: 'separator' }, // This will be rendered as a separator
      ...dashboardItems
    ];
  };

  const privateMenuItems = getPrivateMenuItems();

  return (
    <nav className="fixed w-full top-0 z-50">
      <div className="relative">
        <div className="bg-white/30 backdrop-blur-sm">
          <div className="container mx-auto px-4">
            <div className="flex justify-between items-center h-16">
              {/* Logo */}
              <div className="md:w-1/4 flex-shrink-0">
                <Link href="/" className="flex items-center">
                  <span className="text-xl sm:text-2xl font-bold">Unipi HMSE.</span>
                </Link>
              </div>

              {/* Desktop Menu - Centered */}
              <div className="hidden md:flex flex-1 justify-center">
                <div className="flex items-center space-x-8">
                  {/* Show public menu only when logged out */}
                  {!user && (
                    <div className="flex items-center space-x-8">
                      {publicMenuItems.map((item) => (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`transition-colors ${
                            isActive(item.href)
                              ? 'text-orange-400 font-bold'
                              : 'text-gray-800 hover:text-gray-900'
                          }`}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  )}

                  {/* Private Menu Items */}
                  {user && (
                    <div className="flex items-center space-x-8">
                      {privateMenuItems.map((item, index) => (
                        item.type === 'separator' ? (
                          <span key={`separator-${index}`} className="text-gray-300">|</span>
                        ) : (
                          <Link
                            key={item.href}
                            href={item.href}
                            className={`transition-colors ${
                              isActive(item.href)
                                ? 'text-orange-400 font-bold'
                                : 'text-gray-800 hover:text-gray-900'
                            }`}
                          >
                            {item.label}
                          </Link>
                        )
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Auth Buttons/User Menu */}
              <div className="hidden md:flex md:w-1/4 justify-end items-center space-x-4">
                {user ? (
                  <div className="flex items-center space-x-4">
                    <span className="text-sm text-gray-700">
                      Hi, {user.name}
                    </span>
                    <button
                      onClick={handleLogout}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-lg transition-colors"
                    >
                      Logout
                    </button>
                  </div>
                ) : (
                  <>
                    <Link
                      href="/login"
                      className={`transition-colors ${
                        isActive('/login')
                          ? 'text-orange-400 font-bold'
                          : 'text-gray-800 hover:text-gray-900'
                      }`}
                    >
                      Login
                    </Link>
                    <Link
                      href="/daftar"
                      className="bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                    >
                      Daftar
                    </Link>
                  </>
                )}
              </div>

              {/* Mobile menu button */}
              <div className="md:hidden flex items-center">
                <button
                  onClick={toggleMenu}
                  className="text-gray-800 hover:text-gray-900 focus:outline-none"
                >
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    {isMenuOpen ? (
                      <path d="M6 18L18 6M6 6l12 12" />
                    ) : (
                      <path d="M4 6h16M4 12h16M4 18h16" />
                    )}
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="container mx-auto px-4 py-4">
              <div className="flex flex-col space-y-4">
                {/* Show public menu only when logged out */}
                {!user && (
                  <div className="space-y-4">
                    {publicMenuItems.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className={`block transition-colors ${
                          isActive(item.href)
                            ? 'text-orange-400 font-bold'
                            : 'text-gray-800 hover:text-gray-900'
                        }`}
                        onClick={() => setIsMenuOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}

                {/* Private Mobile Menu Items */}
                {user && (
                  <div className="space-y-4">
                    {privateMenuItems.map((item, index) => (
                      item.type === 'separator' ? (
                        <div key={`separator-${index}`} className="border-t border-gray-200 my-2"></div>
                      ) : (
                        <Link
                          key={item.href}
                          href={item.href}
                          className={`block transition-colors ${
                            isActive(item.href)
                              ? 'text-orange-400 font-bold'
                              : 'text-gray-800 hover:text-gray-900'
                          }`}
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      )
                    ))}
                  </div>
                )}

                {/* Mobile Auth Section */}
                <div className="pt-4 border-t">
                  {user ? (
                    <div className="space-y-4">
                      <div className="text-sm text-gray-700">
                        Hi, {user.name}
                      </div>
                      <button
                        onClick={() => {
                          handleLogout();
                          setIsMenuOpen(false);
                        }}
                        className="w-full bg-red-500 text-white px-4 py-2 rounded-lg hover:bg-red-600 transition-colors"
                      >
                        Logout
                      </button>
                    </div>
                  ) : (
                    <div className="space-y-4">
                      <Link
                        href="/login"
                        className="block text-center text-gray-800 hover:text-gray-900"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Login
                      </Link>
                      <Link
                        href="/daftar"
                        className="block text-center bg-orange-500 text-white px-4 py-2 rounded-lg hover:bg-orange-600 transition-colors"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        Daftar
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
