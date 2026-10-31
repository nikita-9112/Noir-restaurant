
import { useState, useEffect, useRef } from "react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import SignatureDishes from "./components/SignatureDishes";
import Menu from "./components/Menu";
import Gallery from "./components/Gallery";
import Reservation from "./components/Reservation";
import Footer from "./components/Footer";
import Location from "./components/Location";

function App() {
  const [showMenu, setShowMenu] = useState(false);
  const menuRef = useRef(null);

  useEffect(() => {
    if (showMenu) {
      menuRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [showMenu]);

  return (
    <>
      <Navbar />

      <main>
        <Hero />
        <About />

        <SignatureDishes
          onViewMenu={() => setShowMenu(true)}
        />

        {showMenu && (
          <div ref={menuRef}>
            <Menu />
          </div>
        )}

        <Gallery/>
        <Reservation/>
        <Location/>
        <Footer/>
      </main>
    </>
  );
}

export default App;
