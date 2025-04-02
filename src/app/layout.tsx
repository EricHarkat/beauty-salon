import type { Metadata } from "next"; //gestions des metadonnées
import Link from "next/link"; // creer des liens sans rechargement de page pour optimisé le seo
import "./globals.css";
import Footer from "./footer";


export const metadata: Metadata = {
  // ici sont géré les metadonnées
  // Next.js injecte ces valeurs dans les balises <title> et <meta> du <head> de chaque page automatiquement.
  title: "Institut de Beauté - Soins et Bien-être",
  description:
    "Découvrez notre institut de beauté spécialisé en soins du visage, massages et épilation. Prenez rendez-vous dès maintenant.",
  keywords: ["institut de beauté", "soins visage", "massages", "épilation", "bien-être"],
  openGraph: {
    title: "Institut de Beauté - Soins et Bien-être",
    description:
      "Découvrez notre institut de beauté spécialisé en soins du visage, massages et épilation. Prenez rendez-vous dès maintenant.",
    type: "website",
    locale: "fr_FR",
    url: "https://www.mon-institut.fr",
    images: [
      {
        url: "https://www.mon-institut.fr/images/cover.jpg",
        width: 1200,
        height: 630,
        alt: "Institut de Beauté - Page d'accueil",
      },
    ],
  },
};

// le fichier layout.tsx est le Root Layout de l'application Next.js.
// Il sert de template principal pour toutes les pages du site.
// Le layout englobe toutes les page du website
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <nav className="p-4 bg-pink-500 text-white flex gap-4">
          <Link href="/">Accueil</Link>
          <Link href="/prestations">Prestations</Link>
          <Link href="/galerie">Galerie</Link>
          <Link href="/evenements">Événements</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
