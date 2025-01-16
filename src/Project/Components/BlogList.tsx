import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const blogs = [
  {
    id: 1,
    title: 'What is Vastu Shastra?',
    description: 'Vastu Shastra is an ancient Indian architectural system that aims to create a harmonious living space by aligning the physical environment with the principles of nature. It involves the design and layout of buildings to promote health, wealth, and prosperity...',
    image: '/assets/blog1.png',
  },
  {
    id: 2,
    title: 'What is Astrology?',
    description: 'Astrology is the study of celestial objects and their influence on human lives. It involves the interpretation of the positions and movements of planets and stars to understand and predict events and personality traits...',
    image: '/assets/blog2.png',
  },
  {
    id: 3,
    title: 'What is Numerology?',
    description: 'Numerology is the study of numbers and their symbolic meanings. It is based on the belief that numbers have a mystical significance and can influence various aspects of life, including personality, relationships, and future events...',
    image: '/assets/blog3.png',
  },
];

const BlogList = () => {
  return (
    <div className="bg-[#F9EDB5]   md:p-10 p-8">
      <h1 className="text-center md:text-5xl text-3xl font-serif md:mb-2 mb-0 text-[#333]">BLOGS</h1>
      <div className="text-2xl font-serif text-center items-center  justify-center md:mb-10 mb-6 flex  ">
          <img src="/assets/redline.png" alt="lineheading" className="w-[40%] sm:w-[20%]  md:w-[20%]" />
        </div>
      <div className="grid grid-cols-1 md:grid-cols-3 md:mx-[10%]  mx-[0%] gap-6 md:gap-10">
        {blogs.map((blog) => (
          <motion.div
            key={blog.id} // Unique key prop applied to the root element
            className="overflow-hidden border shadow-lg  shadow- bg-transparent hover:shadow-2xl transition-all duration-300"
            whileHover={{ scale: 1.02 }}
          >
            <Link to={`/blog/${blog.id}`} className="block">
              <img
                src={blog.image}
                alt={blog.title}
                className="w-full h-48 object-cover "
              />
              <div className="p-6">
                <h2 className="text-xl font-semibold mb-2 font-serif text-gray-800">{blog.title}</h2>
                <p className="text-gray-600 text-sm md:text-base line-clamp-2 mb-4">{blog.description}</p>
                <span className="text-red-500 font-medium hover:underline">
                  Read More
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
