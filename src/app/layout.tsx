import type { Metadata } from "next"; // Server component
import SessionWrapper from "./components/SessionWrapper";
import "./globals.css";
import Footer from "./footer";
import NavBar from "./components/NavBar"; // Assure-toi que le chemin est correct

export const metadata: Metadata = {
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

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>
        <SessionWrapper> {/* On encapsule tout avec `SessionProvider` */}
          <NavBar />
          <main>{children}</main>
          <Footer />
        </SessionWrapper>
      </body>
    </html>
  );
}