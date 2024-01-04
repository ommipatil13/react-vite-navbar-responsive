import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Navbar } from "./components/Navbar";
import { Home, About, Contact, Services } from "./components/pages";
// import { Home } from "./components/pages/Home";
// import { About } from "./components/pages/About";
// import { Contact } from "./components/pages/Contact";
// import { Services } from "./components/pages/services";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services" element={<Services />} />
      </Routes>
    </div>
  );
}

export default App;
