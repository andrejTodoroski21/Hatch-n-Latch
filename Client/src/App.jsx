import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import NavBar from './components/Navbar';
import HomePage from './components/Homepage';
import Services from './components/Services';
// import Booking from './components/Booking';

function App() {
  return (
    <Router>
      <Header />
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<Services/>}/>
        {/* <Route path="/booking/:serviceId" element={<Booking />} /> */}
        <Route path="/about" element={<div>About Me (T learnt later)</div>} />
        <Route path="/certifications" element={<div>Certifications (TBD)</div>} />
        <Route path="/summary" element={<div>Summary (TBD)</div>} />
      </Routes>
    </Router>
  );
}
export default App;