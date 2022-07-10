import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Welcome from "./pages/Welcome";
import HomeCreator from "./pages/HomeCreator"
import Publish from "./pages/Publish";
import Connexion from "./pages/Login";
import Inscription from "./pages/Signin";
import "./assets/styles/style.css";
import "../src/assets/fonts/Roboto/Roboto-Regular.ttf"
import "../src/assets/fonts/Roboto/Roboto-Bold.ttf"
import "../src/assets/fonts/Roboto/Roboto-Medium.ttf"


function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path="/" element={<Welcome />} />
      <Route path="/connexion" element={<Connexion />} />
        <Route path="/inscription" element={<Inscription />} />
        <Route path="/accueil" element={<Home />} />
        <Route path="/accueil-creator" element={<HomeCreator/>} />
        <Route path="/publier" element={<Publish />} />
        <Route path="*" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
