import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';

import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Produtos from './pages/Produtos';
import Promocoes from './pages/Promocoes';
import Contato from './pages/Contato';
import { ToastProvider } from './components/ui/Toasts';

// AnimatedRoutes allows Framer Motion to animate page transitions
const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/empresa" element={<Empresa />} />
        <Route path="/produtos" element={<Produtos />} />
        <Route path="/promocoes" element={<Promocoes />} />
        <Route path="/contato" element={<Contato />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <ToastProvider>
      <Router>
        <AnimatedRoutes />
      </Router>
    </ToastProvider>
  );
};

export default App;
