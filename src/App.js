import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Destination from './pages/Destination';
import Expedition from './pages/Expedition';
import Review from './pages/Review';
import FAQ from './pages/FAQ';
import Timeline from './pages/Timeline';
function App() {
  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="/destination" element={<Destination/>}/>
        <Route path="/expedition" element={<Expedition/>}/>
        <Route path="/timeline" element={<Timeline/>}/>
        <Route path="/reviews" element={<Review/>}/>
        <Route path="/faq" element={<FAQ/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
