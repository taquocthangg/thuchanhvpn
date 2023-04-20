import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import Footer from "./componnets/Footer/Footer";
import Header from "./componnets/Header/Header";
import About from "./page/About";
import Contact from "./page/Contact";
import { FAQ } from "./page/FAQ";
import { Home } from "./page/Home";
import Login from "./page/Login";
import { Pricing } from "./page/Pricing";
import { Services } from "./page/Services";
import ScrollToTop from "./componnets/ScrollToTop";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <ScrollToTop>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='services' element={<Services />} />
            <Route path='faq' element={<FAQ />} />
            <Route path='pricing' element={<Pricing />} />
            <Route path='contact' element={<Contact />} />
            <Route path='login' element={<Login />} />
            <Route />
          </Routes>
        </ScrollToTop>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
