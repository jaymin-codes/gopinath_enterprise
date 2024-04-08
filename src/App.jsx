import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Gallery from "./pages/Gallery";
import Home from "./pages/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<Gallery />} />
          </Routes>
        </ScrollToTop>
      </BrowserRouter>
    </>
  );
}

export default App;
