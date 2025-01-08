import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BlogDetail from './Project/Components/BlogDetail';
import Home from './Project/Pages/Home';
import ScrollToTop from './Project/Components/ScrollToTop';

const App = () => {
  return (
    <Router>
      <ScrollToTop /> {/* Ensures the page scrolls to top on navigation */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog/:id" element={<BlogDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
