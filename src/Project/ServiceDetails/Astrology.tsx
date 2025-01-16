// import { motion } from "framer-motion";

// const Astrology = () => {
//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-md"
//       >
//         <h1 className="text-3xl font-bold text-red-700 mb-4">Astrology</h1>
//         <h2 className="text-xl font-semibold text-red-700 mb-4">
//           Is Money Slipping Away Before It Reaches You?
//         </h2>
//         <p>🌟 Your Birth Chart Holds the Answers:</p>
//         <p className="text-gray-700 mt-4 mb-4">
//           The Blockage Of Money Isn't Always Due To A Lack Of Hard Work—It Might
//           Be Connected To The Planetary Alignments In Your Birth Chart.
//         </p>
//         <ul className="list-disc list-inside mb-4 text-gray-800">
//           <li>Discover The Reasons Behind Financial Losses.</li>
//           <li>Recognize The Signs Of Incoming Wealth.</li>
//           <li>
//             Learn Powerful Astrological Remedies To Stop Money Drain And Attract
//             Prosperity.
//           </li>
//         </ul>
//         <p className="text-sm text-orange-600 mb-6">
//           Unlock The Path To Financial Success By Consulting Vedic Astrology.
//           Transform Your Hard Work Into Meaningful Results With Simple,
//           Practical, And Accurate Remedies Tailored Just For You!
//         </p>
//         <motion.button
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-red-700 text-white py-2 px-4 rounded shadow-md hover:bg-red-800"
//         >
//           Book A Consultation
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Astrology;


// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const Astrology = () => {
//   const navigate = useNavigate();

//   const handleClose = () => {
//     navigate("/"); // Navigate to the home page
//   };

//   const handleBookConsultation = () => {
//     navigate("/", { state: { scrollToServices: true } }); // Navigate to the home page with an intent to scroll to services
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-md relative"
//       >
//         {/* Cross Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 text-red-700 text-xl font-bold hover:text-red-900"
//         >
//           ×
//         </button>

//         <h1 className="text-3xl font-bold text-red-700 mb-4">Astrology</h1>
//         <h2 className="text-xl font-semibold text-red-700 mb-4">
//           Is Money Slipping Away Before It Reaches You?
//         </h2>
//         <p>🌟 Your Birth Chart Holds the Answers:</p>
//         <p className="text-gray-700 mt-4 mb-4">
//           The Blockage Of Money Isn't Always Due To A Lack Of Hard Work—It Might
//           Be Connected To The Planetary Alignments In Your Birth Chart.
//         </p>
//         <ul className="list-disc list-inside mb-4 text-gray-800">
//           <li>Discover The Reasons Behind Financial Losses.</li>
//           <li>Recognize The Signs Of Incoming Wealth.</li>
//           <li>
//             Learn Powerful Astrological Remedies To Stop Money Drain And Attract
//             Prosperity.
//           </li>
//         </ul>
//         <p className="text-sm text-orange-600 mb-6">
//           Unlock The Path To Financial Success By Consulting Vedic Astrology.
//           Transform Your Hard Work Into Meaningful Results With Simple,
//           Practical, And Accurate Remedies Tailored Just For You!
//         </p>

//         {/* Book a Consultation Button */}
//         <motion.button
//           onClick={handleBookConsultation}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-red-700 text-white py-2 px-4 rounded shadow-md hover:bg-red-800"
//         >
//           Book A Consultation
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Astrology;



// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";

// const Astrology = () => {
//   const navigate = useNavigate();

//   const handleClose = () => {
//     navigate("/"); // Navigate to the home page
//   };

//   const handleBookConsultation = () => {
//     navigate("/", { state: { scrollTo: "bookconsultation" } }); // Navigate with state to scroll to "bookconsultation"
//   };

//   return (
//     <div className="flex justify-center items-center min-h-screen bg-gray-200 p-4">
//       <motion.div
//         initial={{ opacity: 0, scale: 0.9 }}
//         animate={{ opacity: 1, scale: 1 }}
//         transition={{ duration: 0.5 }}
//         className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-md relative"
//       >
//         {/* Cross Button */}
//         <button
//           onClick={handleClose}
//           className="absolute top-4 right-4 text-red-700 text-xl font-bold hover:text-red-900"
//         >
//           ×
//         </button>

//         <h1 className="text-3xl font-bold text-red-700 mb-4">Astrology</h1>
//         <h2 className="text-xl font-semibold text-red-700 mb-4">
//           Is Money Slipping Away Before It Reaches You?
//         </h2>
//         <p>🌟 Your Birth Chart Holds the Answers:</p>
//         <p className="text-gray-700 mt-4 mb-4">
//           The Blockage Of Money Isn't Always Due To A Lack Of Hard Work—It Might
//           Be Connected To The Planetary Alignments In Your Birth Chart.
//         </p>
//         <ul className="list-disc list-inside mb-4 text-gray-800">
//           <li>Discover The Reasons Behind Financial Losses.</li>
//           <li>Recognize The Signs Of Incoming Wealth.</li>
//           <li>
//             Learn Powerful Astrological Remedies To Stop Money Drain And Attract
//             Prosperity.
//           </li>
//         </ul>
//         <p className="text-sm text-orange-600 mb-6">
//           Unlock The Path To Financial Success By Consulting Vedic Astrology.
//           Transform Your Hard Work Into Meaningful Results With Simple,
//           Practical, And Accurate Remedies Tailored Just For You!
//         </p>

//         {/* Book a Consultation Button */}
//         <motion.button
//           onClick={handleBookConsultation}
//           whileHover={{ scale: 1.1 }}
//           whileTap={{ scale: 0.95 }}
//           className="bg-red-700 text-white py-2 px-4 rounded shadow-md hover:bg-red-800"
//         >
//           Book A Consultation
//         </motion.button>
//       </motion.div>
//     </div>
//   );
// };

// export default Astrology;



import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThreeDsolarsystem from "../Components/ThreeDSolarSystem";

const Astrology = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleBookConsultation = () => {
    navigate("/", { state: { scrollTo: "book-consultation" } }); // Navigate with state to scroll to "book-consultation"
  };

  return (
    <>
    <ThreeDsolarsystem/>
    <div className="flex justify-center items-center min-h-screen  p-4">
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-md relative"
      >
        {/* Cross Button */}
        <button
          onClick={handleClose}
          className="absolute top-4 right-2 text-red-700 text-2xl font-bold hover:text-red-900"
        >
          ×
        </button>

        <h1 className="text-3xl font-serif text-red-700 mb-4">Astrology</h1>
        <div className="max-h-[75vh] overflow-y-auto pr-4">
        <h2 className="text-xl font-serif text-red-700 mb-4">
          Is Money Slipping Away Before It Reaches You?
        </h2>
        <p>🌟 Your Birth Chart Holds the Answers:</p>
        <p className="text-gray-700 mt-4 mb-4">
          The Blockage Of Money Isn't Always Due To A Lack Of Hard Work—It Might
          Be Connected To The Planetary Alignments In Your Birth Chart.
        </p>
        <ul className="list-disc list-inside mb-4 text-gray-800">
          <li>Discover The Reasons Behind Financial Losses.</li>
          <li>Recognize The Signs Of Incoming Wealth.</li>
          <li>
            Learn Powerful Astrological Remedies To Stop Money Drain And Attract
            Prosperity.
          </li>
        </ul>
        <p className="text-sm text-orange-600 mb-6">
          Unlock The Path To Financial Success By Consulting Vedic Astrology.
          Transform Your Hard Work Into Meaningful Results With Simple,
          Practical, And Accurate Remedies Tailored Just For You!
        </p>
       </div>
        {/* Book a Consultation Button */}
        <motion.button
          onClick={handleBookConsultation}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#B81626] text-white py-2 px-4 font-serif rounded shadow-md hover:bg-red-800"
        >
          Book A Consultation
        </motion.button>
      </motion.div>
    </div>
    </>
  );
};

export default Astrology;