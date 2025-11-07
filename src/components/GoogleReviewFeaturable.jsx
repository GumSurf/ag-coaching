import React from "react";

const reviews = [
  {
    name: "Jérôme N.",
    text: "Adam m’accompagne depuis maintenant quasi 2 ans et je dois dire que le travail porte ses fruits. Les séances sont variées et son degré d’exigence permet d’être aussi exigeant avec soi-même.",
  },
  {
    name: "Gaël P.",
    text: "Je recommande vivement Adam ! Très bon coach avec des connaissances poussées sur le corps et son fonctionnement.",
  },
  {
    name: "Antoine V.",
    text: "À l'écoute, il sait s’adapter à mes besoins tout en me challengeant. Ma progression est notable.",
  },
  {
    name: "Raphaël G.",
    text: "Très satisfait du travail fourni. Adam a été à l’écoute tout au long du suivi et a su s’adapter à mes besoins.",
  },
];

export default function Reviews() {
  return (
    <section id="avis" className="py-24 bg-(--color-text) text-black">
      <div className="max-w-6xl mx-auto px-4">

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-white/10 bg-(--color-background) p-6 h-full flex flex-col justify-between
              transition-all duration-300 ease-out
              hover:-translate-y-1 hover:shadow-[0px_8px_20px_rgba(255,255,255,0.35)] hover:border-white/40"
            >
              <p className="text-sm italic mb-6 leading-relaxed opacity-80">
                “{review.text}”
              </p>

              <p className="font-semibold text-base tracking-tight">
                {review.name}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
