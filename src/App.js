import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Gallery } from "./pages";
import { Footer, ScrollToTop } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Gallery />} path="/gallery" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
