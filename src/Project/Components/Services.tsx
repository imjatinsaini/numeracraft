// import React from 'react';
// import "tailwindcss/tailwind.css";
// import { motion } from 'framer-motion';

// const Services: React.FC = () => {
//   return (
//     <div className="relative bg-[#F9EDB5] py-12">
//       {/* Web View */}
//       <div className="hidden lg:block max-w-6xl mx-auto">
//         <div className="relative">
//           <div
//             className="absolute left-0 top-0 w-1/3 h-full bg-cover bg-center opacity-20"
//             style={{ backgroundImage: "url('/assets/bannerbgcircle2.png')" }}
//           ></div>
//           <h2 className="text-center text-4xl font-bold mb-10 relative z-10">OUR SERVICES</h2>
//           <div className="grid grid-cols-3 gap-8 relative z-10">
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-6 py-8 rounded-lg text-center"
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src="/assets/numerologyservice.png"
//                 alt="Numerology"
//                 className="mx-auto w-[50%] mb-4"
//               />
//               <h3 className="text-xl font-semibold  text-white ">Numerology</h3>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-6 py-8 rounded-lg text-center"
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src="/assets/vastuservice.png"
//                 alt="Vastu"
//                 className="mx-auto w-[50%] mb-4"
//               />
//               <h3 className="text-xl font-semibold text-white ">Vastu</h3>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-6 py-8 rounded-lg text-center"
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src="/assets/astrologyservice.png"
//                 alt="Astrology"
//                 className="mx-auto w-[50%] mb-4"
//               />
//               <h3 className="text-xl font-semibold text-white ">Astrology</h3>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-6 py-8 rounded-lg text-center"
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src="/assets/astrovastuservice.png"
//                 alt="Astro Vastu"
//                 className="mx-auto w-[50%] mb-4"
//               />
//               <h3 className="text-xl font-semibold text-white ">Astro Vastu</h3>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-6 py-8 rounded-lg text-center"
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src="/assets/numerovastuservice.png"
//                 alt="Numero Vastu"
//                 className="mx-auto w-[50%] mb-4"
//               />
//               <h3 className="text-xl font-semibold text-white ">Numero Vastu</h3>
//             </motion.div>
//             <motion.div
//               whileHover={{ scale: 1.1 }}
//               className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-6 py-8 rounded-lg text-center"
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src="/assets/customizevastuservice.png"
//                 alt="Customize Vastu"
//                 className="mx-auto w-[50%] mb-4"
//               />
//               <h3 className="text-xl font-semibold text-white ">Customize Vastu</h3>
//             </motion.div>
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="lg:hidden px-6">
//         <h2 className="text-center text-3xl font-bold mb-6">OUR SERVICES</h2>
//         <div className="grid grid-cols-2 gap-4">
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-4 rounded-lg text-center"
//           >
//             <motion.img
//               whileHover={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//               src="/assets/numerologyservice.png"
//               alt="Numerology"
//               className="mx-auto w-[60%] mb-2"
//             />
//             <h3 className="text-lg font-semibold text-white ">Numerology</h3>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-4 rounded-lg text-center"
//           >
//             <motion.img
//               whileHover={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//               src="/assets/vastuservice.png"
//               alt="Vastu"
//               className="mx-auto w-[60%] mb-2"
//             />
//             <h3 className="text-lg font-semibold text-white ">Vastu</h3>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-4 rounded-lg text-center"
//           >
//             <motion.img
//               whileHover={{ rotate: 360 }}
//               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//               src="/assets/astrologyservice.png"
//               alt="Astrology"
//               className="mx-auto w-[60%] mb-2"
//             />
//             <h3 className="text-lg font-semibold text-white ">Astrology</h3>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-4 rounded-lg text-center"
//           >
//             <motion.img
//               whileHover={{ rotate: -360 }}
//               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//               src="/assets/astrovastuservice.png"
//               alt="Astro Vastu"
//               className="mx-auto w-[60%] mb-2"
//             />
//             <h3 className="text-lg font-semibold text-white ">Astro Vastu</h3>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-4 rounded-lg text-center"
//           >
//             <motion.img
//               whileHover={{ rotate: -360 }}
//               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//               src="/assets/numerovastuservice.png"
//               alt="Numero Vastu"
//               className="mx-auto w-[60%] mb-2"
//             />
//             <h3 className="text-lg font-semibold text-white ">Numero Vastu</h3>
//           </motion.div>
//           <motion.div
//             whileHover={{ scale: 1.05 }}
//             className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-4 rounded-lg text-center"
//           >
//             <motion.img
//               whileHover={{ rotate: -360 }}
//               transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//               src="/assets/customizevastuservice.png"
//               alt="Customize Vastu"
//               className="mx-auto w-[60%] mb-2"
//             />
//             <h3 className="text-lg font-semibold text-white ">Customize Vastu</h3>
//           </motion.div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;



// import React, { useState } from 'react';
// import "tailwindcss/tailwind.css";
// import { motion } from 'framer-motion';

// const Services: React.FC = () => {
//   const [selectedService, setSelectedService] = useState<string | null>(null);

//   const serviceData: { [key: string]: { title: string; content: string } } = {
//     Numerology: {
//       title: "Numerology",
//       content: "Numerology Is The Study Of Numbers And How They Affect Us. Decoding The Patterns, Numerology Is Based On The Idea That The Entire Universe Is A System...",
//     },
//     Vastu: {
//       title: "Vastu Shastra",
//       content: "Vastu Shastra Is An Ancient Science Rooted In Vedic Scriptures, Designed To Help You Live A Happy, Successful, And Harmonious Life...",
//     },
//     Astrology: {
//       title: "Astrology",
//       content: "Is Money Slipping Away Before It Reaches You? The Blockage Of Money Isn't Always Due To A Lack Of Hard Work—It Might Be Connected To The Planetary Alignments In Your Birth Chart...",
//     },
//     "Astro Vastu": {
//       title: "Astro Vastu",
//       content: "AstroVastu Is The Integration Of Vedic Astrology (Jyotish) And Vastu Shastra, Blending The Cosmic Energies Of Planets With The Spatial Energies Of Your Environment...",
//     },
//     "Numero Vastu": {
//       title: "Numerovastu",
//       content: "NumeroVastu Is A Unique Combination Of Two Ancient Sciences—Numerology And Vastu Shastra—That Work Together To Harmonize Energies In Your Life And Environment...",
//     },
//     "Customize Vastu": {
//       title: "Customized Vastu Solutions",
//       content: "Our Expert Vastu Consultants Conduct An In-Depth Audit Through Site Visits To Observe And Analyze Various Factors That May Contribute To Vastu Doshas (Imbalances)...",
//     },
//   };

//   return (
//     <div className="relative bg-[#F9EDB5] py-12">
//       {/* Web View */}
//       <div className="hidden lg:block max-w-6xl mx-auto">
//         <div className="relative">
//           <div
//             className="absolute left-0 top-0 w-1/3 h-full bg-cover bg-center opacity-20"
//             style={{ backgroundImage: "url('/assets/bannerbgcircle2.png')" }}
//           ></div>
//           <h2 className="text-center text-4xl font-bold mb-10 relative z-10">OUR SERVICES</h2>
//           <div className="grid grid-cols-3 gap-8 relative z-10">
//             {Object.keys(serviceData).map((service) => (
//               <motion.div
//                 key={service}
//                 whileHover={{ scale: 1.1 }}
//                 className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-6 py-8 rounded-lg text-center cursor-pointer"
//                 onClick={() => setSelectedService(service)}
//               >
//                 <motion.img
//                   whileHover={{ rotate: 360 }}
//                   transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                   src={`/assets/${service.toLowerCase().replace(/ /g, '')}service.png`}
//                   alt={service}
//                   className="mx-auto w-[50%] mb-4"
//                 />
//                 <h3 className="text-xl font-semibold">{service}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="lg:hidden px-6">
//         <h2 className="text-center text-3xl font-bold mb-6">OUR SERVICES</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {Object.keys(serviceData).map((service) => (
//             <motion.div
//               key={service}
//               whileHover={{ scale: 1.05 }}
//               className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-4 rounded-lg text-center cursor-pointer"
//               onClick={() => setSelectedService(service)}
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src={`/assets/${service.toLowerCase().replace(/ /g, '')}service.png`}
//                 alt={service}
//                 className="mx-auto w-[60%] mb-2"
//               />
//               <h3 className="text-lg font-semibold">{service}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Pop-up Modal */}
//       {selectedService && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-[#FFF8D9] p-6 rounded-lg max-w-3xl w-full relative">
//             <button
//               className="absolute top-4 right-4 text-red-500 text-2xl font-bold"
//               onClick={() => setSelectedService(null)}
//             >
//               ✕
//             </button>
//             <h2 className="text-3xl font-bold mb-4 text-red-700">{serviceData[selectedService].title}</h2>
//             <p className="text-lg mb-6">{serviceData[selectedService].content}</p>
//             <button className="px-6 py-2 bg-red-500 text-white rounded-full">Book A Consultation</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;


// import React, { useState } from 'react';
// import "tailwindcss/tailwind.css";
// import { motion } from 'framer-motion';

// const Services: React.FC = () => {
//   const [selectedService, setSelectedService] = useState<string | null>(null);

//   const serviceData: { [key: string]: { title: string; content: React.ReactNode } } = {
//     Numerology: {
//       title: "Numerology",
//       content: (
//         <div>
//           <p>Numerology Is The Study Of Numbers And How They Affect Us.</p>
//           <h3 className="font-bold mt-4">Decoding The Patterns</h3>
//           <p>Numerology Is Based On The Idea That The Entire Universe Is A System, One That Mathematically Breaks Down Into Basic Elements: Numbers. It Reveals A Number’s Inner Nature And Vibration, And How They Correspond To Your Personal Characteristics.</p>
//           <h3 className="font-bold mt-4">Numerology Is A Self-Help Tool.</h3>
//           <p>It Opens Doors In Your Psyche That You Did Not Know Existed. It Is A Way To Gain Greater Insight And Understanding Into Your Inner Being And True Nature.</p>
//         </div>
//       ),
//     },
//     Vastu: {
//       title: "Vastu Shastra",
//       content: (
//         <div>
//           <p>Vastu Shastra Is An Ancient Science Rooted In Vedic Scriptures, Designed To Help You Live A Happy, Successful, And Harmonious Life.</p>
//           <h3 className="font-bold mt-4">The Foundation Of Vastu: Directions And Elements</h3>
//           <ul className="list-disc pl-6">
//             <li>North (N): Money And Opportunities</li>
//             <li>Northeast (NE): Mind And Vision</li>
//             <li>East (E): Associations And Partnerships</li>
//             <li>South (S): Fame And Relaxation</li>
//           </ul>
//         </div>
//       ),
//     },
//     Astrology: {
//       title: "Astrology",
//       content: (
//         <div>
//           <p>Is Money Slipping Away Before It Reaches You?</p>
//           <h3 className="font-bold mt-4">Your Birth Chart Holds The Answers:</h3>
//           <ul className="list-disc pl-6">
//             <li>Discover The Reasons Behind Financial Losses.</li>
//             <li>Recognize The Signs Of Incoming Wealth.</li>
//             <li>Learn Powerful Astrological Remedies To Stop Money Drain And Attract Prosperity.</li>
//           </ul>
//         </div>
//       ),
//     },
//     "Astro Vastu": {
//       title: "Astro Vastu",
//       content: (
//         <div>
//           <p>AstroVastu Is The Integration Of Vedic Astrology (Jyotish) And Vastu Shastra, Blending The Cosmic Energies Of Planets With The Spatial Energies Of Your Environment.</p>
//           <h3 className="font-bold mt-4">Key Concepts Of AstroVastu</h3>
//           <ul className="list-disc pl-6">
//             <li>Sun (Surya): Health, Vitality, And Leadership</li>
//             <li>Moon (Chandra): Emotions, Peace, And Creativity</li>
//             <li>Mars (Mangal): Courage, Ambition, And Strength</li>
//           </ul>
//         </div>
//       ),
//     },
//     "Numero Vastu": {
//       title: "Numerovastu",
//       content: (
//         <div>
//           <p>NumeroVastu Combines The Power Of Numbers And Space To Bring You A Life Full Of Balance, Positivity, And Success.</p>
//           <h3 className="font-bold mt-4">Benefits Of NumeroVastu</h3>
//           <ul className="list-disc pl-6">
//             <li>Enhanced Prosperity: Aligning Favorable Numbers With Vastu Principles</li>
//             <li>Improved Health: Addressing Physical And Emotional Well-Being</li>
//           </ul>
//         </div>
//       ),
//     },
//     "Customize Vastu": {
//       title: "Customized Vastu Solutions",
//       content: (
//         <div>
//           <p>Our Expert Vastu Consultants Conduct An In-Depth Audit Through Site Visits To Observe And Analyze Various Factors That May Contribute To Vastu Doshas (Imbalances).</p>
//           <h3 className="font-bold mt-4">Areas Of Focus</h3>
//           <ul className="list-disc pl-6">
//             <li>Drawing Room</li>
//             <li>Bedroom</li>
//             <li>Kitchen</li>
//             <li>Study Room</li>
//           </ul>
//         </div>
//       ),
//     },
//   };

//   return (
//     <div className="relative bg-[#F9EDB5] py-12">
//       {/* Web View */}
//       <div className="hidden lg:block max-w-6xl mx-auto">
//         <div className="relative">
//           <div
//             className="absolute left-0 top-0 w-1/3 h-full bg-cover bg-center opacity-20"
//             style={{ backgroundImage: "url('/assets/bannerbgcircle2.png')" }}
//           ></div>
//           <h2 className="text-center text-4xl font-bold mb-10 relative z-10">OUR SERVICES</h2>
//           <div className="grid grid-cols-3 gap-8 relative z-10">
//             {Object.keys(serviceData).map((service) => (
//               <motion.div
//                 key={service}
//                 whileHover={{ scale: 1.1 }}
//                 className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-6 py-8 rounded-lg text-center cursor-pointer"
//                 onClick={() => setSelectedService(service)}
//               >
//                 <motion.img
//                   whileHover={{ rotate: 360 }}
//                   transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                   src={`/assets/${service.toLowerCase().replace(/ /g, '')}service.png`}
//                   alt={service}
//                   className="mx-auto w-[50%] mb-4"
//                 />
//                 <h3 className="text-xl font-semibold text-white">{service}</h3>
//               </motion.div>
//             ))}
//           </div>
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="lg:hidden px-6">
//         <h2 className="text-center text-3xl font-bold mb-6">OUR SERVICES</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {Object.keys(serviceData).map((service) => (
//             <motion.div
//               key={service}
//               whileHover={{ scale: 1.05 }}
//               className="relative bg-gradient-to-r from-red-800 via-red-700 to-red-500 p-4 rounded-lg text-center cursor-pointer"
//               onClick={() => setSelectedService(service)}
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src={`/assets/${service.toLowerCase().replace(/ /g, '')}service.png`}
//                 alt={service}
//                 className="mx-auto w-[60%] mb-2"
//               />
//               <h3 className="text-lg font-semibold text-white">{service}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Pop-up Modal */}
//       {selectedService && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-[#FFF8D9] p-6 rounded-lg max-w-3xl w-full relative">
//             <button
//               className="absolute top-4 right-4 text-red-500 text-2xl font-bold"
//               onClick={() => setSelectedService(null)}
//             >
//               ✕
//             </button>
//             <h2 className="text-3xl font-bold mb-4 text-red-700">{serviceData[selectedService].title}</h2>
//             <div className="text-lg mb-6">{serviceData[selectedService].content}</div>
//             <button className="px-6 py-2 bg-red-500 text-white rounded-full">Book A Consultation</button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;


// import React, { useState } from 'react';
// import "tailwindcss/tailwind.css";
// import { motion } from 'framer-motion';

// const Services: React.FC = () => {
//   const [selectedService, setSelectedService] = useState<string | null>(null);

//   const serviceData: { [key: string]: { title: string; content: React.ReactNode } } = {
//     Numerology: {
//       title: "Numerology",
//       content: (
//         <div>
//           <p>Numerology Is The Study Of Numbers And How They Affect Us.</p>
//           <h3 className="font-bold mt-4">Decoding The Patterns</h3>
//           <p>Numerology Is Based On The Idea That The Entire Universe Is A System, One That Mathematically Breaks Down Into Basic Elements: Numbers. It Reveals A Number’s Inner Nature And Vibration, And How They Correspond To Your Personal Characteristics.</p>
//           <h3 className="font-bold mt-4">Numerology Is A Self-Help Tool.</h3>
//           <p>It Opens Doors In Your Psyche That You Did Not Know Existed. It Is A Way To Gain Greater Insight And Understanding Into Your Inner Being And True Nature.</p>
//         </div>
//       ),
//     },
//     Vastu: {
//       title: "Vastu Shastra",
//       content: (
//         <div>
//           <p>Vastu Shastra Is An Ancient Science Rooted In Vedic Scriptures, Designed To Help You Live A Happy, Successful, And Harmonious Life.</p>
//           <h3 className="font-bold mt-4">The Foundation Of Vastu: Directions And Elements</h3>
//           <ul className="list-disc pl-6">
//             <li>North (N): Money And Opportunities</li>
//             <li>Northeast (NE): Mind And Vision</li>
//             <li>East (E): Associations And Partnerships</li>
//             <li>South (S): Fame And Relaxation</li>
//           </ul>
//         </div>
//       ),
//     },
//     Astrology: {
//       title: "Astrology",
//       content: (
//         <div>
//           <p>Is Money Slipping Away Before It Reaches You?</p>
//           <h3 className="font-bold mt-4">Your Birth Chart Holds The Answers:</h3>
//           <ul className="list-disc pl-6">
//             <li>Discover The Reasons Behind Financial Losses.</li>
//             <li>Recognize The Signs Of Incoming Wealth.</li>
//             <li>Learn Powerful Astrological Remedies To Stop Money Drain And Attract Prosperity.</li>
//           </ul>
//         </div>
//       ),
//     },
//     "Astro Vastu": {
//       title: "Astro Vastu",
//       content: (
//         <div>
//           <p>AstroVastu Is The Integration Of Vedic Astrology (Jyotish) And Vastu Shastra, Blending The Cosmic Energies Of Planets With The Spatial Energies Of Your Environment.</p>
//           <h3 className="font-bold mt-4">Key Concepts Of AstroVastu</h3>
//           <ul className="list-disc pl-6">
//             <li>Sun (Surya): Health, Vitality, And Leadership</li>
//             <li>Moon (Chandra): Emotions, Peace, And Creativity</li>
//             <li>Mars (Mangal): Courage, Ambition, And Strength</li>
//           </ul>
//         </div>
//       ),
//     },
//     "Numero Vastu": {
//       title: "Numerovastu",
//       content: (
//         <div>
//           <p>NumeroVastu Combines The Power Of Numbers And Space To Bring You A Life Full Of Balance, Positivity, And Success.</p>
//           <h3 className="font-bold mt-4">Benefits Of NumeroVastu</h3>
//           <ul className="list-disc pl-6">
//             <li>Enhanced Prosperity: Aligning Favorable Numbers With Vastu Principles</li>
//             <li>Improved Health: Addressing Physical And Emotional Well-Being</li>
//           </ul>
//         </div>
//       ),
//     },
//     "Customize Vastu": {
//       title: "Customized Vastu Solutions",
//       content: (
//         <div>
//           <p>Our Expert Vastu Consultants Conduct An In-Depth Audit Through Site Visits To Observe And Analyze Various Factors That May Contribute To Vastu Doshas (Imbalances).</p>
//           <h3 className="font-bold mt-4">Areas Of Focus</h3>
//           <ul className="list-disc pl-6">
//             <li>Drawing Room</li>
//             <li>Bedroom</li>
//             <li>Kitchen</li>
//             <li>Study Room</li>
//           </ul>
//         </div>
//       ),
//     },
//   };

//   const handleBookConsultation = () => {
//     setSelectedService(null); // Close the modal
//     const element = document.getElementById('book-consultation'); // Find the target section
//     if (element) {
//       element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
//     }
//   };

//   return (
//     <div className="relative bg-[#F9EDB5] md:py-12 py-8">
//       {/* Web View */}
//       <div className="hidden lg:block max-w-6xl mx-auto">
//         <h2 className="text-center text-4xl font-bold mb-10">OUR SERVICES</h2>
//         <div className="grid grid-cols-3 gap-8">
//           {Object.keys(serviceData).map((service) => (
//             <motion.div
//               key={service}
//               whileHover={{ scale: 1.1 }}
//               className="relative p-4 rounded-lg text-center cursor-pointer" 
//      style={{ background: 'radial-gradient(circle, #EF4444 0%, #991B1B 100%)' }}
//               onClick={() => setSelectedService(service)}
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src={`/assets/${service.toLowerCase().replace(/ /g, '')}service.png`}
//                 alt={service}
//                 className="mx-auto w-[50%] mb-4"
//               />
//               <h3 className="text-xl font-semibold text-white">{service}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="lg:hidden px-6">
//         <h2 className="text-center text-3xl font-bold mb-6">OUR SERVICES</h2>
//         <div className="grid grid-cols-2 gap-4">
//           {Object.keys(serviceData).map((service) => (
//             <motion.div
//               key={service}
//               whileHover={{ scale: 1.05 }}
//               className="relative p-4 rounded-lg text-center cursor-pointer" 
//               style={{ background: 'radial-gradient(circle, #EF4444 0%, #991B1B 100%)' }}
//               onClick={() => setSelectedService(service)}
//             >
//               <motion.img
//                 whileHover={{ rotate: 360 }}
//                 transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
//                 src={`/assets/${service.toLowerCase().replace(/ /g, '')}service.png`}
//                 alt={service}
//                 className="mx-auto w-[60%] mb-2"
//               />
//               <h3 className="text-lg font-semibold text-white">{service}</h3>
//             </motion.div>
//           ))}
//         </div>
//       </div>

//       {/* Pop-up Modal */}
//       {selectedService && (
//         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
//           <div className="bg-[#FFF8D9] p-6 rounded-lg max-w-3xl w-full relative">
//             <button
//               className="absolute top-6 right-4 text-red-500 text-2xl font-bold"
//               onClick={() => setSelectedService(null)}
//             >
//               ✕
//             </button>
//             <h2 className="text-3xl font-bold mb-4 text-red-700">{serviceData[selectedService].title}</h2>
//             <div className="text-lg mb-6">{serviceData[selectedService].content}</div>

//             {/* Updated Button with Auto-Close */}
//             <button
//               onClick={handleBookConsultation}
//               className="px-6 py-2 bg-[#A51420] text-white rounded-full"
//             >
//               Book A Consultation
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Services;



import React, { useState } from 'react';
import "tailwindcss/tailwind.css";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const Services: React.FC = () => {
  const [selectedService, setSelectedService] = useState<string | null>(null);
  const navigate = useNavigate();

  const serviceData: { [key: string]: { title: string; content: React.ReactNode; link: string } } = {
    Numerology: {
      title: "Numerology",
      content: (
        <div>
          <p>Numerology Is The Study Of Numbers And How They Affect Us.</p>
          <h3 className="font-bold mt-4">Decoding The Patterns</h3>
          <p>Numerology Is Based On The Idea That The Entire Universe Is A System, One That Mathematically Breaks Down Into Basic Elements: Numbers. It Reveals A Number’s Inner Nature And Vibration, And How They Correspond To Your Personal Characteristics.</p>
          <h3 className="font-bold mt-4">Numerology Is A Self-Help Tool.</h3>
          <p>It Opens Doors In Your Psyche That You Did Not Know Existed. It Is A Way To Gain Greater Insight And Understanding Into Your Inner Being And True Nature.</p>
        </div>
      ),
      link: "/numerology",
    },
    Vastu: {
      title: "Vastu Shastra",
      content: (
        <div>
          <p>Vastu Shastra Is An Ancient Science Rooted In Vedic Scriptures, Designed To Help You Live A Happy, Successful, And Harmonious Life.</p>
          <h3 className="font-bold mt-4">The Foundation Of Vastu: Directions And Elements</h3>
          <ul className="list-disc pl-6">
            <li>North (N): Money And Opportunities</li>
            <li>Northeast (NE): Mind And Vision</li>
            <li>East (E): Associations And Partnerships</li>
            <li>South (S): Fame And Relaxation</li>
          </ul>
        </div>
      ),
      link: "/vastushastra",
    },
    Astrology: {
      title: "Astrology",
      content: (
        <div>
          <p>Is Money Slipping Away Before It Reaches You?</p>
          <h3 className="font-bold mt-4">Your Birth Chart Holds The Answers:</h3>
          <ul className="list-disc pl-6">
            <li>Discover The Reasons Behind Financial Losses.</li>
            <li>Recognize The Signs Of Incoming Wealth.</li>
            <li>Learn Powerful Astrological Remedies To Stop Money Drain And Attract Prosperity.</li>
          </ul>
        </div>
      ),
      link: "/astrology",
    },
    "Astro Vastu": {
      title: "Astro Vastu",
      content: (
        <div>
          <p>AstroVastu Is The Integration Of Vedic Astrology (Jyotish) And Vastu Shastra, Blending The Cosmic Energies Of Planets With The Spatial Energies Of Your Environment.</p>
          <h3 className="font-bold mt-4">Key Concepts Of AstroVastu</h3>
          <ul className="list-disc pl-6">
            <li>Sun (Surya): Health, Vitality, And Leadership</li>
            <li>Moon (Chandra): Emotions, Peace, And Creativity</li>
            <li>Mars (Mangal): Courage, Ambition, And Strength</li>
          </ul>
        </div>
      ),
      link: "/astrovastu",
    },
    "Numero Vastu": {
      title: "Numerovastu",
      content: (
        <div>
          <p>NumeroVastu Combines The Power Of Numbers And Space To Bring You A Life Full Of Balance, Positivity, And Success.</p>
          <h3 className="font-bold mt-4">Benefits Of NumeroVastu</h3>
          <ul className="list-disc pl-6">
            <li>Enhanced Prosperity: Aligning Favorable Numbers With Vastu Principles</li>
            <li>Improved Health: Addressing Physical And Emotional Well-Being</li>
          </ul>
        </div>
      ),
      link: "/numerovastu",
    },
    "Customize Vastu": {
      title: "Customized Vastu Solutions",
      content: (
        <div>
          <p>Our Expert Vastu Consultants Conduct An In-Depth Audit Through Site Visits To Observe And Analyze Various Factors That May Contribute To Vastu Doshas (Imbalances).</p>
          <h3 className="font-bold mt-4">Areas Of Focus</h3>
          <ul className="list-disc pl-6">
            <li>Drawing Room</li>
            <li>Bedroom</li>
            <li>Kitchen</li>
            <li>Study Room</li>
          </ul>
        </div>
      ),
      link: "/customizedvastu",
    },
  };

  const handleBookConsultation = () => {
    setSelectedService(null); // Close the modal
    const element = document.getElementById('book-consultation'); // Find the target section
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' }); // Smooth scroll to the section
    }
  };

  const handleReadMore = () => {
    if (selectedService && serviceData[selectedService]?.link) {
      navigate(serviceData[selectedService].link); // Navigate to the specific service page
      setSelectedService(null); // Close the modal
    }
  };

  return (
    <div className="relative bg-[#F9EDB5] md:py-12 py-8">
      {/* Web View */}
      <div className="hidden lg:block max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-bold mb-10">OUR SERVICES</h2>
        <div className="grid grid-cols-3 gap-8">
          {Object.keys(serviceData).map((service) => (
            <motion.div
              key={service}
              whileHover={{ scale: 1.1 }}
              className="relative p-4 rounded-lg text-center cursor-pointer" 
              style={{ background: 'radial-gradient(circle, #EF4444 0%, #991B1B 100%)' }}
              onClick={() => setSelectedService(service)}
            >
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                src={`/assets/${service.toLowerCase().replace(/ /g, '')}service.png`}
                alt={service}
                className="mx-auto w-[50%] mb-4"
                onContextMenu={(e) => e.preventDefault()}
        draggable="false"
              />
              <h3 className="text-xl font-semibold text-white">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden px-6">
        <h2 className="text-center text-3xl font-bold mb-6">OUR SERVICES</h2>
        <div className="grid grid-cols-2 gap-4">
          {Object.keys(serviceData).map((service) => (
            <motion.div
              key={service}
              whileHover={{ scale: 1.05 }}
              className="relative p-4 rounded-lg text-center cursor-pointer" 
              style={{ background: 'radial-gradient(circle, #EF4444 0%, #991B1B 100%)' }}
              onClick={() => setSelectedService(service)}
            >
              <motion.img
                whileHover={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 12, ease: "linear" }}
                src={`/assets/${service.toLowerCase().replace(/ /g, '')}service.png`}
                alt={service}
                className="mx-auto w-[60%] mb-2"
                onContextMenu={(e) => e.preventDefault()}
        draggable="false"
              />
              <h3 className="text-lg font-semibold text-white">{service}</h3>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Pop-up Modal */}
      {selectedService && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-[#FFF8D9] p-6 rounded-lg max-w-3xl w-full relative">
            <button
              className="absolute top-6 right-4 text-red-500 text-2xl font-bold"
              onClick={() => setSelectedService(null)}
            >
              ✕
            </button>
            <h2 className="text-3xl font-serif mb-4 text-red-700">{serviceData[selectedService].title}</h2>
            <div className="text-lg mb-6">{serviceData[selectedService].content}</div>

            {/* Buttons */}
            <div className="flex flex-wrap justify-start gap-4 ">
              <button
                onClick={handleBookConsultation}
                className="px-6 py-2 bg-[#A51420] font-serif text-white rounded-full"
              >
                Book A Consultation
              </button>
              <button
                onClick={handleReadMore}
                className="px-6 py-2 bg-[#8A491C] font-serif text-white rounded-full"
              >
                Read More
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Services;