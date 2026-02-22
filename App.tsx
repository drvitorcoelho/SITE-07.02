import React from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import Home from './pages/Home';
import Previdenciario from './pages/Previdenciario';
import Civel from './pages/Civel';
import Trabalhe from './pages/Trabalhe';
import BpcLoas from './pages/BpcLoas';
import Saude from './pages/Saude';
import SalarioMaternidade from './pages/SalarioMaternidade';
import AposentadoriaPcd from './pages/AposentadoriaPcd';
import QuemSomos from './pages/QuemSomos';
import FAQ from './pages/FAQ';
import Contato from './pages/Contato';

// Scroll to top on route change
const ScrollToTop = () => {
  const { pathname } = useLocation();

  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quem-somos" element={<QuemSomos />} />
            <Route path="/previdenciario" element={<Previdenciario />} />
            <Route path="/civel" element={<Civel />} />
            <Route path="/saude" element={<Saude />} />
            <Route path="/bpc-loas" element={<BpcLoas />} />
            <Route path="/salario-maternidade" element={<SalarioMaternidade />} />
            <Route path="/aposentadoria-pcd" element={<AposentadoriaPcd />} />
            <Route path="/faq" element={<FAQ />} />
            <Route path="/contato" element={<Contato />} />
            <Route path="/trabalhe" element={<Trabalhe />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;