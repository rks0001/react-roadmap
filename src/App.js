import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Homepage from './components/Homepage';
import NotFound from './components/NotFound';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
function App() {
  return (
    <Router >
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
