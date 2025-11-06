import React from "react";
import { Helmet } from "react-helmet";

export default function SeoHelmet({ title, description, url, image }) {
  const siteUrl = url || "https://www.agcoaching.fr";
  const siteImage = image ? (image.startsWith("http") ? image : siteUrl + image) : siteUrl + "/default-og.jpg";

  return (
    <Helmet>
      <title>{title || "AgCoaching – Coaching personnalisé"}</title>
      <meta name="description" content={description || "Coaching sportif et préparation physique à Lorient et Hennebont"} />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={siteUrl} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content={siteUrl} />
      <meta property="og:title" content={title || "AgCoaching"} />
      <meta property="og:description" content={description || "Coaching sportif et préparation physique"} />
      <meta property="og:image" content={siteImage} />

      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title || "AgCoaching"} />
      <meta name="twitter:description" content={description || "Coaching sportif et préparation physique"} />
      <meta name="twitter:image" content={siteImage} />
    </Helmet>
  );
}
