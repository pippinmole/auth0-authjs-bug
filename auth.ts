import NextAuth from "next-auth"
import { PrismaAdapter } from "@auth/prisma-adapter";
import Auth0Provider from "next-auth/providers/auth0"

import prisma from "@/lib/db";
import GitHub from "@auth/core/providers/github";

export const {
  handlers: { GET, POST },
  auth,
  signIn, signOut
} = NextAuth({
  adapter: PrismaAdapter(prisma),
  providers: [
    Auth0Provider({
      clientId: process.env.AUTH_AUTH0_ID,
      clientSecret: process.env.AUTH_AUTH0_SECRET
    }),
    GitHub({
      clientId: process.env.AUTH_GITHUB_ID,
      clientSecret: process.env.AUTH_GITHUB_SECRET,
    })
  ],
});