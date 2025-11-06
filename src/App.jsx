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
    <div className="relative bg-(--color-background) text-(--color-text) min-h-screen">
      
      <Hero />
      <Services />
      <Partners />
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
