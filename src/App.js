import { Route, Routes } from "react-router-dom";
import "./App.css";
import Blog from "./Component/Blog/Blog";
import Home from "./Component/Home/Home";
import Footer from "./Component/Shared/Footer";
import Navbar from "./Component/Shared/Navbar";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
