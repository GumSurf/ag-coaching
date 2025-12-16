const logos = [
  { name: "HLB", image: "/logos/hennebont-lochrist-handball.png" },
  { name: "Club de football de Landévan", image: "/logos/stade-landevantais-logo.jpg" },
  { name: "US Montagnarde", image: "/logos/us-montagnarde.svg" },
  { name: "Fitness Time Hennebont", image: "/logos/fitness-time-logo.jpg" },
  { name: "Arena 18", image: "/logos/arena18-black.png" },
  { name: "Calan Gym Fitness", image: "/logos/calan-logo.jpeg" },
  { name: "Run Aventure", image: "/logos/run-aventure.png" },
];

export default function Partners() {
  const firstRow = logos.slice(0, 3);
  const secondRow = logos.slice(3);

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

        <div className="space-y-10">
          {/* Ligne 1 : 3 logos */}
          <div className="grid grid-cols-3 gap-8 place-items-center max-w-3xl mx-auto">
            {firstRow.map((logo, idx) => (
              <div key={idx} className="flex items-center justify-center">
                <img
                  src={logo.image}
                  alt={logo.name}
                  className="max-h-24 max-w-full lg:max-w-48 object-contain"
                />
              </div>
            ))}
          </div>

          {/* Ligne 2 : 4 logos */}
          <div className="grid grid-cols-4 gap-8 place-items-center">
            {secondRow.map((logo, idx) => (
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
      </div>
    </section>
  );
}
