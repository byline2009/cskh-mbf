import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/api";
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          // await connectMongoDB();
          // const user = await User.findOne({ email });
          const user = await login(email, password);

          if (!user) {
            return null;
          }
          console.log("user", user);
          // const passwordMatch = await bcrypt.compare(password, user.password);
          // if (!passwordMatch) {
          //   return null;
          // }
          return user;
        } catch (error) {
          console.log("Error", error);
        }
      },
    }),
  ],
  session: {
    strategy: "jwt",
    maxAge: 60 * 60,
  },
  jwt: {
    maxAge: 60 * 60,
  },
  secret: process.env.NEXTAUTH_SECRET,
  pages: {
    signIn: "/login",
  },
};
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
