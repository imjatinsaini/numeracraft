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


import React from 'react';
import { motion } from 'framer-motion';

const Banner: React.FC = () => {
  return (
    <div
      className="relative h-[500px] flex items-center justify-center bg-cover bg-center text-white"
      style={{ backgroundImage: "url('/assets/bannerbg.png')" }}
    >
      <div className="absolute top-0 left-0 w-full h-full bg-black bg-opacity-40"></div>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="relative z-10 text-center"
      >
        <h1 className="md:text-4xl text-xl text-orange-300 font-bold">Welcome to</h1>
        <h1 className="md:text-5xl text-2xl font-serif">The Numera Craft</h1>
        
        {/* Updated Button */}
        <a
          href="#book-consultation"
          className="mt-4 px-6 py-2 bg-red-500 text-white font-serif rounded-full inline-block text-center"
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
