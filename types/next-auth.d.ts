import NextAuth from "next-auth";

declare module "next-auth" {
  interface User {
    role?: string;
    email?: string;
  }
  interface Session {
    user: User;
  }
}
