// src/components/NavBar.tsx
"use client";

import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/react";

export default function NavBar() {
  const { data: session } = useSession();

  return (
    <nav className="p-4 bg-pink-500 text-white flex gap-4">
      <Link href="/">Accueil</Link>
      <Link href="/prestations">Prestations</Link>
      <Link href="/galerie">Galerie</Link>
      <Link href="/evenements">Événements</Link>
      <Link href="/contact">Contact</Link>

      {session ? (
        <>
          <Link href="/admin">Admin</Link>
          <button
            onClick={() => signOut({ callbackUrl: "/" })}
            className="ml-auto bg-white text-pink-500 px-3 py-1 rounded"
          >
            Se déconnecter
          </button>
        </>
      ) : (
        <button onClick={() => signIn("google", { callbackUrl: "/admin" })} className="ml-auto bg-green-500 px-4 py-2 rounded">
          Se connecter
        </button>
      )}
    </nav>
  );
}
