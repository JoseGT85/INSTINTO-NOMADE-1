
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Slider from './components/Slider/Slider';
import Activities from './components/Activities/Activities';
import Reviews from './components/Reviews/Reviews';
import ContactInfo from './components/ContactInfo/ContactInfo';
import Footer from './components/Footer/Footer';
import Destinations from './components/Destinations/Destinations';
import AboutUs from './components/AboutUs/AboutUs';
import WhatsAppButton from './components/WhatsAppButton/WhatsAppButton';
import { ThemeProvider } from './contexts/ThemeContext';
import './styles/index.css';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <div className="app-container">
          <div className="background-image"></div>
          <div className="background-overlay"></div>
          <Navbar />
          <main className="main-container">
            <Routes>
              <Route path="/" element={
                <>
                  <Slider />
                  <div className="content-sections">
                    <Activities />
                    <Reviews />
                    <ContactInfo />
                  </div>
                </>
              } />
              <Route path="/destinos" element={<Destinations />} />
              <Route path="/quienes-somos" element={<AboutUs />} />
            </Routes>
          </main>
          <Footer />
          <WhatsAppButton />
        </div>
      </Router>
    </ThemeProvider>
  );
}

export default App;