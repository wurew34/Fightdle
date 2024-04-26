import "./style.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Tekken from "./Tekken";
import Street from "./Street";
import Melee from "./Melee";
import Fighterz from "./Fighterz";

function App() {
  return (
    <div className="content">
      <Router>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/tk8" element={<Tekken />} />
          <Route path="/sf6" element={<Street />} />
          <Route path="/melee" element={<Melee />} />
          <Route path="/dbfz" element={<Fighterz />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
