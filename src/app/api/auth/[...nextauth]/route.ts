import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ account, profile }) {
      // 🔒 Vérifier que seul un admin peut se connecter (ajoute ton email ici)
      const isAdmin = profile?.email === "eric.harkat@gmail.com";
      return isAdmin;
    },
    async session({ session }) {
      return session;
    },
  },
});

export { handler as GET, handler as POST };
