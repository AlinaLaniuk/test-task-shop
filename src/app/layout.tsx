"use client";

import Header from "@/components/Header/Header";
import "../styles/globals.scss";
import { useEffect } from "react";
import { useUserStore } from "../store/useStore";
import { getAuthUser } from "@/services/auth.api";

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
        <Header />
        {children}
      </body>
    </html>
  );
}
