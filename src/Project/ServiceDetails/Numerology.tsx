import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import ThreeDsolarsystem from "../Components/ThreeDSolarSystem";

const Numerology = () => {
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
      <div className="flex justify-center items-center min-h-screen p-4">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="bg-yellow-100 rounded-lg shadow-lg p-6 max-w-3xl relative"
        >
          {/* Close Button */}
          <button
            onClick={handleClose}
            className="absolute top-4 right-2 text-red-700 text-xl font-bold hover:text-red-900"
            aria-label="Close numerology modal"
          >
            ×
          </button>
         
          {/* Header */}
          <h1 className="text-3xl font-serif text-red-700 mb-4">Numerology</h1>
          <div  className="max-h-[75vh] overflow-y-auto pr-4">
          <h2 className="text-xl font-serif text-red-700 mb-4">
            Numerology Is The Study Of Numbers And How They Affect Us.
          </h2>

          {/* Content */}
          <div className="text-gray-700 space-y-4">
            <h3 className="font-bold text-lg">Decoding The Patterns</h3>
            <p>
              Numerology Is Based On The Idea That The Entire Universe Is A
              System, One That Mathematically Breaks Down Into Basic Elements:
              Numbers. It Reveals A Number’s Inner Nature And Vibration, And How
              They Correspond To Your Personal Characteristics.
            </p>
            <p>
              You Probably Haven’t Thought Of Numbers As Having A Personality,
              But As You Get To Know Them You’ll Realize Most Of Us Have
              Preferences For One Number Over Another. You Make These Choices
              Because You Feel An Intuitive Attraction To The Nature Or
              Personality Of The Number.
            </p>
            <p>
              Numerology Is A Language That Allows You To Expand The Horizon Of
              Your Spiritual Awareness. It Is Based On The Notion That
              Everything Is Connected, And That Everything Exists In Perfect
              Synchronicity With Everything Else. Without That Vision,
              Metaphysical Sciences Can't Exist.
            </p>

            <h3 className="font-bold text-lg">Numerology Is A Self-Help Tool.</h3>
            <p>
              It Opens Doors In Your Psyche That You Did Not Know Existed. It Is
              A Way To Gain Greater Insight And Understanding Into Your Inner
              Being And True Nature. It Reveals Aspects Of Your Character And
              Personality In A Way That Is Fresh And Inspiring. It Gives You A
              New Vantage Point From Which To Look At Yourself; One With Greater
              Distance And Perspective Than Many Other Self-Help Systems.
            </p>
            <p>
              Self-Knowledge Is The Key To Success And Freedom. Having A Greater
              Insight Into Your Strengths And Weaknesses Will Help You In Every
              Aspect Of Life.
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

export default Numerology;
