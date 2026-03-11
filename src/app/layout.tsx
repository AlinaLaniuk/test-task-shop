"use client";

import Header from "@/components/Header/Header";
import "../styles/globals.scss";
import { use, useEffect } from "react";
import { useUserStore } from "../store/useStore";
import { getAuthUser } from "@/services/auth.api";
import Footer from "@/components/Footer/Footer";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { setUser, user, logout } = useUserStore((state) => state);

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
          <Header
            isAuth={Boolean(user)}
            name={`${user?.firstName} ${user?.lastName}`}
            logout={logout}
          />
          <main className="main">{children}</main>
          <Footer email={user?.email} />
        </div>
      </body>
    </html>
  );
}
