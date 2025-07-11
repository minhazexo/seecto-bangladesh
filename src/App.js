import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Layout from "./components/common/Layout";
import Home from "..//src/pages/Home";
import About from "..//src/pages/About";
import Programs from "..//src/pages/Programs";
import News from "..//src/pages/News";
import GetInvolved from "..//src/pages/GetInvolved";
import Contact from "..//src/pages/Contact";
import SeectoProfile from "./pages/SeectoProfile";
import YouthEmpowerment from "./pages/About/focus/YouthEmpowerment";
import ClimateJustice from "./pages/About/focus/ClimateJustice";
import EnergyTransition from "./pages/About/focus/EnergyTransition";
import WellBeing from "./pages/About/focus/WellBeing";
import DigitalAid from "./pages/About/focus/DigitalAid";
import Partnerships from "./pages/About/focus/Partnerships";

// add other pages...
import LcoyBangladesh from "./pages/Lcoy Bangladesh/LcoyBangladesh";

function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/programs" element={<Programs />} />
          <Route path="/news" element={<News />} />
          <Route path="/get-involved" element={<GetInvolved />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/seecto" element={<SeectoProfile/>}/>
          <Route path="/lcoy" element={<LcoyBangladesh />} />
           <Route path="/about/focus/youth-empowerment" element={<YouthEmpowerment />} />
        <Route path="/about/focus/climate-justice" element={<ClimateJustice />} />
        <Route path="/about/focus/energy-transition" element={<EnergyTransition />} />
        <Route path="/about/focus/well-being" element={<WellBeing />} />
        <Route path="/about/focus/digital-aid" element={<DigitalAid />} />
        <Route path="/about/focus/partnerships" element={<Partnerships />} />
        </Routes>
      </Layout>
    </Router>
  );
}

export default App;
