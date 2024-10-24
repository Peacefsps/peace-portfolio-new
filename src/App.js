import './App.css';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from '../src/components/Home.js'
import Experience from "../src/components/Experience";
import Work from "../src/components/Work";
import Contact from "../src/components/Contact";

function App() {
  return (
    <div className="App">
      {/* <Home /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Work" element={<Work />} />
          <Route path="/Experience" element={<Experience />} />
          <Route path="/Contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
