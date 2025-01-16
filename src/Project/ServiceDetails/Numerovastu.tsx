import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThreeDsolarsystem from "../Components/ThreeDSolarSystem";

const Numerovastu = () => {
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
          className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-4xl w-full relative overflow-hidden"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-2 text-red-700 text-xl font-bold hover:text-red-900"
            aria-label="Close numerovastu modal"
          >
            ×
          </button>

          {/* Scrollable Content */}
         
            {/* Header */}
            <h1 className="text-3xl font-serif text-red-700 mb-4">Numerovastu</h1>
            <div className="max-h-[75vh] overflow-y-auto pr-4">
            {/* Subheader */}
            <h2 className="text-xl font-serif  mb-4">
              NumeroVastu Is A Unique Combination Of Two Ancient Sciences—
              Numerology And Vastu Shastra—That Work Together To Harmonize
              Energies In Your Life And Environment.
            </h2>

            {/* Content */}
            <div className="text-gray-700 space-y-4">
              <p>
                By Integrating The Principles Of Numbers (Numerology) And
                Directional Alignments (Vastu), NumeroVastu Seeks To Create
                Balance And Positive Vibrations In Your Home, Workplace, And
                Personal Life.
              </p>

              <h3 className="font-bold text-lg">How Does NumeroVastu Work?</h3>
              <h4 className="font-bold">Numerology’s Role</h4>
              <p>
                Numerology Deciphers The Vibrations And Energy Of Numbers
                Associated With You, Such As Your Birth Date, Name, Or Other Key
                Numbers. Each Number Has Its Personality And Influences Various
                Aspects Of Your Life, Including Health, Career, Relationships,
                And Finances.
              </p>
              <h4 className="font-bold">Vastu’s Role</h4>
              <p>
                Vastu Shastra Focuses On The Energy Flow In Physical Spaces,
                Ensuring Alignment With The Five Elements (Water, Air, Fire,
                Earth, And Space) And The 16 Cardinal Directions. It Helps To
                Create A Balanced And Harmonious Environment.
              </p>

              <h4 className="font-bold">The Synergy</h4>
              <p>
                In NumeroVastu, Your Personal Numbers Are Analyzed In Conjunction
                With Your Space’s Layout. For Example:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>
                  Specific Directions In Your Home May Amplify Or Diminish The
                  Impact Of Your Personal Numbers.
                </li>
                <li>
                  Remedies May Include Aligning Certain Activities, Objects, Or
                  Decor With Your Favorable Numbers And Directions.
                </li>
              </ul>

              <h3 className="font-bold text-lg">Benefits Of NumeroVastu</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>
                  <strong>Enhanced Prosperity:</strong> Aligning Favorable
                  Numbers With Vastu Principles To Attract Wealth And
                  Opportunities.
                </li>
                <li>
                  <strong>Improved Health:</strong> Addressing Physical And
                  Emotional Well-Being By Balancing Energies In Your Space.
                </li>
                <li>
                  <strong>Stronger Relationships:</strong> Promoting Harmony And
                  Understanding Through Optimized Alignments.
                </li>
                <li>
                  <strong>Better Decision-Making:</strong> Gaining Clarity And
                  Confidence By Synchronizing Personal And Spatial Energies.
                </li>
              </ul>

              <h3 className="font-bold text-lg">
                Practical Applications Of NumeroVastu
              </h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>
                  <strong>Naming Alignments:</strong> Choosing Business Names,
                  Brand Names, Or Personal Names That Resonate With Both
                  Numerology And Vastu Principles.
                </li>
                <li>
                  <strong>Home And Office Design:</strong> Optimizing The
                  Placement Of Rooms, Furniture, And Objects Based On Your
                  Favorable Numbers And Vastu Directions.
                </li>
                <li>
                  <strong>Energy Corrections:</strong> Addressing Doshas
                  (Imbalances) By Incorporating Number-Based Remedies, Such As
                  Adding Or Subtracting Elements In Specific Areas.
                </li>
              </ul>

              <p className="text-sm text-orange-600">
                NumeroVastu Combines The Power Of Numbers And Space To Bring You
                A Life Full Of Balance, Positivity, And Success. Would You Like
                To Explore How It Can Be Applied To Your Home Or Business?
              </p>
            </div>
          </div>

          {/* Book a Consultation Button */}
          <motion.button
            onClick={handleBookConsultation}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="mt-6 bg-[#B81626] text-white py-2 px-4 font-serif rounded shadow-md hover:bg-red-800"
          >
            Book A Consultation
          </motion.button>
        </motion.div>
      </div>
    </>
  );
};

export default Numerovastu;
