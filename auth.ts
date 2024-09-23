import NextAuth from "next-auth";
import Credentials from "next-auth/providers/credentials";

interface CustomCredentials {
  email?: string | undefined | unknown;
  password?: string | undefined | unknown;
}

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Credentials({
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      authorize: async (credentials: CustomCredentials | undefined) => {
        let user = null;
        if (
          credentials?.email === "admin@gmail.com" &&
          credentials?.password === "admin"
        ) {
          user = {
            email: credentials.email,
            role: "admin",
          };
        } else if (
          credentials?.email === "user@gmail.com" &&
          credentials?.password === "user"
        ) {
          user = {
            email: credentials?.email,
            role: "user",
          };
        }
        if (!user) {
          throw new Error("User not found.");
        }
        return user;
      },
    }),
  ],
  pages: {
    signIn: "/auth/login",
  },
  callbacks: {
    jwt({ token, user }) {
      if (user) {
        // User is available during sign-in
        token.role = user.role;
      }
      return token;
    },
    async session({ session, token, user }) {
      // Send properties to the client, like an access_token and user id from a provider.
      session.user.role = token.role as string | undefined;

      return session;
    },
    authorized: async ({ auth }) => {
      // Logged in users are authenticated, otherwise redirect to login page
      return !!auth;
    },
  },
});
