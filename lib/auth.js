import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "./prisma"

export const authOptions = {
  pages: {
    signIn: '/auth/signin',
  },
  session: {
    strategy: "jwt",
  },
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {
          label: "Email",
          type: "email",
          placeholder: "example@example.com",
        },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials.password) {
          return null;
        }

        const user = await prisma.staff.findUnique({
          where: {
            email: credentials.email,
          },
        });

        if (!user || !(credentials.password == user.password)) {
          return null;
        }

        return {
          id: user.id,
          email: user.email,
          name: user.name,
          randomKey: "Hey cool",
        };
      },
    }),
  ],
};
