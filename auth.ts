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
  providers: [Auth0Provider, GitHub],
});