import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";


//screens
import About from "./screens/About";
import Homepaage from "./screens/Homepage";
import Whatever from "./components/Whatever";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepaage />} />
          <Route path="/about" element={<About />} />
          <Route path="/whatever" element={<Whatever />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};
export default App;
