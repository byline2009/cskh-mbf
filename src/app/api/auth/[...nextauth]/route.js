import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/api";
process.env['NODE_TLS_REJECT_UNAUTHORIZED'] = '0';
const API_URL = process.env.NEXTAUTH_APP_API_URL_SSL;
export const LOGIN_URL = `${API_URL}/login`;
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password,user } = credentials;
       
        console.log("email + passs", email, password);

        try {
        
          return { ...user, email: email }; // Đảm bảo trả về thông tin người dùng hợp lệ
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
