import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Activities from './components/Activities/Activities';
import Reviews from './components/Reviews/Reviews';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Footer from './components/Footer/Footer';
import Contact from './components/Contact/Contact';
import Destinations from './components/Destinations/Destinations';
import AboutUs from './components/AboutUs/AboutUs';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={
                <>
                  <Slider />
                  <div className="content-section">
                    <Activities />
                    <Reviews />
                    <ContactInfo />
                  </div>
                </>
              } />
              <Route path="/contacto" element={<Contact />} />
              <Route path="/destinos" element={<Destinations />} />
              <Route path="/quienes-somos" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;