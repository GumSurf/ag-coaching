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
        title="AG Coaching – Votre coach sportif à Lorient et Hennebont"
        description="Avec AG Coaching, progressez à votre rythme grâce à un accompagnement sportif personnalisé, adapté à vos objectifs et votre quotidien."
        image="/images/Coach.jpg"
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
