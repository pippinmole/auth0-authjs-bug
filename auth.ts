import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import Auth0Provider from "next-auth/providers/auth0"

import prisma from "@/lib/db";

export const {
  handlers: { GET, POST },
  auth,
  signIn, signOut
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [Auth0Provider({
    clientId: process.env.AUTH_AUTH0_ID,
    clientSecret: process.env.AUTH_AUTH0_SECRET,
  })],
});

//
// export const config = {
//   adapter: PrismaAdapter(prisma),
//   theme: {
//     logo: "https://next-auth.js.org/img/logo/logo-sm.png",
//   },
//   providers: [
//     Auth0,
//   ],
//   callbacks: {
//     authorized({ request, auth }) {
//       const { pathname } = request.nextUrl
//       if (pathname === "/middleware-example") return !!auth
//       return true
//     },
//   },
// } satisfies NextAuthConfig
//
// export const { handlers, auth, signIn, signOut } = NextAuth(config)
