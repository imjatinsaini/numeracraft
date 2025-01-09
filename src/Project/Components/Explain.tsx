// import React from 'react';
// import "tailwindcss/tailwind.css";

// const Explain: React.FC = () => {
//   return (
//     <div className="relative bg-[#FFF8D9] text-gray-800 py-12">
//       <div className="hidden lg:flex justify-between items-center mx-auto max-w-6xl">
//         {/* Left Side Text */}
//         <div className="w-2/3 pr-8 relative">
//           <div className="absolute left-0 top-0 h-full border-l-2  border-red-500"></div>
//           <h2 className="text-4xl mb-4 pl-4">Unlock the Power of Numerology, Astrology, and Vastu</h2>
//           <p className="text-sm mb-6 pl-4">
//             Are you seeking harmony, prosperity, and balance in your life? At <span className="font-bold">The Numera Craft</span>, we combine the ancient sciences of Numerology, Astrology, and Vastu Shastra to help you unlock the potential of your personal and professional spaces.
//           </p>
//           <h3 className="text-4xl mb-2 pl-4">Why Choose Us?</h3>
//           <ul className="list-disc text-sm list-inside mb-4 pl-4">
//             <li><span className="font-bold">Expert Guidance:</span> Our experienced consultants offer personalized solutions tailored to your unique needs.</li>
//             <li><span className="font-bold">Holistic Approach:</span> We integrate Numerology and Vastu to provide comprehensive support for your goals.</li>
//             <li><span className="font-bold">Proven Results:</span> Hundreds of satisfied clients have transformed their lives with our consultations.</li>
//           </ul>
//           <h3 className="text-2xl mb-2 pl-4">How It Works</h3>
//           <ol className="list-decimal text-sm list-inside pl-4">
//             <li>Initial Consultation: Share your concerns and objectives with us.</li>
//             <li>Customized Analysis: Receive a detailed report based on your Numerology and Vastu assessments.</li>
//             <li>Actionable Solutions: Implement our practical and effective recommendations.</li>
//           </ol>
//           <button className="mt-6 px-6 py-2 bg-red-500 text-white font-serif rounded-full ml-4">Book A Consultation</button>
//         </div>

//         {/* Right Side Image */}
//         <div className="w-1/3">
//           <img src="/assets/numerology.png" alt="Numerology Diagram" className="w-full h-auto object-cover" />
//         </div>
//       </div>

//       {/* Mobile View */}
//       <div className="lg:hidden flex flex-col items-center justify-center text-center p-6 relative">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{ backgroundImage: "url('/assets/numerology.png')" }}
//         ></div>
//         <div className="relative z-10">
//           <h2 className="text-3xl mb-4">Unlock the Power of Numerology, Astrology, and Vastu</h2>
//           <p className="text-sm mb-6">
//             Are you seeking harmony, prosperity, and balance in your life? At <span className="font-bold">The Numera Craft</span>, we combine the ancient sciences of Numerology, Astrology, and Vastu Shastra to help you unlock the potential of your personal and professional spaces.
//           </p>
//           <button className="mt-6 px-6 py-2 bg-red-500 text-white font-serif rounded-full">Book A Consultation</button>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Explain;


// Explain.tsx
import React from 'react';
import "tailwindcss/tailwind.css";

const Explain: React.FC = () => {
  return (
    <div className="relative bg-[#FFF8D9] text-gray-800 py-12">
      {/* Web View */}
      <div className="hidden lg:flex justify-between items-center mx-auto max-w-6xl">
        {/* Left Side Text */}
        <div className="w-2/3 pr-8 relative">
          <div className="absolute -left-4 top-0  h-full border-l-2 border-red-500"></div>
          <h2 className="text-4xl mb-4 font-serif pt-4  pl-4">Unlock the Power of Numerology, Astrology, and Vastu</h2>
          <p className="text-sm mb-6 pl-4">
            Are you seeking harmony, prosperity, and balance in your life? At <span className="font-bold">The Numera Craft</span>, we combine the ancient sciences of Numerology, Astrology, and Vastu Shastra to help you unlock the potential of your personal and professional spaces.
          </p>
          <h3 className="text-4xl font-serif mb-2 pl-4">Why Choose Us?</h3>
          <ul className="list-disc text-sm list-inside mb-4 pl-4">
            <li><span className="font-bold">Expert Guidance:</span> Our experienced consultants offer personalized solutions tailored to your unique needs.</li>
            <li><span className="font-bold">Holistic Approach:</span> We integrate Numerology and Vastu to provide comprehensive support for your goals.</li>
            <li><span className="font-bold">Proven Results:</span> Hundreds of satisfied clients have transformed their lives with our consultations.</li>
          </ul>
          <h3 className="text-4xl font-serif  mb-2 pl-4">How It Works</h3>
          <ol className="list-decimal text-sm list-inside pl-4">
            <li>Initial Consultation: Share your concerns and objectives with us.</li>
            <li>Customized Analysis: Receive a detailed report based on your Numerology and Vastu assessments.</li>
            <li>Actionable Solutions: Implement our practical and effective recommendations.</li>
          </ol>
          
          {/* Updated Button */}
          <a
            href="#book-consultation"
            className="mt-6 px-6 py-2 mb-4 bg-[#B81626] text-base text-white font-serif rounded-full ml-4 inline-block text-center"
          >
            Book A Consultation
          </a>
        </div>

        {/* Right Side Image */}
        <div className="w-1/3">
          <img src="/assets/numerology.png" alt="Numerology Diagram" className="w-full h-auto object-cover" />
        </div>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden flex flex-col items-center justify-center text-center p-6 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/assets/numerology.png')" }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-3xl mb-4">Unlock the Power of Numerology, Astrology, and Vastu</h2>
          <p className="text-sm mb-6">
            Are you seeking harmony, prosperity, and balance in your life? At <span className="font-bold">The Numera Craft</span>, we combine the ancient sciences of Numerology, Astrology, and Vastu Shastra to help you unlock the potential of your personal and professional spaces.
          </p>
          
          {/* Updated Button */}
          <a
            href="#book-consultation"
            className="mt-6 px-6 py-2 bg-[#B81626] text-white font-serif rounded-full inline-block text-center"
          >
            Book A Consultation
          </a>
        </div>
      </div>
    </div>
  );
};

export default Explain;

