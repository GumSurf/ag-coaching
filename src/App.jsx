import Hero from "./components/Hero";
import About from "./components/About";
import Services from "./components/Services";
import Partners from "./components/Partners";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import GoogleReviewsFeaturable from "./components/GoogleReviewFeaturable";
import SectionDivider from "./components/SectionDivider";
import InstagramGrid from "./components/InstagramGrid";
import SeoHelmet from "./components/SeoHelmet";

function App() {
  return (
    <div className="relative bg-(--color-background) text-(--color-text) min-h-screen">
      <SeoHelmet
        title="AgCoaching – Coaching sportif personnalisé"
        description="AgCoaching propose du coaching sportif, préparation physique et accompagnement personnalisé à Lorient et Hennebont."
        image="/images/hero-agcoaching.jpg"
      />

      <Hero />
      <Services />
      <Partners />
      <GoogleReviewsFeaturable />
      <InstagramGrid />
      <SectionDivider width="25%" />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
