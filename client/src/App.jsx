import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import Header from './components/Header';
import Footer from './components/Footer';

import Landing from './pages';
import About from './pages/About';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <main className={`d-flex flex-column ${darkMode ? 'dark' : ''}`}>
      <Header setDarkMode={setDarkMode} />
      <div>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
      </div>
      <Footer />
    </main>
  );
}

export default App;