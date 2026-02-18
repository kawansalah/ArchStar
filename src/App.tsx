import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";
import UnderMaintenance from "./components/UnderMaintenance";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="min-h-screen bg-gray-50">
        <Navbar />

        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route
              path="/industries"
              element={
                <UnderMaintenance
                  pageName="Industries & Sectors"
                  expectedDate="Coming Soon"
                />
              }
            />
            <Route
              path="/global-footprint"
              element={
                <UnderMaintenance
                  pageName="Global Footprint"
                  expectedDate="Coming Soon"
                />
              }
            />
            <Route
              path="/contact"
              element={
                <UnderMaintenance
                  pageName="Contact Us"
                  expectedDate="Coming Soon"
                />
              }
            />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
