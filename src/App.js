import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Gallery, LogIn, SignUp } from "./pages";
import { Footer, ScrollToTop } from "./components";
const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Gallery />} path="/gallery" />
        <Route element={<LogIn />} path="/logIn" />
        <Route element={<SignUp />} path="/signUp" />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
