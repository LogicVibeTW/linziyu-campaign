import { useState } from "react";
import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Policies from "./components/Policies";
import Join from "./components/Join";
import Updates from "./components/Updates";
import Live from "./components/Live";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import PreviewSwitcher from "./components/PreviewSwitcher";
import IntroSplash from "./components/IntroSplash";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();
  const [liveMode, setLiveMode] = useState("auto-mute");
  const [heroMode, setHeroMode] = useState("photo");
  const [introEnabled, setIntroEnabled] = useState(false);

  return (
    <>
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="noise" aria-hidden="true"></div>

      <a href="#main-content" className="skip-link">
        跳到主要內容
      </a>

      <PreviewSwitcher
        liveMode={liveMode}
        setLiveMode={setLiveMode}
        heroMode={heroMode}
        setHeroMode={setHeroMode}
        introEnabled={introEnabled}
        setIntroEnabled={setIntroEnabled}
      />

      <IntroSplash enabled={introEnabled} previewMode={true} />

      <Header />

      <main id="main-content">
        <Hero heroMode={heroMode} />
        <About />
        <Policies />
        <Join />
        <Updates />
        <Live liveMode={liveMode} />
        <Media />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
      <Analytics />
    </>
  );
}
