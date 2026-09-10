import { Analytics } from "@vercel/analytics/react";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Policies from "./components/Policies";
import Join from "./components/Join";
import Service from "./components/Service";
import Updates from "./components/Updates";
import Schedule from "./components/Schedule";
import Live from "./components/Live";
import Media from "./components/Media";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import FloatingActions from "./components/FloatingActions";
import Announcement from "./components/Announcement";
import { useReveal } from "./hooks/useReveal";

export default function App() {
  useReveal();

  return (
    <>
      <Announcement />
      <div className="bg-grid" aria-hidden="true"></div>
      <div className="noise" aria-hidden="true"></div>

      <a href="#main-content" className="skip-link">
        跳到主要內容
      </a>

      <Header />

      <main id="main-content">
        <Hero />
        <About />
        <Policies />
        <Join />
        <Service />
        <Updates />
        <Schedule />
        <Live />
        <Media />
        <Contact />
      </main>

      <Footer />
      <FloatingActions />
      <Analytics />
    </>
  );
}
