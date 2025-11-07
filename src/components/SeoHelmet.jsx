import React from "react";
import { Helmet } from "react-helmet";

export default function SeoHelmet({ title, description, image }) {
  const siteName = "AG Coaching – Coaching personnalisé";
  const currentUrl = typeof window !== "undefined" ? window.location.href : "https://www.agcoaching.fr";

  const metaTitle = title ? `${title} | AgCoaching` : siteName;
  const metaDescription = description || "Coaching sportif et préparation physique à Lorient et Hennebont.";
  const metaImage = image
    ? (image.startsWith("http") ? image : `https://www.agcoaching.fr${image}`)
    : "https://www.agcoaching.fr/default-og.jpg";

  return (
    <Helmet>
      <title>{metaTitle}</title>
      <meta name="description" content={metaDescription} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={currentUrl} />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content={currentUrl} />
      <meta property="og:title" content={metaTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:image" content={metaImage} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={metaTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={metaImage} />
    </Helmet>
  );
}
