const logos = [
  { name: "Fitness Time Hennebont", image: "/logos/fitness-time-logo.jpg" },
  { name: "Club de football de Landévan", image: "/logos/stade-landevantais-logo.jpg" },
  { name: "Calan Gym Fitness", image: "/logos/calan-logo.jpeg" },
  { name: "US Montagnarde", image: "/logos/us-montagnarde.svg" },
  { name: "HLB", image: "/logos/hennebont-lochrist-handball.png" },
  { name: "Arena 18", image: "/logos/arena18-black.png" },
  { name: "AS Calandaise", image: "/logos/as-calan.jpg" },
  { name: "Run Aventure", image: "/logos/run-aventure.png" },
];

export default function Partners() {
  return (
    <section id="partenaires" className="py-20 bg-background text-text">
      <div className="container mx-auto px-4 md:px-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-titre uppercase">
            DES PARTENAIRES DE CONFIANCE
          </h2>
          <p className="text-lg md:text-xl text-text-secondary max-w-3xl mx-auto">
            Fort de quatre années d'expérience, je travaille en collaboration avec des clubs, des associations, des partenaires et des clients pour leur garantir un accompagnement de qualité et un suivi optimal.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 place-items-center">
          {logos.map((logo, idx) => (
            <div key={idx} className="flex items-center justify-center">
              <img
                src={logo.image}
                alt={logo.name}
                className="max-h-24 max-w-full lg:max-w-48 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
