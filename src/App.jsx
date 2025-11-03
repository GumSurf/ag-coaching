import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoogleReviewsFeaturable from "./components/GoogleReviewFeaturable";
import SectionDivider from "./components/SectionDivider";
import InstagramGrid from "./components/InstagramGrid";

function App() {
  return (
    <div className="relative bg-gray-900 text-white min-h-screen">
      {/* Motif fitness SVG en background */}
      <svg
        className="absolute inset-0 w-full h-full pointer-events-none -z2"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="fitnessGrid"
            x="0"
            y="0"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 40 0 L 0 0 0 40"
              fill="none"
              stroke="rgba(249,115,22,0.07)"
              strokeWidth="1"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#fitnessGrid)" />
      </svg>

      {/* Contenu du site */}
      <Hero />
      <About />
      <SectionDivider width="25%" />
      <Services />
      <SectionDivider width="25%" />
      <Partners />
      <SectionDivider width="25%" />
      <GoogleReviewsFeaturable />
      <SectionDivider width="25%" />
      <InstagramGrid />
      <SectionDivider width="25%" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
