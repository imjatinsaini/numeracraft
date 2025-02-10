// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import BlogDetail from './Project/Components/BlogDetail';
// import Home from './Project/Pages/Home';
// import ScrollToTop from './Project/Components/ScrollToTop';
// import Astrology from './Project/ServiceDetails/Astrology';
// import Astrovastu from './Project/ServiceDetails/Astrovastu';
// import CustomizedVastu from './Project/ServiceDetails/CustomizedVastu';
// import Numerology from './Project/ServiceDetails/Numerology';
// import Numerovastu from './Project/ServiceDetails/Numerovastu';
// import VastuShastra from './Project/ServiceDetails/VastuShastra';

// const App = () => {
//   return (
//     <Router>
//       <ScrollToTop /> {/* Ensures the page scrolls to top on navigation */}
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/blog/:id" element={<BlogDetail />} />
//         <Route path="/astrology" element={<Astrology />} />
//         <Route path="/astrovastu" element={<Astrovastu />} />
//         <Route path="/customizrdvastu" element={<CustomizedVastu />} />
//         <Route path="/numerology" element={<Numerology />} />
//         <Route path="/numerovastu" element={<Numerovastu />} />
//         <Route path="/vastushastra" element={<VastuShastra/>} />
//       </Routes>
//     </Router>
//   );
// };

// export default App;







import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetail from './Project/Components/BlogDetail';
import Home from './Project/Pages/Home';
import ScrollToTop from './Project/Components/ScrollToTop';
import Astrology from './Project/ServiceDetails/Astrology';
import Astrovastu from './Project/ServiceDetails/Astrovastu';
import CustomizedVastu from './Project/ServiceDetails/CustomizedVastu';
import Numerology from './Project/ServiceDetails/Numerology';
import Numerovastu from './Project/ServiceDetails/Numerovastu';
import VastuShastra from './Project/ServiceDetails/VastuShastra';

const App = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
        <Route path="/astrology" element={<Astrology />} />
        <Route path="/astrovastu" element={<Astrovastu />} />
        <Route path="/customizedvastu" element={<CustomizedVastu />} />
        <Route path="/numerology" element={<Numerology />} />
        <Route path="/numerovastu" element={<Numerovastu />} />
        <Route path="/vastushastra" element={<VastuShastra />} />
      </Routes>
    </Router>
  );
};

export default App;



// google text shown 
// image compress
// image download disabled 
// solar system best one 
