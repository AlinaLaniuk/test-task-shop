"use client";

import Header from "@/components/Header/Header";
import "../styles/globals.scss";
import { useEffect } from "react";
import { useUserStore } from "../store/useStore";
import { getAuthUser } from "@/services/auth.api";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const setUser = useUserStore((state) => state.setUser);
  useEffect(() => {
    getAuthUser().then((data) => {
      if (data.data) {
        setUser(data.data);
      }
    });
  }, []);
  return (
    <html lang="en">
      <body>
        <div className="app-container">
          <Header />
          <main className="main">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
