import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThreeDsolarsystem from "../Components/ThreeDSolarSystem";

const Astrovastu = () => {
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
            aria-label="Close astrovastu modal"
          >
            ×
          </button>

          {/* Scrollable Content */}
         
            {/* Header */}
            <h1 className="text-3xl font-serif text-red-700 mb-4">Astrovastu</h1>
            <div className="max-h-[75vh] overflow-y-auto pr-4 ">
            {/* Subheader */}
            <h2 className="text-xl font-serif text-red-700 mb-4">
              AstroVastu Is The Integration Of Vedic Astrology (Jyotish) And
              Vastu Shastra, Blending The Cosmic Energies Of Planets With The
              Spatial Energies Of Your Environment.
            </h2>

            {/* Content */}
            <div className="text-gray-700 space-y-4">
              <p>
                It Emphasizes The Alignment Of Your Living Or Working Space With
                Your Astrological Birth Chart To Create Harmony, Prosperity, And
                Well-Being.
              </p>

              <h3 className="font-bold text-lg">How Does AstroVastu Work?</h3>
              <h4 className="font-bold">Astrological Foundations</h4>
              <p>
                Vedic Astrology Interprets The Placement Of Planets In Your
                Birth Chart, Revealing Insights About Your Personality,
                Strengths, Weaknesses, And Life Challenges. Each Planet Governs
                Specific Aspects Of Life, Such As Health, Career, Relationships,
                And Finances.
              </p>

              <h4 className="font-bold">Vastu Principles</h4>
              <p>
                Vastu Shastra Governs The Flow Of Energy In Your Physical
                Environment, Focusing On The Five Elements—Water, Air, Fire,
                Earth, And Space—And Their Interaction With The 16 Cardinal
                Directions.
              </p>

              <h4 className="font-bold">The Integration</h4>
              <p>
                AstroVastu Links The Two Sciences, Aligning Planetary Influences
                With The Energy Flow Of Your Space. For Example:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>
                  Specific Directions In Your Home Are Associated With Planets
                  (E.G., East With Sun, South With Mars, Etc.).
                </li>
                <li>
                  Remedies Are Applied To Align Unfavorable Planetary Influences
                  With Corrective Spatial Adjustments.
                </li>
              </ul>

              <h3 className="font-bold text-lg">Key Concepts Of AstroVastu</h3>
              <h4 className="font-bold">Planets And Directions</h4>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>Sun (Surya): East — Represents Health, Vitality, And Leadership.</li>
                <li>Moon (Chandra): Northwest — Governs Emotions, Peace, And Creativity.</li>
                <li>Mars (Mangal): South — Indicates Strength, Courage, And Ambition.</li>
                <li>
                  Mercury (Budh): North — Enhances Intellect, Communication, And
                  Business Acumen.
                </li>
                <li>
                  Jupiter (Guru): Northeast — Symbolizes Wisdom, Growth, And
                  Prosperity.
                </li>
                <li>
                  Venus (Shukra): Southeast — Represents Love, Luxury, And Wealth.
                </li>
                <li>
                  Saturn (Shani): West — Reflects Discipline, Career, And
                  Perseverance.
                </li>
                <li>Rahu: Southwest — Impacts Desires, Ambitions, And Material Gains.</li>
                <li>Ketu: South-Southeast — Relates To Spirituality And Detachment.</li>
              </ul>

              <h3 className="font-bold text-lg">Customized Remedies</h3>
              <p>
                Remedies Include Modifying Room Placements, Colors, Objects, Or
                Activities Based On Planetary Alignments And Vastu Principles.
                For Example:
              </p>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>
                  Strengthening A Weak Jupiter By Enhancing The Northeast
                  Direction With Spiritual Elements Like A Temple Or Clean Water.
                </li>
                <li>
                  Addressing A Malefic Saturn By Balancing The West With Earthy
                  Tones Or Grounding Materials.
                </li>
              </ul>

              <h3 className="font-bold text-lg">Benefits Of AstroVastu</h3>
              <ul className="list-disc list-inside mb-4 text-gray-800">
                <li>
                  <strong>Balanced Energy:</strong> Aligning Planetary And
                  Spatial Energies For Optimal Harmony.
                </li>
                <li>
                  <strong>Improved Health:</strong> Enhancing Well-Being By
                  Addressing Astrological Imbalances In Specific Directions.
                </li>
                <li>
                  <strong>Financial Growth:</strong> Boosting Wealth And
                  Opportunities Through Precise Spatial Corrections.
                </li>
                <li>
                  <strong>Better Relationships:</strong> Resolving Conflicts By
                  Harmonizing Personal And Environmental Energies.
                </li>
                <li>
                  <strong>Spiritual Growth:</strong> Facilitating Inner Peace And
                  Clarity By Aligning Cosmic And Earthly Energies.
                </li>
              </ul>

              <p className="text-sm text-orange-600">
                AstroVastu Bridges The Gap Between The Cosmos And Your Physical
                Space, Offering A Powerful Way To Synchronize Your Inner And
                Outer Worlds. Would You Like To Learn How AstroVastu Can
                Transform Your Home Or Workplace?
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

export default Astrovastu;
