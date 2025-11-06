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
    <section id="avis" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reviews.map((review, i) => (
            <div
              key={i}
              className="border border-neutral-300 bg-white p-6 text-left shadow-md"
            >
              <p className="font-bold text-black text-lg mb-1">
                {review.name}
              </p>

              <p className="text-black text-sm italic leading-relaxed mb-6">
                "{review.text}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
