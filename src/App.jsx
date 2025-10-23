import AOS from "aos"; // AOS - Animate on Scroll
import "aos/dist/aos.css"; // AOS - Animate on Scroll
import { useEffect } from "react";
import { ThemeProvider, CssBaseline } from "@mui/material";
import { BrowserRouter, Routes, Route } from "react-router";
import theme from "./theme/theme";
import Navbar from "./components/navbar/Navbar";
import Footer from "./components/footer/Footer";
import ScrollToTopOnRouteChange from "./components/ScrollToTopOnRouteChange";
// pages imports
import Home from "./pages/Home";
import TecnologieMarte from "./pages/TecnologieMarte";
import RischiViaggioMarte from "./pages/RischiViaggioMarte";
import ViaggioVersoMarte from "./pages/ViaggioVersoMarte";
import PericoliDiMarte from "./pages/PericoliDiMarte";
import SopravvivenzaSuMarte from "./pages/SopravvivenzaSuMarte";

function App() {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline /> {/* reset base MUI style and adapting components */}
      <BrowserRouter>
        <Navbar navColor={"rgba(30, 30, 30, 0.5)"} />
        <ScrollToTopOnRouteChange />
        {/* reset coordinate scroll della finestra quando si passa da una pagina all'altra tramite componente Link di react-router */}
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/tecnologie-di-marte" element={<TecnologieMarte />}>
            {" "}
          </Route>
          <Route path="/pericoli-del-viaggio" element={<RischiViaggioMarte />}>
            {" "}
          </Route>
          <Route path="/il-viaggio" element={<ViaggioVersoMarte />}></Route>
          <Route path="/pericoli-di-marte" element={<PericoliDiMarte />}>
            {" "}
          </Route>
          <Route
            path="/sopravvivenza-su-marte"
            element={<SopravvivenzaSuMarte />}
          ></Route>
        </Routes>
        {/* Footer */}
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
