// import { motion } from "framer-motion";
// import { useNavigate } from "react-router-dom";
// import ThreeDsolarsystem from "../Components/ThreeDSolarSystem";

// const VastuShastra = () => {
//   const navigate = useNavigate();

//   const handleClose = () => {
//     navigate("/"); // Navigate to the home page
//   };

//   const handleBookConsultation = () => {
//     navigate("/", { state: { scrollTo: "book-consultation" } }); // Navigate with state to scroll to "book-consultation"
//   };

//   return (
//     <>
//       <ThreeDsolarsystem />
//       <div className="flex justify-center items-center min-h-screen p-4">
//         <motion.div
//           initial={{ opacity: 0, scale: 0.9 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.5 }}
//           className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-3xl relative"
//         >
//           {/* Close Button */}
//           <button
//             onClick={handleClose}
//             className="absolute top-4 right-4 text-red-700 text-xl font-bold hover:text-red-900"
//             aria-label="Close vastu shastra modal"
//           >
//             ×
//           </button>

//           {/* Header */}
//           <h1 className="text-3xl font-bold text-red-700 mb-4">Vastu Shastra</h1>

//           {/* Subheader */}
//           <h2 className="text-xl font-semibold text-red-700 mb-4">
//             Decoding The Patterns
//           </h2>

//           {/* Content */}
//           <div className="text-gray-700 space-y-4">
//             <p>
//               <strong>Vastu Shastra</strong> Is An Ancient Science Rooted In
//               Vedic Scriptures, Designed To Help You Live A Happy, Successful,
//               And Harmonious Life. Historically, It Was Primarily Used To Ensure
//               The Well-Being And Prosperity Of Kings, Enabling Them To Rule
//               Effectively And Maintain Their Dominance. If You Observe Ancient
//               Temples, Mosques, Churches, And Palaces, You'll Notice They Are
//               All Built Based On The Principles Of Vastu Shastra.
//             </p>
//             <p>
//               Vastu Is Incredibly Logical And Effective, Offering Remedies That
//               Can Address And Resolve Various Challenges In Life.
//             </p>

//             <h3 className="font-bold text-lg">
//               The Foundation Of Vastu: Directions And Elements
//             </h3>
//             <p>
//               Vastu Shastra Is Based On 16 Directions, Each Representing A
//               Specific Aspect Of Life. It Also Incorporates The Five
//               Elements—Water, Air, Fire, Earth, And Space—Ensuring Balance And
//               Harmony In Your Surroundings.
//             </p>
//             <p>
//               While Most People Are Familiar With The Eight Cardinal Directions
//               In Vastu, Here Are The Attributes And Names Of All 16 Directions:
//             </p>

//             {/* Direction List */}
//             <ul className="list-disc list-inside mb-4 text-gray-800">
//               <li>North (N): Money And Opportunities</li>
//               <li>North-Northeast (NNE): Health And Immunity</li>
//               <li>Northeast (NE): Mind And Vision</li>
//               <li>East-Northeast (ENE): Fun And Happiness</li>
//               <li>East (E): Associations And Partnerships</li>
//               <li>East-Southeast (ESE): Analysis And Anxiety</li>
//               <li>Southeast (SE): Cash Flow</li>
//               <li>South-Southeast (SSE): Confidence</li>
//               <li>South (S): Fame And Relaxation</li>
//               <li>South-Southwest (SSW): Expenditure</li>
//               <li>Southwest (SW): Relationships</li>
//               <li>West-Southwest (WSW): Education</li>
//               <li>West (W): Gains</li>
//               <li>West-Northwest (WNW): Depression</li>
//               <li>Northwest (NW): Support</li>
//               <li>North-Northwest (NNW): Sex</li>
//             </ul>
//             <p>
//               By Aligning Your Home Or Workplace With Vastu Principles, You Can
//               Create An Environment That Fosters Positivity, Growth, And Balance
//               In All Areas Of Life.
//             </p>
//           </div>

//           {/* Book a Consultation Button */}
//           <motion.button
//             onClick={handleBookConsultation}
//             whileHover={{ scale: 1.1 }}
//             whileTap={{ scale: 0.95 }}
//             className="mt-6 bg-red-700 text-white py-2 px-4 rounded shadow-md hover:bg-red-800"
//           >
//             Book A Consultation
//           </motion.button>
//         </motion.div>
//       </div>
//     </>
//   );
// };

// export default VastuShastra;



import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThreeDsolarsystem from "../Components/ThreeDSolarSystem";

const VastuShastra = () => {
  const navigate = useNavigate();

  const handleClose = () => {
    navigate("/"); // Navigate to the home page
  };

  const handleBookConsultation = () => {
    navigate("/", { state: { scrollTo: "book-consultation" } }); // Navigate with state to scroll to "book-consultation"
  };

  return (
    <>
      <ThreeDsolarsystem />
      <div className="flex justify-center items-center min-h-screen p-4 bg-gray-900">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-3xl w-full relative overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-1 right-2  p-4 text-red-700 text-4xl font-bold hover:text-red-900"
            aria-label="Close vastu shastra modal"
          >
            ×
          </button>

          {/* Scrollable Content */}
         
            {/* Header */}
            <h1 className="text-3xl font-serif text-red-700 mb-4">
              Vastu Shastra
            </h1>
            <div className="max-h-[75vh] overflow-y-auto pr-4">

            {/* Subheader */}
            <h2 className="text-xl font-serif text-red-700 mb-4">
              Decoding The Patterns
            </h2>

            {/* Content */}
            <div className="text-gray-700 space-y-4">
              <p>
                <strong>Vastu Shastra</strong> Is An Ancient Science Rooted In
                Vedic Scriptures, Designed To Help You Live A Happy,
                Successful, And Harmonious Life. Historically, It Was Primarily
                Used To Ensure The Well-Being And Prosperity Of Kings, Enabling
                Them To Rule Effectively And Maintain Their Dominance. If You
                Observe Ancient Temples, Mosques, Churches, And Palaces, You'll
                Notice They Are All Built Based On The Principles Of Vastu
                Shastra.
              </p>
              <p>
                Vastu Is Incredibly Logical And Effective, Offering Remedies
                That Can Address And Resolve Various Challenges In Life.
              </p>

              <h3 className="font-bold text-lg">
                The Foundation Of Vastu: Directions And Elements
              </h3>
              <p>
                Vastu Shastra Is Based On 16 Directions, Each Representing A
                Specific Aspect Of Life. It Also Incorporates The Five
                Elements—Water, Air, Fire, Earth, And Space—Ensuring Balance And
                Harmony In Your Surroundings.
              </p>
              <p>
                While Most People Are Familiar With The Eight Cardinal
                Directions In Vastu, Here Are The Attributes And Names Of All 16
                Directions:
              </p>

              {/* Direction List */}
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>North (N): Money And Opportunities</li>
                <li>North-Northeast (NNE): Health And Immunity</li>
                <li>Northeast (NE): Mind And Vision</li>
                <li>East-Northeast (ENE): Fun And Happiness</li>
                <li>East (E): Associations And Partnerships</li>
                <li>East-Southeast (ESE): Analysis And Anxiety</li>
                <li>Southeast (SE): Cash Flow</li>
                <li>South-Southeast (SSE): Confidence</li>
                <li>South (S): Fame And Relaxation</li>
                <li>South-Southwest (SSW): Expenditure</li>
                <li>Southwest (SW): Relationships</li>
                <li>West-Southwest (WSW): Education</li>
                <li>West (W): Gains</li>
                <li>West-Northwest (WNW): Depression</li>
                <li>Northwest (NW): Support</li>
                <li>North-Northwest (NNW): Sex</li>
              </ul>
              <p>
                By Aligning Your Home Or Workplace With Vastu Principles, You
                Can Create An Environment That Fosters Positivity, Growth, And
                Balance In All Areas Of Life.
              </p>
            </div>
          </div>

          {/* Book a Consultation Button */}
          <motion.button
            onClick={handleBookConsultation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#B81626] font-serif text-white py-2 px-4 rounded shadow-md hover:bg-red-800"
          >
            Book A Consultation
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default VastuShastra;
