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
import CalculadoraSalarioMaternidade from './pages/CalculadoraSalarioMaternidade';
import AposentadoriaPcd from './pages/AposentadoriaPcd';

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
            <Route path="/previdenciario" element={<Previdenciario />} />
            <Route path="/civel" element={<Civel />} />
            <Route path="/saude" element={<Saude />} />
            <Route path="/trabalhe" element={<Trabalhe />} />
            <Route path="/bpc-loas" element={<BpcLoas />} />
            <Route path="/salario-maternidade" element={<SalarioMaternidade />} />
            <Route path="/calculadora-salario-maternidade-rural" element={<CalculadoraSalarioMaternidade />} />
            <Route path="/aposentadoria-pcd" element={<AposentadoriaPcd />} />
          </Routes>
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HashRouter>
  );
};

export default App;