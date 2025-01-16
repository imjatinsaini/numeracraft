// import React from 'react'
// import Header from '../Components/Header'
// import Explain from '../Components/Explain'
// import Bookconsulation from '../Components/Bookconsulation'
// import Poster from '../Components/Poster'
// import Footer from '../Components/Footer'
// import Services from '../Components/Services'
// import BlogList from '../Components/BlogList'
// import Banner from '../Components/Banner'

// const Home:React.FC = () => {
//   return (
//     <div className=''>
//       <Header/>
//       <Banner/>
//       <Explain/>
//       <Services/>
//       <Bookconsulation/>
//       <Poster/>
//       <BlogList/>
// <Footer/>
      
//     </div>
//   )
// }

// export default Home


// Home.tsx




// import React from 'react';
// import Header from '../Components/Header';
// import Explain from '../Components/Explain';
// import Bookconsulation from '../Components/Bookconsulation';
// import Poster from '../Components/Poster';
// import Footer from '../Components/Footer';
// import Services from '../Components/Services';
// import BlogList from '../Components/BlogList';
// import Banner from '../Components/Banner';

// const Home: React.FC = () => {
//   return (
//     <div className=''> {/* Adjust padding as per header height */}
//       <Header />
//       <div id="home" className='scroll-mt-20'>
//         <Banner />
//       </div>
//       <div id="about" className='scroll-mt-20'>
//         <Explain />
//       </div>
//       <div id="services" className='scroll-mt-20'>
//         <Services />
//       </div>
//       <div id="book-consultation" className='scroll-mt-20' >
//         <Bookconsulation />
//       </div>
//       <div id="poster" className='scroll-mt-20'>
//         <Poster />
//       </div>
//       <div id="blogs" className='scroll-mt-20'>
//         <BlogList />
//       </div>
//       <div id="contact" className='scroll-mt-20'>
//         <Footer />
//       </div>
//     </div>
//   );
// }

// export default Home;



// import React, { useEffect } from 'react';
// import { useLocation } from 'react-router-dom';
// import Header from '../Components/Header';
// import Explain from '../Components/Explain';
// import Bookconsulation from '../Components/Bookconsultation';
// import Poster from '../Components/Poster';
// import Footer from '../Components/Footer';
// import Services from '../Components/Services';
// import BlogList from '../Components/BlogList';
// import Banner from '../Components/Banner';

// const Home: React.FC = () => {
//   const location = useLocation();

//   useEffect(() => {
//     // Check if there is a scroll target specified in location state
//     const scrollToSection = location.state?.scrollTo;

//     if (scrollToSection) {
//       const sectionElement = document.getElementById(scrollToSection);

//       if (sectionElement) {
//         sectionElement.scrollIntoView({ behavior: 'smooth' });
//       }
//     }
//   }, [location]);

//   return (
//     <div className=''> {/* Adjust padding as per header height */}
//       <Header />
//       <div id="home" className='scroll-mt-20'>
//         <Banner />
//       </div>
//       <div id="about" className='scroll-mt-20'>
//         <Explain />
//       </div>
//       <div id="services" className='scroll-mt-20'>
//         <Services />
//       </div>
//       <div id="book-consultation" className='scroll-mt-20'>
//         <Bookconsulation />
//       </div>
//       <div id="poster" className='scroll-mt-20'>
//         <Poster />
//       </div>
//       <div id="blogs" className='scroll-mt-20'>
//         <BlogList />
//       </div>
//       <div id="contact" className='scroll-mt-20'>
//         <Footer />
//       </div>
//     </div>
//   );
// };

// export default Home;


import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../Components/Header';
import Explain from '../Components/Explain';
import Bookconsultation from '../Components/Bookconsultation';
import Poster from '../Components/Poster';
import Footer from '../Components/Footer';
import Services from '../Components/Services';
import BlogList from '../Components/BlogList';
import Banner from '../Components/Banner';

const Home: React.FC = () => {
  const location = useLocation();

  useEffect(() => {
    const scrollToSection = location.state?.scrollTo;

    if (scrollToSection) {
      const sectionElement = document.getElementById(scrollToSection);

      if (sectionElement) {
        sectionElement.scrollIntoView({ behavior: 'smooth' });
      }
    }
  }, [location]);

  return (
    <div className=''> {/* Adjust padding as per header height */}
      <Header />
      <div id="home" className='scroll-mt-20'>
        <Banner />
      </div>
      <div id="about" className='scroll-mt-20'>
        <Explain />
      </div>
      <div id="services" className='scroll-mt-20'>
        <Services />
      </div>
      <div id="book-consultation" className='scroll-mt-20'>
        <Bookconsultation />
      </div>
      <div id="poster" className='scroll-mt-20'>
        <Poster />
      </div>
      <div id="blogs" className='scroll-mt-20'>
        <BlogList />
      </div>
      <div id="contact" className='scroll-mt-20'>
        <Footer />
      </div>
    </div>
  );
};

export default Home;