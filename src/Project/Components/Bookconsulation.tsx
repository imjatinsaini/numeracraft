// import React from 'react';
// import "tailwindcss/tailwind.css";

// const Bookconsulation: React.FC = () => {
//   return (
//     <div
//       className="relative bg-[#F9EDB5] py-12"
//       style={{ backgroundImage: "url('/assets/bookconsultationbackground.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
//     >
//       {/* Web View */}
//       <div className="hidden lg:block max-w-6xl mx-auto">
//         <h2 className="text-center text-4xl font-serif mb-6">BOOK YOUR CONSULTATION TODAY</h2>
//         <p className="text-center font-sans text-lg mb-4">
//           Take the first step toward a more harmonious and prosperous life. Contact us to schedule your personalized Numerology and Vastu consultation.
//         </p>
//         <p className="text-center text-red-700 italic mb-10">
//           The Path To True Happiness Starts With Self-Discovery. Take The First Step On Your Journey Today.
//         </p>
//         <div className="bg-[#F9EDB5] shadow p-8 rounded-3xl max-w-4xl mx-auto relative">
//           <h3 className="text-2xl font-serif text-center mb-6">Interested In Discussing?</h3>
//           <form className="grid grid-cols-2 gap-6">
//             <input type="text" placeholder="Name" className="col-span-1 border border-gray-300 p-2 rounded" />
//             <input type="email" placeholder="Email" className="col-span-1 border border-gray-300 p-2 rounded" />
//             <input type="tel" placeholder="Phone" className="col-span-1 border border-gray-300 p-2 rounded" />
//             <select className="col-span-1 border border-gray-300 p-2 rounded">
//               <option value="">Choose Our Services</option>
//               <option value="Numerology">Numerology</option>
//               <option value="Astrology">Astrology</option>
//               <option value="Vastu">Vastu</option>
//               <option value="Numero Vastu">Numero Vastu</option>
//               <option value="Astro Vastu">Astro Vastu</option>
//               <option value="Customize Vastu">Customize Vastu</option>
//             </select>
//             <textarea placeholder="Message" className="col-span-2 border border-gray-300 p-2 rounded h-24"></textarea>
//             <button type="submit" className="col-span-2 bg-red-500 text-white py-2 items-center text-center w-fit px-4 justify-center mx-auto rounded-full">
//               Book A Consultation
//             </button>
//           </form>
//         </div>
//         <p className="text-center text-lg mt-8">
//         Discover the science behind your success with The Numera Craft. 
//         Unlock your true potential today!
//         </p>
//       </div>

//       {/* Mobile View */}
//       <div className="lg:hidden p-6 relative">
//         <div
//           className="absolute inset-0 bg-cover bg-center opacity-20"
//           style={{ backgroundImage: "url('/assets/bannerbgcircle2.png')" }}
//         ></div>
//         <div className="relative z-10">
//           <h2 className="text-center text-3xl font-bold mb-6">BOOK YOUR CONSULTATION TODAY</h2>
//           <p className="text-center text-sm mb-4">
//             Take the first step toward a more harmonious and prosperous life. Contact us to schedule your personalized Numerology and Vastu consultation.
//           </p>
//           <p className="text-center text-red-500 italic mb-6">
//             The Path To True Happiness Starts With Self-Discovery. Take The First Step On Your Journey Today.
//           </p>
//           <div className="bg-[#F9EDB5] shadow p-8 rounded-3xl max-w-4xl mx-auto relative">
//           <h3 className="text-2xl font-serif text-center mb-6">Interested In Discussing?</h3>
//           <form className="space-y-4">
//             <input type="text" placeholder="Name" className="w-full border border-gray-300 p-2 rounded" />
//             <input type="email" placeholder="Email" className="w-full border border-gray-300 p-2 rounded" />
//             <input type="tel" placeholder="Phone" className="w-full border border-gray-300 p-2 rounded" />
//             <select className="w-full border border-gray-300 p-2 rounded">
//               <option value="">Choose Our Services</option>
//               <option value="Numerology">Numerology</option>
//               <option value="Astrology">Astrology</option>
//               <option value="Vastu">Vastu</option>
//               <option value="Numero Vastu">Numero Vastu</option>
//               <option value="Astro Vastu">Astro Vastu</option>
//               <option value="Customize Vastu">Customize Vastu</option>
//             </select>
//             <textarea placeholder="Message" className="w-full border border-gray-300 p-2 rounded h-24"></textarea>
//             <button type="submit" className=" bg-red-500 text-white py-2 items-center text-center justify-center  mx-auto flex min-w-fit px-4 rounded-full">
//               Book A Consultation
//             </button>
//           </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Bookconsulation;


import React, { useState } from 'react';
import "tailwindcss/tailwind.css";

const Bookconsulation: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); // Prevent default form submission

    const { name, email, phone, service, message } = formData;

    // Construct the WhatsApp message
    const whatsappMessage = `Hi sir, I want to use the service. Here are my details:
   Hi Vikas ji ! I am interested in your services. Here are my details:
- Name: ${name}
- Email: ${email}
- Phone: ${phone}
- Service: ${service}
- Message: ${message}`;

    // Encode the message for the URL
    const encodedMessage = encodeURIComponent(whatsappMessage);

    // Open WhatsApp with the message
    window.open(`https://wa.me/8556966753?text=${encodedMessage}`, '_blank');
  };

  return (
    <div
      className="relative bg-[#F9EDB5] py-12"
      style={{ backgroundImage: "url('/assets/bookconsultationbackground.png')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      <div className="hidden lg:block max-w-6xl mx-auto">
        <h2 className="text-center text-4xl font-serif mb-6">BOOK YOUR CONSULTATION TODAY</h2>
        <p className="text-center font-sans text-lg mb-4">
          Take the first step toward a more harmonious and prosperous life. Contact us to schedule your personalized Numerology and Vastu consultation.
        </p>
        <p className="text-center text-red-700 italic mb-10">
          The Path To True Happiness Starts With Self-Discovery. Take The First Step On Your Journey Today.
        </p>
        <div className="bg-[#F9EDB5] shadow p-8 rounded-3xl max-w-4xl mx-auto relative">
          <h3 className="text-2xl font-serif text-center mb-6">Interested In Discussing?</h3>
          <form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="col-span-1 border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="col-span-1 border border-gray-300 p-2 rounded"
              required
            />
            <input
              type="tel"
              name="phone"
              placeholder="Phone"
              value={formData.phone}
              onChange={handleChange}
              className="col-span-1 border border-gray-300 p-2 rounded"
              required
            />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="col-span-1 border border-gray-300 p-2 rounded"
              required
            >
              <option value="">Choose Our Services</option>
              <option value="Numerology">Numerology</option>
              <option value="Astrology">Astrology</option>
              <option value="Vastu">Vastu</option>
              <option value="Numero Vastu">Numero Vastu</option>
              <option value="Astro Vastu">Astro Vastu</option>
              <option value="Customize Vastu">Customize Vastu</option>
            </select>
            <textarea
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
              className="col-span-2 border border-gray-300 p-2 rounded h-24"
              required
            ></textarea>
            <button
              type="submit"
              className="col-span-2 bg-red-500 text-white py-2 items-center text-center w-fit px-4 justify-center mx-auto rounded-full"
            >
              Book A Consultation
            </button>
          </form>
        </div>
        <p className="text-center text-lg mt-8">
          Discover the science behind your success with The Numera Craft. 
          Unlock your true potential today!
        </p>
      </div>

      {/* Mobile View */}
      <div className="lg:hidden p-6 relative">
        <div
          className="absolute inset-0 bg-cover bg-center opacity-20"
          style={{ backgroundImage: "url('/assets/bannerbgcircle2.png')" }}
        ></div>
        <div className="relative z-10">
          <h2 className="text-center text-3xl font-bold mb-6">BOOK YOUR CONSULTATION TODAY</h2>
          <p className="text-center text-sm mb-4">
            Take the first step toward a more harmonious and prosperous life. Contact us to schedule your personalized Numerology and Vastu consultation.
          </p>
          <p className="text-center text-red-500 italic mb-6">
            The Path To True Happiness Starts With Self-Discovery. Take The First Step On Your Journey Today.
          </p>
          <div className="bg-[#F9EDB5] shadow p-8 rounded-3xl max-w-4xl mx-auto relative">
            <h3 className="text-2xl font-serif text-center mb-6">Interested In Discussing?</h3>
            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="name"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded"
                required
              >
                <option value="">Choose Our Services</option>
                <option value="Numerology">Numerology</option>
                <option value="Astrology">Astrology</option>
                <option value="Vastu">Vastu</option>
                <option value="Numero Vastu">Numero Vastu</option>
                <option value="Astro Vastu">Astro Vastu</option>
                <option value="Customize Vastu">Customize Vastu</option>
              </select>
              <textarea
                name="message"
                placeholder="Message"
                value={formData.message}
                onChange={handleChange}
                className="w-full border border-gray-300 p-2 rounded h-24"
                required
              ></textarea>
              <button
                type="submit"
                className="bg-red-500 text-white py-2 items-center text-center justify-center mx-auto flex min-w-fit px-4 rounded-full"
              >
                Book A Consultation
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bookconsulation;

