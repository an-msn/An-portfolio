import "./App.css";
import { useState, useEffect } from "react";
import Loader from "./components/loader/loader";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import ScrollUp from "./components/scrollup/ScrollUp";
import Portfolio from "./components/projects/Portfolio";

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3000); // 3 seconds total loading time
  }, []);

  return (
    <>
      {isLoading && <Loader />}

      <div className="content">
        <Header />
        <main className="main">
          <Home />
          <About />
          <Portfolio />
          <Contact />
        </main>
        <Footer />
        <ScrollUp />
      </div>

      {/* SEO Fallback */}
      <noscript>
        <style>{`.loading { display: none !important; }`}</style>
      </noscript>
    </>
  );
};

export default App;
