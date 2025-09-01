import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import theme from "./theme.js";
import Layout from "./components/Layout.jsx";
import Home from "./pages/Home.jsx";
import Portfolio from "./pages/Portfolio.jsx";
import Timeline from "./pages/Timeline.jsx";
import Statistics from "./pages/Statistics.jsx";
import Contact from "./pages/Contact.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <>
      <ColorModeScript initialColorMode={theme.config.initialColorMode} />
      <ChakraProvider theme={theme}>
        <Router>
          <Layout>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/portfolio" element={<Portfolio />} />
              <Route path="/timeline" element={<Timeline />} />
              <Route path="/statistics" element={<Statistics />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </Layout>
          <Footer />
        </Router>
      </ChakraProvider>
    </>
  );
}

export default App;
