import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThreeDsolarsystem from "../Components/ThreeDSolarSystem";

const CustomizedVastu = () => {
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
            aria-label="Close customized vastu modal"
          >
            ×
          </button>

          {/* Scrollable Content */}
         
            {/* Header */}
            <h1 className="text-3xl font-serif text-red-700 mb-4">
              Customized Vastu Solutions: Tailored To Your Needs
            </h1>

            <div className="max-h-[75vh] overflow-y-auto pr-4">
            {/* Subheader */}
            <h2 className="text-xl font-serif text-red-700 mb-4">
              Vastu Dosha Audit
            </h2>

            {/* Content */}
            <div className="text-gray-700 space-y-4">
              <p>
                Our Expert Vastu Consultants Conduct An In-Depth Audit Through
                Site Visits To Observe And Analyze Various Factors That May
                Contribute To Vastu Doshas (Imbalances).
              </p>

              <h3 className="font-bold text-lg">
                Key Factors Assessed During The Audit:
              </h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>External Factors</li>
                <li>Setback Activities Around The Property</li>
                <li>Cuts And Extended Parts Of The Building</li>
                <li>Activities In Improper Directions</li>
                <li>Placement Of Decorative Objects In Unfavorable Locations</li>
                <li>Anti-Prakriti (Anti-Natural) Architectural Elements</li>
                <li>Divine And Demonic Influences On The Property</li>
                <li>Astro Vastu Check: Assessing Alignment With Astrological Factors</li>
                <li>
                  Numero Vastu Check: Evaluating The Numerical Harmony Of The
                  Space
                </li>
                <li>Negative Effects And Remedies</li>
                <li>
                  Any Identified Vastu Doshas Are Addressed Through Remedies
                  Such As Relocation Or Simple Corrective Measures To Restore
                  Balance And Positivity.
                </li>
              </ul>

              <h3 className="font-bold text-lg">Negative Effects And Remedies</h3>
              <p>
                Any Identified Vastu Doshas Are Addressed Through Remedies Such
                As Relocation Or Simple Corrective Measures To Restore Balance
                And Positivity.
              </p>

              <h3 className="font-bold text-lg">Areas Of Focus</h3>
              <div className="grid grid-cols-2 gap-4">
                {/* Column 1 */}
                <div>
                  <h4 className="font-bold">Activities</h4>
                  <ul className="list-disc list-inside mb-4 text-gray-800">
                    <li>Drawing Room</li>
                    <li>Pooja Room</li>
                    <li>Bedroom</li>
                    <li>Kitchen</li>
                    <li>Dining Area</li>
                    <li>Study Room</li>
                    <li>Toilet</li>
                    <li>Bar Room</li>
                    <li>Storage Areas</li>
                  </ul>

                  <h4 className="font-bold">Utilities</h4>
                  <p>
                    Evaluation Of The Placement And Impact Of Appliances And
                    Devices, Including:
                  </p>
                  <ul className="list-disc list-inside mb-4 text-gray-800">
                    <li>Safe (For Valuables)</li>
                    <li>T.V., Computer, Camera</li>
                    <li>Heater, Generator, Inverter</li>
                    <li>Gas Stove, Refrigerator, Mixer Grinder</li>
                    <li>Washing Machine, A.C., Etc.</li>
                  </ul>
                </div>

                {/* Column 2 */}
                <div>
                  <h4 className="font-bold">Interiors</h4>
                  <ul className="list-disc list-inside mb-4 text-gray-800">
                    <li>Flower Vases, Indoor Plants</li>
                    <li>Wall Art, Paintings, And Sculptures</li>
                    <li>Idols Of Gods And Goddesses</li>
                    <li>Lighting, Carpets, And Rugs</li>
                  </ul>

                  <h4 className="font-bold">Impact Analysis</h4>
                  <p>
                    Our Audit Examines How These Elements Are Influencing Key
                    Areas Of Your Life:
                  </p>
                  <ul className="list-disc list-inside mb-4 text-gray-800">
                    <li>Health</li>
                    <li>Career</li>
                    <li>Relationships</li>
                    <li>Financial Well-Being</li>
                  </ul>
                </div>
              </div>

              <p className="text-sm text-orange-600">
                Let Us Help You Create A Harmonious Environment By Eliminating
                Vastu Doshas And Aligning Your Space With Positive Energies.
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

export default CustomizedVastu;
