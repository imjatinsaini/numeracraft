import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Footer from './Footer';
import Header2 from './Header2';

const blogs = [
    {
        id: 1,
        title: 'What is Vastu Shastra?',
        content: `Vastu Shastra is an ancient Indian architectural system that focuses on the principles of design, layout, and spatial geometry. 
            It aims to promote harmony by balancing the five elements—earth, water, fire, air, and space—in living spaces. By aligning 
            structures with natural forces, Vastu seeks to foster well-being, prosperity, and peace for the inhabitants. The practice 
            involves meticulous planning and placement of various elements within a building to ensure positive energy flow. 
            Vastu Shastra is not just limited to homes but is also applied to offices, temples, and other structures to enhance 
            the overall quality of life.`,
        details: `Some key aspects of Vastu Shastra include directional alignments, the proper positioning of rooms such as kitchens, bedrooms, and 
            entrances, and the use of specific shapes and materials. Its practices are rooted in ancient Indian philosophy, 
            and it remains a significant cultural tradition in modern architecture. The science of Vastu Shastra also emphasizes 
            the importance of natural light, ventilation, and the use of colors to create a balanced environment. Practitioners 
            believe that adhering to Vastu principles can lead to improved health, better relationships, and increased financial 
            stability. Despite being an ancient practice, Vastu Shastra continues to be relevant and is often integrated with 
            contemporary architectural designs.`,
        image: '/assets/blog1.png',
    },
    {
        id: 2,
        title: 'What is Astrology?',
        content: `Astrology is a mystical discipline that studies the movements and positions of celestial bodies to understand their influence on human affairs. 
            It provides insights into personality traits, life events, and potential challenges by interpreting the alignment of stars and planets. 
            Astrology has been practiced for thousands of years and is deeply rooted in various cultures around the world. It encompasses 
            a wide range of techniques and systems, including Western astrology, Vedic astrology, and Chinese astrology, each with its 
            unique methods and interpretations. Astrologers create detailed charts based on the exact time, date, and location of an 
            individual's birth to provide personalized readings.`,
        details: `Astrology uses a variety of systems, including horoscopes, natal charts, and zodiac signs, to offer personalized guidance. 
            It is believed to bridge the gap between cosmic forces and individual destinies, helping people make informed decisions and embrace self-awareness. 
            In addition to personal readings, astrology is also used to predict global events, weather patterns, and even financial markets. 
            The practice involves a deep understanding of planetary movements, aspects, and transits, which are analyzed to forecast future 
            trends and opportunities. While some view astrology as a science, others see it as an art form that requires intuition and 
            spiritual insight. Regardless of one's perspective, astrology continues to captivate and inspire people, offering a unique 
            lens through which to view the world and our place within it.`,
        image: '/assets/blog2.png',
    },
    {
        id: 3,
        title: 'What is Numerology?',
        content: `Numerology is the study of numbers and their symbolic meanings in our lives. It explores how numbers can reveal a person’s character, strengths, and life purpose. 
            By analyzing names and birth dates, numerology seeks to uncover patterns and provide guidance for personal and professional growth. 
            The practice of numerology dates back to ancient civilizations, including the Greeks, Egyptians, and Chinese, who believed that 
            numbers hold mystical significance. Numerologists use various methods, such as the Pythagorean system and the Chaldean system, 
            to interpret the vibrational energy of numbers and their impact on human life.`,
        details: `Each number in numerology has a unique vibration and energy. Life Path numbers, Destiny numbers, and Soul Urge numbers are among the key elements analyzed. 
            This practice has been used for centuries to help individuals understand their life paths and make positive changes. Numerology 
            also examines the significance of repeating numbers, master numbers, and karmic numbers, which can provide deeper insights into 
            one's spiritual journey. By understanding the numerical patterns in our lives, we can gain clarity on our goals, relationships, 
            and challenges. Numerology is often used in conjunction with other metaphysical practices, such as astrology and tarot, to offer 
            a holistic approach to self-discovery and personal development. Whether used for personal reflection or practical decision-making, 
            numerology offers a fascinating and empowering way to navigate life's complexities.`,
        image: '/assets/blog3.png',
    },
];

const BlogDetail = () => {
    const { id } = useParams<{ id: string }>();
    const blog = blogs.find((blog) => blog.id === parseInt(id!));

    if (!blog) return <div className="text-center text-2xl mt-20">Blog not found!</div>;

    return (
        < >
      <Header2/>
        <motion.div
            className="p-[7%] mt-24 sm:mt-14 md:mt-12 lg:mt-8 xl:mt-8   bg-[#fdf5e6] min-h-screen"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
        >
            <motion.img
                src={blog.image}
                alt={blog.title}
                className="w-full h-80 object-cover rounded-lg shadow-lg"
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                onContextMenu={(e) => e.preventDefault()}
        draggable="false"
            />
            <motion.h1
                className="text-5xl font-bold mt-6 text-gray-800"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.6 }}
            >
                {blog.title}
            </motion.h1>
            <motion.p
                className="text-lg text-gray-700 mt-6 leading-8"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5, duration: 0.6 }}
            >
                {blog.content}
            </motion.p>
            <motion.div
                className="text-md text-gray-600 mt-8 leading-7"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
            >
                {blog.details}
            </motion.div>
            <Link
                to="/"
                className="mt-10 inline-block mb-10 md:mb-0 text-red-500 font-medium hover:underline text-lg"
            >
                &larr; Back to HomePage
            </Link>
        </motion.div>
        <Footer/>
        </>
    );
};

export default BlogDetail;
