import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop.jsx';
import Navbar from './components/Navbar.jsx';
import WhatsAppButton from './components/WhatsAppButton.jsx';
import Home from './pages/Home.jsx';
import Services from './pages/Services.jsx';
import MentionsLegales from './pages/MentionsLegales.jsx';
import LieuxIntervention from './pages/LieuxIntervention.jsx';
import VilleDetail from './pages/VilleDetail.jsx';

function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <WhatsAppButton />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/mentions-legales" element={<MentionsLegales />} />
        <Route path="/zones-intervention" element={<LieuxIntervention />} />
        <Route path="/zones-intervention/:citySlug" element={<VilleDetail />} />
      </Routes>
    </Router>
  );
}

export default App;
