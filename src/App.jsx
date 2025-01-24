import Components from "./components/AllComponents/Components";
import Header from "./components/Header/Header";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Footer from "./components/Footer/Footer";
import ScrollToTop from "./utils/ScrollToTop";
import AcademicsSection from "./components/Academics/AcademicsSection";
import ActivitesPage from "./components/Activities/ActivitesPage";
import AboutPage from "./components/AboutSection/AboutPage";
import ContactUs from "./components/Contact/ContactUs";

const App = () => {
  return (
    <>
      <Router>
        <ScrollToTop />
        <div className="font-title">
          <Header />
          <div className="pt-16">
            <Routes>
              <Route path="/" element={<Components />} />
              <Route path="/academics" element={<AcademicsSection />} />
              <Route path="/activities" element={<ActivitesPage />} />
              <Route path="/about" element={<AboutPage />} />
              <Route path="/contact" element={<ContactUs />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </Router>
    </>
  );
};

export default App;
