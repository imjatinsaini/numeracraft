// import React from 'react';
// import { motion } from 'framer-motion';

// const Banner: React.FC = () => {
//   return (
//     <div
//       className="relative h-[500px] flex items-center justify-center bg-cover bg-center text-white"
//       style={{ backgroundImage: "url('/assets/bannerbg.png')" }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 text-center"
//       >
//         <h1 className="md:text-4xl text-xl text-orange-300 font-bold">Welcome to </h1>
//         <h1 className="md:text-5xl text-2xl font-serif">The Numera Craft</h1>
//         <button className="mt-4 px-6 py-2 bg-red-500 text-white font-serif rounded-full">
//           Book A Consultation
//         </button>
//       </motion.div>

//       {/* Overlay Images */}
//       <motion.img
//         src="/assets/bannerbgcircle1.png"
//         alt="Circle 1"
//         className="absolute top-[3%] right-[17%] w-[35%] md:w-[15%] object-cover"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//       />
//       <motion.img
//         src="/assets/bannerbgcircle2.png"
//         alt="Circle 2"
//         className="absolute top-[35%] right-[10%] w-[35%] md:w-[15%] object-cover"
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//       />
//     </div>
//   );
// };

// export default Banner;


// import React from 'react';
// import { motion } from 'framer-motion';

// const Banner: React.FC = () => {
//   return (
//     <div
//       className="relative h-[500px] flex items-center justify-center bg-cover bg-center text-white"
//       style={{ backgroundImage: "url('/assets/bannerbg.png')" }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10 text-center " 
//       >
//         <h1 className="md:text-4xl text-xl text-orange-300 font-bold">Welcome to</h1>
//         <h1 className="md:text-5xl text-2xl font-serif">The Numera Craft</h1>
        
//         {/* Updated Button */}
//         <a
//           href="#book-consultation"
//           className="mt-4 px-6 py-2 bg-red-500 text-white font-serif rounded-full inline-block text-center"
//         >
//           Book A Consultation
//         </a>
//       </motion.div>

//       {/* Overlay Images */}
//       <motion.img
//         src="/assets/bannerbgcircle1.png"
//         alt="Circle 1"
//         className="absolute top-[3%] right-[17%] w-[35%] md:w-[15%] object-cover"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//       />
//       <motion.img
//         src="/assets/bannerbgcircle2.png"
//         alt="Circle 2"
//         className="absolute top-[35%] right-[10%] w-[35%] md:w-[15%] object-cover"
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//       />
//     </div>
//   );
// };

// export default Banner;

// import React from 'react';
// import { motion } from 'framer-motion';

// const Banner: React.FC = () => {
//   return (
//     <div
//       className="relative  h-[300px] md:h-[500px] flex items-center bg-cover bg-center text-white"
//       style={{ backgroundImage: "url('/assets/bannerbg.png')" }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10"
//         style={{ marginLeft: "10%", marginTop: "5%" }}
//       >
//         <h1 className="md:text-4xl text-xl mt-[20%] md:mt-[0%] text-orange-300 font-bold">Welcome to</h1>
//         <h1 className="md:text-6xl text-2xl font-serif">The Numera Craft</h1>
        
//         {/* Updated Button */}
//         <a
//           href="#book-consultation"
//           className="mt-4 px-6 py-2 bg-[#B81626] text-2xl text-white font-serif rounded-full inline-block text-center"
//         >
//           Book A Consultation
//         </a>
//       </motion.div>

//       {/* Overlay Images */}
//       <motion.img
//         src="/assets/bannerbgcircle1.png"
//         alt="Circle 1"
//         className="absolute top-[3%] right-[17%] w-[35%] md:w-[15%] object-cover"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//       />
//       <motion.img
//         src="/assets/bannerbgcircle2.png"
//         alt="Circle 2"
//         className="absolute top-[35%] right-[10%] w-[35%] md:w-[15%] object-cover"
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//       />
//     </div>
//   );
// };

// export default Banner;





// import React from 'react';
// import { motion } from 'framer-motion';

// const Banner: React.FC = () => {
//   // Generate random star positions and sizes
//   const generateStars = (count: number) => {
//     const stars = [];
//     for (let i = 0; i < count; i++) {
//       stars.push({
//         id: i,
//         size: Math.random() * 3 + 1, // Random size between 1px and 4px
//         top: Math.random() * 100, // Random position (percentage)
//         left: Math.random() * 100, // Random position (percentage)
//       });
//     }
//     return stars;
//   };

//   const stars = generateStars(200); // Generate 50 stars

//   return (
//     <div
//       className="relative h-[300px] md:h-[500px] flex items-center bg-cover bg-center text-white"
//       style={{ backgroundImage: "url('/assets/bannerbg.png')" }}
//     >
//       <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

//       {/* Animated stars */}
//       {stars.map((star) => (
//         <motion.div
//           key={star.id}
//           className="absolute bg-white rounded-full"
//           style={{
//             width: `${star.size}px`,
//             height: `${star.size}px`,
//             top: `${star.top}%`,
//             left: `${star.left}%`,
//             boxShadow: "0 0 6px 2px rgba(255, 255, 255, 0.8)",
//           }}
//           animate={{ opacity: [0.3, 1, 0.3] }}
//           transition={{
//             duration: Math.random() * 3 + 2, // Random duration between 2s and 5s
//             repeat: Infinity,
//             ease: "easeInOut",
//           }}
//         />
//       ))}

//       <motion.div
//         initial={{ opacity: 0, y: 50 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 1 }}
//         className="relative z-10"
//         style={{ marginLeft: "10%", marginTop: "5%" }}
//       >
//         <h1 className="md:text-4xl text-xl mt-[20%] md:mt-[0%] text-orange-300 font-bold">Welcome to</h1>
//         <h1 className="md:text-6xl text-2xl font-serif">The Numera Craft</h1>

//         <a
//           href="#book-consultation"
//           className="mt-4 px-6 py-2 bg-[#B81626] text-2xl text-white font-serif rounded-full inline-block text-center"
//         >
//           Book A Consultation
//         </a>
//       </motion.div>

//       {/* Overlay Images */}
//       <motion.img
//         src="/assets/bannerbgcircle1.png"
//         alt="Circle 1"
//         className="absolute top-[3%] right-[17%] w-[35%] md:w-[15%] object-cover"
//         animate={{ rotate: 360 }}
//         transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
//       />
//       <motion.img
//         src="/assets/bannerbgcircle2.png"
//         alt="Circle 2"
//         className="absolute top-[35%] right-[10%] w-[35%] md:w-[15%] object-cover"
//         animate={{ rotate: -360 }}
//         transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
//       />
//     </div>
//   );
// };

// export default Banner;



import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  const [stars, setStars] = useState(generateStars(200)); // Default to 200 stars for web

  // Generate random star positions and sizes
  function generateStars(count: number) {
    const starsArray = [];
    for (let i = 0; i < count; i++) {
      starsArray.push({
        id: i,
        size: Math.random() * 3 + 1, // Random size between 1px and 4px
        top: Math.random() * 100, // Random position (percentage)
        left: Math.random() * 100, // Random position (percentage)
      });
    }
    return starsArray;
  }

  // Update number of stars based on screen size
  useEffect(() => {
    const updateStars = () => {
      const screenWidth = window.innerWidth;
      if (screenWidth < 768) {
        // Mobile view
        setStars(generateStars(50));
      } else {
        // Web view
        setStars(generateStars(200));
      }
    };

    updateStars(); // Set stars on initial render
    window.addEventListener('resize', updateStars); // Adjust stars on screen resize

    return () => {
      window.removeEventListener('resize', updateStars); // Cleanup event listener
    };
  }, []);

  return (
    <div
      className="relative h-[300px] md:h-[500px] flex items-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/bannerbg.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>

      {/* Animated stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute bg-white rounded-full"
          style={{
            width: `${star.size}px`,
            height: `${star.size}px`,
            top: `${star.top}%`,
            left: `${star.left}%`,
            boxShadow: "0 0 6px 2px rgba(255, 255, 255, 0.8)",
          }}
          animate={{ opacity: [0.1, 1, 0.1] }}
          transition={{
            duration: Math.random() * 3 + 2, // Random duration between 2s and 5s
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10"
        style={{ marginLeft: "10%", marginTop: "5%" }}
      >
        <h1 className="md:text-4xl text-xl mt-[20%] md:mt-[0%] text-orange-300 font-bold">Welcome to</h1>
        <h1 className="md:text-6xl text-2xl font-serif">The Numera Craft</h1>
        <a
          href="#book-consultation"
          className="mt-4 px-6 py-2 bg-[#B81626] text-2xl text-white font-serif rounded-full inline-block text-center"
        >
          Book A Consultation
        </a>
      </motion.div>

      {/* Overlay Images */}
      <motion.img
        src="/assets/bannerbgcircle1.png"
        alt="Circle 1"
        className="absolute top-[3%] right-[17%] w-[35%] md:w-[15%] object-cover"
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 20, ease: "linear" }}
      />
      <motion.img
        src="/assets/bannerbgcircle2.png"
        alt="Circle 2"
        className="absolute top-[35%] right-[10%] w-[35%] md:w-[15%] object-cover"
        animate={{ rotate: -360 }}
        transition={{ repeat: Infinity, duration: 25, ease: "linear" }}
      />
    </div>
  );
};

export default Banner;


