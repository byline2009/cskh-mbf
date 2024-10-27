/* eslint-disable @next/next/no-sync-scripts */
import "../styles/global.scss";
import HeaderAppNoAuth from "src/components/header/HeaderAppNoAuth";
import React, { Suspense } from "react";
import "react-modern-drawer/dist/index.css";
import MobileMenu from "@components/MobileMenu";
import dynamic from "next/dynamic";
import Footer from "@components/footer";
import { AuthProvider } from "./Providers.js";
import { redirect } from "next/navigation";
import { getServerSession } from "next-auth";
import { authOptions } from "./api/auth/[...nextauth]/route";
import Layout from "../components/layout/Layout";

const RootLayout = async ({ children }) => {
  const session = await getServerSession(authOptions);
  return (
    <html lang="en" suppressHydrationWarning>
      <link rel="icon" type="image/png" href="imgs/favicon.png" />
      <title>Chăm sóc khách hàng Công ty MobiFone 7</title>
      <head>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css"
        />
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css"
          integrity="sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm"
          crossOrigin="anonymous"
        />
      </head>
      <body>
        <script
          src="https://code.jquery.com/jquery-3.2.1.slim.min.js"
          integrity="sha384-KJ3o2DKtIkvYIK3UENzmM7KCkRr/rE9/Qpg6aAZGJwFDMVNA/GpGFF93hXpG5KkN"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/popper.js@1.12.9/dist/umd/popper.min.js"
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q"
          crossOrigin="anonymous"
        ></script>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/js/bootstrap.min.js"
          integrity="sha384-JZR6Spejh4U02d8jOt6vLEHfe/JQGiRRSQQxSfFWpi1MquVdAyjUar5+76PVCmYl"
          crossOrigin="anonymous"
        ></script>
        <AuthProvider>
          <Suspense fallback={<p>Fetching user details...</p>}>
            {session ? <Layout>{children}</Layout> : children}
          </Suspense>
        </AuthProvider>
      </body>
    </html>
  );
};
export default RootLayout;
