import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Layouts/Header";
import Accueil from "./Pages/Accueil";
import Competences from "./Pages/Competences";
import Portfolio from "./Pages/Portfolio";
import Contact from "./Pages/Contact";
import Erreur from "./Pages/Erreur";
import Footer from "./Layouts/Footer";

const App = () => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/competences" element={<Competences />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="*" element={<Erreur />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
