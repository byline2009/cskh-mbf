import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { login } from "@/lib/api";
const API_URL = process.env.NEXTAUTH_APP_API_URL_SSL;
export const LOGIN_URL = `${API_URL}/login`;
export const authOptions = {
  providers: [
    CredentialsProvider({
      name: "credentials",
      credentials: {},
      async authorize(credentials) {
        const { email, password } = credentials;
        let newStringEmail = email;
        if (!checkIfEmailInString(email)) {
          newStringEmail = email + "@mobifone.vn";
        }
        console.log("email + passs", email, password);

        try {

          const result = await fetch(LOGIN_URL, {
            rejectUnauthorized: false,
              method: "POST",// *GET, POST, PUT, DELETE, etc
              headers: {
                "Content-Type": "application/json",
                // 'Content-Type': 'application/x-www-form-urlencoded',
              },
              body: JSON.stringify({
                username: email,
              password,
             }), // body data type must match "Content-Type" header
            });
          const user = result.json();
          if (!user) {
            return null;
          }
          console.log("user", user);

          return { ...user, email: newStringEmail }; // Đảm bảo trả về thông tin người dùng hợp lệ
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

function checkIfEmailInString(text) {
  var re =
    /(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))/;
  return re.test(text);
}
const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
