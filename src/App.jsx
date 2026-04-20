import "./App.css";
import Facilities from "./Components/Facilities/Facilities";
import ContactUs from "./Components/ContactUs/ContactUs";
import Footer from "./Components/Footer/Footer";
import Header from "./Components/NavBar/Header";
import Menus from "./Components/NavBar/Menus";
import Academics from "./Components/Students/Academics";
import OtherServices from "./Components/About Us/OtherServices";
import ThisFees from "./Components/Fees/ThisFees";
import NextFees from "./Components/Fees/NextFees";
import SchoolToppers from "./Components/Students/Toppers/SchoolToppers";
import Disciplinary from "./Components/About Us/Disciplinary";
import AboutUs from "./Components/About Us/AboutUs";
import Events from "./Components/About Us/Celebrations";
import Rules from "./Components/About Us/Rules";
import Parents from "./Components/About Us/Parents";
import HouseSystem from "./Components/Students/HouseSystem";
import Syallbus from "./Components/Students/Syallbus";
import FormUptoXstd from "./Components/Admission/Form/FormUptoXstd";
//Blur Image
import "react-lazy-load-image-component/src/effects/blur.css";
import Summer from "./Components/About Us/Summer/Summer";
import AdmissionProcess from "./Components/Admission/AdmissionProcess";
import Annual from "./Components/Students/Annual/Annual";
import ExtraCurricular from "./Components/Students/ExtraCuri/ExtraCurricular";
import Questions from "./Components/Students/Questions/Questions";
import Careers from "./Components/About Us/Careers/Careers";
import ScrollToTop from "./Components/ScrollToTop";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";

function App() {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Menus />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admissionprocess" element={<AdmissionProcess />} />
        <Route path="/admissionform" element={<FormUptoXstd />} />

        {/* About */}
        <Route path="/about" element={<AboutUs />} />
        <Route path="/discipline" element={<Disciplinary />} />
        <Route path="/events" element={<Events />} />
        <Route path="/discipline" element={<Disciplinary />} />
        <Route path="/rules" element={<Rules />} />
        <Route path="/parents" element={<Parents />} />
        <Route path="/otherservices" element={<OtherServices />} />
        <Route path="/summer-camp" element={<Summer />} />
        <Route path="/careers" element={<Careers />} />

        {/* Students */}
        <Route path="/academics" element={<Academics />} />
        <Route path="/facilities" element={<Facilities />} />
        <Route path="/toppers" element={<SchoolToppers />} />
        <Route path="/house" element={<HouseSystem />} />
        <Route path="/syallbus" element={<Syallbus />} />
        <Route path="/annual-day" element={<Annual />} />
        <Route path="/extracurricular" element={<ExtraCurricular />} />
        <Route path="/questions" element={<Questions />} />

        {/* Fees */}
        <Route path="/fees24-25" element={<ThisFees />} />
        <Route path="/fees25-26" element={<NextFees />} />

        {/* Contact */}
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
