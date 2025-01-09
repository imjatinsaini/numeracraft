// import React, { useState } from 'react';
// import { motion } from 'framer-motion';

// const Header: React.FC = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <header className="relative">
//       {/* Navbar */}
//       <div className="flex justify-between items-center p-4 bg-red-900 text-white">
//         <img
//           src="/assets/numeracraftlogo.png"
//           alt="Numeracraft Logo"
//           className="w-[25%] sm:w-[20%] ms-[10%] md:w-[10%]"
//         />
//         <button className="lg:hidden" onClick={toggleDrawer}>
//           <span className="text-2xl">☰</span>
//         </button>
//         <nav className="hidden lg:flex gap-12 me-[10%]">
//           <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform">Home</a>
//           <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform">About</a>
//           <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform">Services</a>
//           <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform">Blogs</a>
//           <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform">Contact Us</a>
//         </nav>
//       </div>

//       {/* Drawer */}
//       {isDrawerOpen && (
//         <motion.div
//           initial={{ x: "-100%" }}
//           animate={{ x: 0 }}
//           exit={{ x: "-100%" }}
//           className="fixed inset-0 z-50 bg-red-900 text-white p-6"
//         >
//           <button className="absolute top-4 right-4" onClick={toggleDrawer}>
//             ✕
//           </button>
//           <nav className="flex flex-col space-y-4 mt-10 ">
//             <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform">Home</a>
//             <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform ">About</a>
//             <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform ">Services</a>
//             <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform ">Blogs</a>
//             <a href="#" className="hover:text-yellow-400 hover:scale-110 transition-transform ">Contact Us</a>
//           </nav>
//         </motion.div>
//       )}
//     </header>
//   );
// };

// export default Header;



// // Header.tsx
// import React, { useState } from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const Header: React.FC = () => {
//   const [isDrawerOpen, setIsDrawerOpen] = useState(false);

//   const toggleDrawer = () => {
//     setIsDrawerOpen(!isDrawerOpen);
//   };

//   return (
//     <header className="fixed top-0 left-0 right-0 z-50">
//       {/* Navbar */}
//       <div className="flex justify-between items-center p-4 bg-red-900  text-white">
//         <a href="#home">
//           <img
//             src="/assets/numeracraftlogo.png"
//             alt="Numeracraft Logo"
//             className="w-[40%] sm:w-[20%] ms-[10%] md:w-[20%]"
//           />
//         </a>
//         <button className="lg:hidden" onClick={toggleDrawer}>
//           <span className="text-2xl">☰</span>
//         </button>
//         <nav className="hidden lg:flex gap-12 me-[10%]">
//           <a href="#home" className="hover:text-yellow-400 hover:scale-110 transition-transform">Home</a>
//           <a href="#about" className="hover:text-yellow-400 hover:scale-110 transition-transform">About</a>
//           <a href="#services" className="hover:text-yellow-400 hover:scale-110 transition-transform">Services</a>
//           <a href="#blogs" className="hover:text-yellow-400 hover:scale-110 transition-transform">Blogs</a>
//           <a href="#contact" className="hover:text-yellow-400 hover:scale-110 transition-transform">Contact Us</a>
//         </nav>
//       </div>

//       {/* Drawer */}
//       <AnimatePresence>
//         {isDrawerOpen && (
//           <motion.div
//             initial={{ x: "-100%" }}
//             animate={{ x: 0 }}
//             exit={{ x: "-100%" }}
//             transition={{ duration: 0.3 }}
//             className="fixed inset-0 z-50 bg-red-900 text-white p-6"
//           >
//             <button className="absolute top-4 right-4" onClick={toggleDrawer}>
//               ✕
//             </button>
//             <nav className="flex flex-col space-y-4 mt-10 ">
//               <a href="#home" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">Home</a>
//               <a href="#about" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">About</a>
//               <a href="#services" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">Services</a>
//               <a href="#blogs" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">Blogs</a>
//               <a href="#contact" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">Contact Us</a>
//             </nav>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </header>
//   );
// };

// export default Header;


import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Header: React.FC = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) { // Adjust the threshold as needed
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

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? ' bg-red-900 shadow-2xl' : ''
      }`}
    >
      {/* Navbar */}
      <div className="flex justify-between items-center p-4 text-white">
        <a href="#home" className='ms-[10%]'>
          <img
            src="/assets/numeracraftlogo.png"
            alt="Numeracraft Logo"
            className="w-[40%] sm:w-[20%]  md:w-[20%]"
          />
        </a>
        <button className="lg:hidden" onClick={toggleDrawer}>
          <span className="text-2xl">☰</span>
        </button>
        <nav className="hidden lg:flex gap-12 me-[10%]">
          <a href="#home" className="hover:text-yellow-400 hover:scale-110 transition-transform">Home</a>
          <a href="#about" className="hover:text-yellow-400 hover:scale-110 transition-transform">About</a>
          <a href="#services" className="hover:text-yellow-400 hover:scale-110 transition-transform">Services</a>
          <a href="#blogs" className="hover:text-yellow-400 hover:scale-110 transition-transform">Blogs</a>
          <a href="#contact" className="hover:text-yellow-400 hover:scale-110 transition-transform">Contact Us</a>
        </nav>
      </div>

      {/* Drawer */}
      <AnimatePresence>
        {isDrawerOpen && (
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-50 bg-red-900 text-white p-6"
          >
            <button className="absolute top-4 right-4" onClick={toggleDrawer}>
              ✕
            </button>
            <nav className="flex flex-col space-y-4 mt-10">
              <a href="#home" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">Home</a>
              <a href="#about" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">About</a>
              <a href="#services" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">Services</a>
              <a href="#blogs" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">Blogs</a>
              <a href="#contact" onClick={toggleDrawer} className="hover:text-yellow-400 hover:scale-110 transition-transform">Contact Us</a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
