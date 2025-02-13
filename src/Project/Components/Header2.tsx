

import React, { useState, useEffect, useRef } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowDropDown } from '@material-ui/icons';

const Header2: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const drawerRef = useRef<HTMLDivElement | null>(null); // Reference to the drawer
  const navigate = useNavigate();

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  const navigateTo = (path: string, scrollTo: string) => {
    navigate(path, { state: { scrollTo } });
    setIsDrawerOpen(false); // Close the drawer if it’s open
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Handle clicks outside the drawer
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        isDrawerOpen && 
        drawerRef.current && 
        !drawerRef.current.contains(event.target as Node)
      ) {
        setIsDrawerOpen(false); // Close the drawer if clicking outside
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDrawerOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-red-900 shadow-2xl' : 'bg-red-900'
      }`}
    >
      <div className="flex justify-between items-center p-4 text-white">
        <Link to="/" className="ms-[2%] md:ms-[10%]">
          <img
            src="/assets/numeracraftlogo.png"
            alt="Numeracraft Logo"
            className="w-[40%] sm:w-[20%] md:w-[25%]"
            onContextMenu={(e) => e.preventDefault()}
        draggable="false"
          />
        </Link>
        <button className="lg:hidden" onClick={toggleDrawer}>
          <span className="text-2xl">☰</span>
        </button>
        <nav className="hidden lg:flex gap-12 me-[10%]">
          <span
            onClick={() => navigateTo("/", "home")}
            className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
          >
            Home
          </span>
          <span
            onClick={() => navigateTo("/", "about")}
            className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
          >
            About
          </span>
          <div
            className="relative hover-trigger"
            onMouseEnter={() => setIsServicesOpen(true)}
            onMouseLeave={() => setIsServicesOpen(false)}
          >
            <span onClick={() => navigateTo("/", "services")} className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer">
              Services<ArrowDropDown/>
            </span>
            {isServicesOpen && (
              <div
                className="absolute top-full w-64 left-0 bg-[#B08134] text-white p-4 rounded shadow-lg"
                style={{
                  backgroundImage: 'url("/assets/backgroundimagetopheader.png")',
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                }}
              >
                <ul className="space-y-2">
                  <li>
                  <span className="mr-2">⦿</span>
                    <span
                      onClick={() => navigateTo("/numerology", "numerology")}
                      className="hover:text-yellow-300 cursor-pointer"
                    >
                      Numerology
                    </span>
                  </li>
                  <li>
                  <span className="mr-2">⦿</span>
                    <span
                      onClick={() => navigateTo("/vastushastra", "vastu")}
                      className="hover:text-yellow-300 cursor-pointer"
                    >
                      Vastu
                    </span>
                  </li>
                  <li>
                  <span className="mr-2">⦿</span>
                    <span
                      onClick={() => navigateTo("/astrology", "astrology")}
                      className="hover:text-yellow-300 cursor-pointer"
                    >
                      Astrology
                    </span>
                  </li>
                  <li>
                  <span className="mr-2">⦿</span>
                    <span
                      onClick={() => navigateTo("/astrovastu", "astrovastu")}
                      className="hover:text-yellow-300 cursor-pointer"
                    >
                      Astro Vastu
                    </span>
                  </li>
                  <li>
                  <span className="mr-2">⦿</span>
                    <span
                      onClick={() => navigateTo("/numerovastu", "numerovastu")}
                      className="hover:text-yellow-300 cursor-pointer"
                    >
                      Numero Vastu
                    </span>
                  </li>
                  <li>
                  <span className="mr-2">⦿</span>
                    <span
                      onClick={() => navigateTo("/customizedvastu", "customize-vastu")}
                      className="hover:text-yellow-300 cursor-pointer"
                    >
                      Customize Vastu
                    </span>
                  </li>
                </ul>
              </div>
            )}
          </div>
          <span
            onClick={() => navigateTo("/", "blogs")}
            className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
          >
            Blogs
          </span>
          <span
            onClick={() => navigateTo("/", "contact")}
            className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
          >
            Contact Us
          </span>
        </nav>
      </div>

      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            ref={drawerRef} // Attach the ref to the drawer
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-y-0 left-0 z-50 bg-red-900 text-white p-6 w-1/2 sm:w-3/4"
          >
            <button className="absolute top-4 right-4" onClick={toggleDrawer}>
              ✕
            </button>
            <nav className="flex flex-col space-y-4 mt-10">
              <span
                onClick={() => navigateTo("/", "home")}
                className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
              >
                Home
              </span>
              <span
                onClick={() => navigateTo("/", "about")}
                className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
              >
                About
              </span>
              <div
                className="relative"
                onClick={() => setIsServicesOpen(!isServicesOpen)}
              >
                <span className="hover:text-yellow-400  hover:scale-110 transition-transform cursor-pointer">
                  Services<ArrowDropDown/>
                </span>
                {isServicesOpen && (
                  <div className="pl-4 mt-2">
                    <ul className="space-y-2">
                      <li>
                        <span
                          onClick={() => navigateTo("/numerology", "numerology")}
                          className="hover:text-yellow-300 cursor-pointer"
                        >
                          Numerology
                        </span>
                      </li>
                      <li>
                        <span
                          onClick={() => navigateTo("/vastushastra", "vastu")}
                          className="hover:text-yellow-300 cursor-pointer"
                        >
                          Vastu
                        </span>
                      </li>
                      <li>
                        <span
                          onClick={() => navigateTo("/astrology", "astrology")}
                          className="hover:text-yellow-300 cursor-pointer"
                        >
                          Astrology
                        </span>
                      </li>
                      <li>
                        <span
                          onClick={() => navigateTo("/astrovastu", "astrovastu")}
                          className="hover:text-yellow-300 cursor-pointer"
                        >
                          Astro Vastu
                        </span>
                      </li>
                      <li>
                        <span
                          onClick={() => navigateTo("/numerovastu", "numerovastu")}
                          className="hover:text-yellow-300 cursor-pointer"
                        >
                          Numero Vastu
                        </span>
                      </li>
                      <li>
                        <span
                          onClick={() => navigateTo("/customizedvastu", "customize-vastu")}
                          className="hover:text-yellow-300 cursor-pointer"
                        >
                          Customize Vastu
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </div>
              <span
                onClick={() => navigateTo("/", "blogs")}
                className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
              >
                Blogs
              </span>
              <span
                onClick={() => navigateTo("/", "contact")}
                className="hover:text-yellow-400 hover:scale-110 transition-transform cursor-pointer"
              >
                Contact Us
              </span>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header2;
