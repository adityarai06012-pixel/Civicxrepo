import { Routes, Route } from "react-router-dom";

/* Layout components */
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";



/* Pages */
import Home from "./pages/Home";
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Report from "./pages/Report";
import Browse from "./pages/Browse";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/report" element={<Report />} />
        <Route path="/browse" element={<Browse />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
